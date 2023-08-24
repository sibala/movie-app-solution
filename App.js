import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import MainDrawerNavigator from './navigators/MainDrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
          <MainDrawerNavigator/>
          {/* <Text>App</Text> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,          // Stretches out, takes up the available space
    marginTop: 50,
  }
});