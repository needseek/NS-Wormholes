//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react RemoteIcon.jsx -o RemoteIcon.js
// 2. add, commit, push to main

import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { iconTypes } from 'https://raw.githubusercontent.com/needseek/NS-Wormholes/refs/heads/main/Topic%20Wheel%20Icons/iconTypes.js';

const RemoteIcon = (props) => {
  console.log('props', props);
  const selectedIcon = iconTypes[props.type] ?? iconTypes['check'];
  const assetSource = props.full && selectedIcon.fullAsset 
    ? { uri: selectedIcon.fullAsset } 
    : { uri: selectedIcon.asset };

  const styles = StyleSheet.create({
    icon: {
      ...props.style,
      display: 'flex',
      width: props.size * selectedIcon.ratio.width,
      height: props.size * selectedIcon.ratio.height,
      minWidth: props.size * selectedIcon.ratio.width,
      minHeight: props.size * selectedIcon.ratio.height,
      maxWidth: props.size * selectedIcon.ratio.width,
      maxHeight: props.size * selectedIcon.ratio.height,
    }
  });

  return (
    <ImageBackground
      style={styles.icon}
      source={assetSource}
      resizeMode="contain"
    />
  );
};

export default RemoteIcon;