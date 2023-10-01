import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [Permission, setPermission] = useState(null);
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [cameraType, setCameraType] = useState('back');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  const openCamera = () => {
    setCameraOpen(true);
  };

  const closeCamera = () => {
    setCameraOpen(false);
  };

  if (Permission === null) {
    return <Text>Asking for a permission to use camera </Text>;
  }

  if (Permission === false) {
    return <Text>you can't access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {!isCameraOpen ? (
        <View>
          <Text style={styles.paragraph}>
            Abdullah Aljoulani Application
          </Text>
          <Button title={'Open Camera'} onPress={openCamera} />
        </View>
      ) : (
        <>
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type[cameraType]}  
        >
        </Camera>
          <Button title={'Close Camera'} onPress={closeCamera} />
          {cameraType ==='back'? <Button title={'front Camera'} onPress={()=> setCameraType('front')} />: <Button title={'Back Camera'} onPress={()=> setCameraType ('back')} />}
          </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height:`80%`
  },
});