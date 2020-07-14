import React from 'react';
import {StyleSheet, Text} from 'react-native';

import ModelView from 'react-native-gl-model-view';

const Display = (props) => {
  console.log('Display.js: Current texture = ' + props.textureURI);

  //^^^ for testing whether the whole model view will not update or model view will update but won't change texture
  return (
    <>
      <Text>{props.textureURI}</Text>
      <ModelView
        model={{
          uri: props.modelURI,
        }}
        texture={{
          uri: props.textureURI,
        }}
        //tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
        flipTexture={props.flipTexture}
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
    backgroundColor: 'transparent',
  },
});

export default Display;
