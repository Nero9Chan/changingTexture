import React, {useState, useMemo, useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import Display from './Display'; //Display model (<ModelView/>)
import Buttonset from './Buttonset';

const App = () => {
  const [modelURI1, setModelURI1] = useState('demon.obj'); //changing model(.obj) in here works
  const [textureURI1, setTextureURI1] = useState('default-demon.png'); //changing texture(.png) in here works!! (e.g. red-demon.png)
  const [keyValue1, setkeyValue1] = useState(0);

  const [modelURI2, setModelURI2] = useState('Hamburger.obj'); //changing model(.obj) in here works
  const [textureURI2, setTextureURI2] = useState('Hamburger.png'); //changing texture(.png) in here works!! (e.g. red-demon.png)
  const [keyValue2, setkeyValue2] = useState(10);

  //^^^rotate X for testing whether the whole model view will not update or model view will update but won't change texture

  const updateKeyValue1 = () => {
    if (keyValue1) setkeyValue1(0);
    else setkeyValue1(1);
  };

  const updateKeyValue2 = () => {
    if (keyValue2 == 10) setkeyValue2(11);
    else setkeyValue2(10);
  };

  const demonTexture = [
    'red-demon.png',
    'green-demon.png',
    'blue-demon.png',
    'default-demon.png',
  ];

  const hamburgerTexture = [
    'red-Hamburger.png',
    'green-Hamburger.png',
    'blue-Hamburger.png',
    'Hamburger.png',
  ];

  console.log(
    <Display
      key={keyValue1}
      modelURI={modelURI1}
      textureURI={textureURI1}
      flipTexture={false}
      scale={0.01}
      rotateX={-90.0}
      translateZ={-4}
    />,
  );

  console.log(
    <Display
      key={keyValue2}
      modelURI={modelURI2}
      textureURI={textureURI2}
      flipTexture={true}
      scale={0.5}
      rotateX={10.0}
      translateZ={-4}
    />,
  );

  return (
    <>
      <View style={styles.container}>
        <View key={keyValue1} style={styles.itemFull}>
          <Display
            modelURI={modelURI1}
            textureURI={textureURI1}
            flipTexture={false}
            scale={0.01}
            rotateX={-90.0}
            translateZ={-4}
          />

          <Buttonset
            textureURI={demonTexture}
            modelURI={modelURI1}
            setTextureURI={setTextureURI1}
            setModelURI={setModelURI1}
            updateKeyValue={updateKeyValue1}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  item: {
    width: '50%', // is 50% of container width
  },
  itemFull: {
    width: '100%',
  },
});

export default App;
