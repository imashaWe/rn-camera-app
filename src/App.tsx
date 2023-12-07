import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export default function App() {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  });

  if (device == null || !hasPermission) {
    return (
      <View>
        <Text>Device is null or Permission Error</Text>
      </View>
    );
  }

  const takePhoto = async () => {
    // TODO: Take Photo
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Button onPress={takePhoto} title="Take Photo" />
      </View>

      <Camera style={styles.cameraView} device={device} isActive={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
