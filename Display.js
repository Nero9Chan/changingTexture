import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

import ModelView from 'react-native-gl-model-view';

const Display = (modelURI, textureURI, X) => {
  console.log('Display.js: Current texture = ' + textureURI);

  if (textureURI == 'demon.png') {
    X = -90.0; //for rotateX
  }
  //^^^ for testing whether the whole model view will not update or model view will update but won't change texture

  return (
    <>
      <Text>{textureURI}</Text>
      <ModelView
        model={{
          uri: modelURI,
        }}
        texture={{
          uri: textureURI,
        }}
        //tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
        flipTexture={false}
        //golden scale for demon
        scale={0.01}
        rotateX={Number.parseInt(X)}
        rotateZ={0}
        translateZ={-4}
        style={styles.view}
      />
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Display;
