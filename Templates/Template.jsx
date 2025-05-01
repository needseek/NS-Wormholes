//  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react FILE_NAME.jsx -o FILE_NAME.js
// 2. add, commit, push to main

import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';


const FILE_NAME = (props) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return <View style={styles.container}>
    <Text>Hello World</Text>
  </View>;
};

export default FILE_NAME;