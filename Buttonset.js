import React from 'react';
import {Button} from 'react-native';

const Buttonset = (props) => {
  return (
    <>
      <Button
        title="Red"
        color="red"
        onPress={() => {
          props.setTextureURI(props.textureURI[0]);
          props.setModelURI(props.modelURI);
          props.updateKeyValue();
          console.log(
            'App.js: obj should be changed to ' + props.textureURI[0],
          );
        }}
      />
      <Button
        title="Green"
        color="green"
        onPress={() => {
          props.setTextureURI(props.textureURI[1]);
          props.setModelURI(props.modelURI);
          props.updateKeyValue();
          console.log(
            'App.js: obj should be changed to ' + props.textureURI[1],
          );
        }}
      />
      <Button
        title="Blue"
        color="blue"
        onPress={() => {
          props.setTextureURI(props.textureURI[2]);
          props.setModelURI(props.modelURI);
          props.updateKeyValue();
          console.log(
            'App.js: obj should be changed to ' + props.textureURI[2],
          );
        }}
      />
      <Button
        title="default"
        color="black"
        onPress={() => {
          props.setTextureURI(props.textureURI[3]);
          props.setModelURI(props.modelURI);
          props.updateKeyValue();
          console.log(
            'App.js: obj should be changed to ' + props.textureURI[3],
          );
        }}
      />
    </>
  );
};

export default Buttonset;
