import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

/**
 * Reusable Photo Album component that allows selecting photos from the device gallery
 */
const PhotoAlbum = ({
  photos = [],
  onPhotoChange,
  maxPhotos = 10,
  title = "Photos",
  containerStyle = {},
}) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  // Request permission to access photo library - only check once component mounts
  useEffect(() => {
    let isMounted = true;
    
    const checkPermission = async () => {
      try {
        // Check permissions without requesting first
        const galleryStatus = await ImagePicker.getMediaLibraryPermissionsAsync();
        
        if (galleryStatus.status !== 'granted') {
          if (Platform.OS === 'ios') {
            // On iOS, only request if the user hasn't been asked before (avoid multiple prompts)
            if (galleryStatus.canAskAgain) {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (isMounted) setHasGalleryPermission(status === 'granted');
            } else {
              if (isMounted) setHasGalleryPermission(false);
            }
          } else {
            // On Android, request normally
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (isMounted) setHasGalleryPermission(status === 'granted');
          }
        } else {
          if (isMounted) setHasGalleryPermission(true);
        }
      } catch (error) {
        console.warn('Error checking permissions:', error);
        if (isMounted) setHasGalleryPermission(false);
      }
    };

    checkPermission();
    
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle adding photos
  const handleAddPhotos = async () => {
    try {
      // Check permission right before accessing the photo library
      const permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync();
      
      if (!permissionResult.granted) {
        // If permission not granted, try to request it
        if (permissionResult.canAskAgain) {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            Alert.alert(
              "Permission Required",
              "This app needs access to your photos to continue. Please enable it in your device settings.",
              [{ text: "OK" }]
            );
            return;
          }
        } else {
          // Can't ask again, prompt user to enable manually
          Alert.alert(
            "Permission Required",
            "This app needs access to your photos to continue. Please enable it in your device settings.",
            [{ text: "OK" }]
          );
          return;
        }
      }

      if (photos.length >= maxPhotos) {
        Alert.alert(
          "Limit Reached",
          `You can only add up to ${maxPhotos} photos.`,
          [{ text: "OK" }]
        );
        return;
      }

      // Launch image picker with safe options
      const pickerOptions = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
        allowsMultipleSelection: Platform.OS !== 'web',
        selectionLimit: Platform.OS !== 'web' ? maxPhotos : undefined,
      };
      
      let result = await ImagePicker.launchImageLibraryAsync(pickerOptions);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        // Get existing URIs and create a map for easier lookup
        const existingPhotoMap = new Map();
        photos.forEach(photo => {
          existingPhotoMap.set(photo.uri, photo);
        });
        
        // Track which existing photos were NOT re-selected
        const selectedUris = new Set(result.assets.map(asset => asset.uri));
        const photosToRemove = photos.filter(photo => !selectedUris.has(photo.uri));
        
        // Create new photos array (only adding photos that weren't previously added)
        const newPhotosArray = [];
        
        // Process result assets
        for (const asset of result.assets) {
          // If we already have this photo, keep it
          if (existingPhotoMap.has(asset.uri)) {
            newPhotosArray.push(existingPhotoMap.get(asset.uri));
          } 
          // Otherwise, if it's new, add it
          else {
            newPhotosArray.push({
              id: `photo-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
              uri: asset.uri,
              width: asset.width,
              height: asset.height,
              type: asset.type || 'image',
              fileName: asset.fileName || `photo-${Date.now()}.jpg`,
            });
          }
        }
        
        // Update photos with new array
        onPhotoChange(newPhotosArray);
        
      }
    } catch (error) {
      console.warn('Error selecting images:', error);
      Alert.alert(
        "Error",
        "There was a problem selecting photos. Please try again.",
        [{ text: "OK" }]
      );
    }
  };

  // Handle removing a photo
  const handleRemovePhoto = (photoId) => {
    const updatedPhotos = photos.filter(photo => photo.id !== photoId);
    onPhotoChange(updatedPhotos);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.photoCount}>
          {photos.length} photos
        </Text>
      </View>
      
      <TouchableOpacity 
        style={styles.addButton}
        onPress={handleAddPhotos}
        disabled={photos.length >= maxPhotos}
      >
        <Ionicons name="image-outline" size={20} color="#007AFF" />
        <Text style={styles.addButtonText}>Add Photos</Text>
      </TouchableOpacity>
      
      {photos.length > 0 ? (
        <View style={styles.photoGrid}>
          {photos.map(item => (
            <View key={item.id} style={styles.photoContainer}>
              <Image source={{ uri: item.uri }} style={styles.photo} />
              
              <TouchableOpacity 
                style={styles.removeButton} 
                onPress={() => handleRemovePhoto(item.id)}
              >
                <Ionicons name="close-circle" size={22} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="images-outline" size={40} color="#CCCCCC" />
          <Text style={styles.emptyStateText}>No photos added yet</Text>
          <Text style={styles.emptyStateSubtext}>Tap "Add Photos" to select from your gallery</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  photoCount: {
    fontSize: 14,
    color: '#777',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  addButtonText: {
    color: '#007AFF',
    fontWeight: '500',
    marginLeft: 6,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginHorizontal: -2, // To offset the margin in photoContainer
  },
  photoContainer: {
    width: '33.333%', // Exactly 3 photos per row
    aspectRatio: 1,
    padding: 2,
    position: 'relative',
  },
  photo: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  removeButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    zIndex: 1,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    padding: 30,
    marginTop: 10,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
    marginTop: 12,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default PhotoAlbum; 