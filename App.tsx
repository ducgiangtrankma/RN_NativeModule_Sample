import React, {FC, useEffect} from 'react';
import {
  Linking,
  NativeModules,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const {PermissionModule, LocationModule} = NativeModules;
interface Props {}
const App: FC<Props> = () => {
  const getAndroidPermission = () => {
    PermissionModule.checkCameraPermission()
      .then((res: any) => {
        console.log('Camera permission:', res);
        // Handle permission status
      })
      .catch((error: any) => {
        console.error('Error checking notification permissions:', error);
        // Handle error
      });
    PermissionModule.checkNotificationPermissions()
      .then((res: any) => {
        console.log('Notification permission:', res);
        if (!res) {
          Linking.openSettings();
        }
        // Handle permission status
      })
      .catch((error: any) => {
        console.error('Error checking notification permissions:', error);
        // Handle error
      });
  };

  const getIOSPermission = () => {
    PermissionModule.checkCameraPermission()
      .then((hasPermission: any) => {
        console.log('Camera permission:', hasPermission);
      })
      .catch((error: any) => {
        console.error('Error checking camera permission:', error);
      });
    PermissionModule.checkMicrophonePermission()
      .then((hasPermission: any) => {
        console.log('Micro permission:', hasPermission);
      })
      .catch((error: any) => {
        console.error('Error checking Micro permission:', error);
      });

    LocationModule.getMyLocation()
      .then((location: any) => {
        console.log('Latitude:', location.latitude);
        console.log('Longitude:', location.longitude);
      })
      .catch((error: any) => {
        console.error('Error getting location:', error);
      });
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      getAndroidPermission();
    } else {
      getIOSPermission();
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openSettings()}>
        <Text>Open Android setting</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openSettings()}>
        <Text>Open IOS setting</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
