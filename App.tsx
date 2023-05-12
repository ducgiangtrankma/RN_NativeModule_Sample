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

const {PermissionModule} = NativeModules;
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
  useEffect(() => {
    if (Platform.OS === 'android') {
      getAndroidPermission();
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openSettings()}>
        <Text>My Content</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
