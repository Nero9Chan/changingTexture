import React, {useState, useMemo} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import Display from './Display'; //Display model (<ModelView/>)

const App = () => {
  const [modelURI, setModelURI] = useState('demon.obj'); //changing model(.obj) in here works
  const [textureURI, setTextureURI] = useState('demon.png'); //changing texture(.png) in here works!! (e.g. red-demon.png)
  const X = '180';
  //^^^rotate X for testing whether the whole model view will not update or model view will update but won't change texture

  const DisplayFunc = useMemo(() => Display(modelURI, textureURI, X));

  console.log(DisplayFunc);

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flex: 9,
          }}>
          {Display(modelURI, textureURI, X)}
        </View>
        <View>
          <Button
            title="Red"
            color="red"
            onPress={() => {
              setTextureURI('red-demon.png');
              console.log('App.js: obj should be changed to red');
            }}
          />
          <Button
            title="Green"
            color="green"
            onPress={() => {
              setTextureURI('green-demon.png');
              console.log('App.js: obj should be changed to green');
            }}
          />
          <Button
            title="Blue"
            color="blue"
            onPress={() => {
              setTextureURI('blue-demon.png');
              console.log('App.js: obj should be changed to blue');
            }}
          />
          <Button
            title="Default"
            color="black"
            onPress={() => {
              setTextureURI('demon.png');
              console.log('App.js: obj should be changed to default');
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
