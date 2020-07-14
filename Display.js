import React from 'react';
import {StyleSheet, Text, Animated} from 'react-native';

import ModelView from 'react-native-gl-model-view';

const Display = (props) => {
  //console.log('Display.js: Current texture = ' + textureURI);

  //^^^ for testing whether the whole model view will not update or model view will update but won't change texture
  return (
    <>
      <Text>{props.textureURI}</Text>
      <ModelView
        key={props.keyValue}
        model={{
          uri: props.modelURI,
        }}
        texture={{
          uri: props.textureURI,
        }}
        //tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
        flipTexture={props.flipTexture}
        //golden scale for demon
        scale={props.scale}
        rotateX={props.rotateX}
        translateZ={props.translateZ}
        style={styles.view}
      />
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    //backgroundColor: '#fff',
    backgroundColor: 'transparent',
  },
});

export default Display;
