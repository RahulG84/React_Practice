import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  const [text, setText] = useState('');
  return (
    <View style={styles.view1}>
      <Text style={styles.homeStyle1}>Home Screen</Text>
      <View style={styles.homeView2}>
        <Text style={styles.homeStyle2}>Hello World</Text>
        <Button
          title="Go to Details Screen"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.homeText}>
        <TextInput
          style={styles.homeTB}
          placeholder="Enter The Name"
          onChangeText={newText => setText(newText)}
          value={text}
        />
        <Button
          title="Click Me"
          onPress={() => {
            alert(`Your Name is ${text}`);
          }}
        />
      </View>
    </View>
  );
}

function DetailsScreen({navigation}) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    console.log('incrementCount setCount');
    setCount(count + 1);
  }

  return (
    <View style={styles.detailView1}>
      <Text style={styles.detailStyle1}>Details Screen</Text>
      <Button
        style={styles.box}
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Increment Count" onPress={incrementCount} />
      <Press pro={count} />
    </View>
  );
}

const Press = ({pro}) => {
  return (
    <View>
      <Text>Tap To Increse : {pro}</Text>
      {/* <Text>Your_Name : {pros} </Text> */}
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center',
  },
  homeStyle1: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  homeView2: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  homeStyle2: {
    color: 'red',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 25,
  },
  detailView1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailStyle1: {
    fontSize: 25,
    color: 'black',
  },
  homeText: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  homeTB: {
    color: 'black',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
});

export default App;
