import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';



export default function App() {

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const add = ()=> {
      setList([...list, {key:item}]);
      setItem('');
  };
  const reset = ()=> {
      setList([]);
      setItem('');
  };
  return (
    <View style={styles.container}>
      <TextInput id="item"
        style ={{width:200 , borderColor:'#333', borderWidth:1, marginBottom:-1}}
        onChangeText={item =>  setItem(item)}
        value={item}
        />

    <View style={styles.buttonContainer}>
        <Button onPress={add} title="ADD"/>
        <Button onPress={reset} title="CLEAR"/>
      </View>
      <View style={styles.listContainer}>
      <Text style={styles.header}>Shopping list</Text>
      <FlatList data ={list} renderItem={({item}) =>
      <Text style={{marginBottom:5}}>{item.key}</Text >}/>
      </View>
 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:120,
    marginTop:10,
  },
  listContainer: {
    width:200,
    marginTop:5,
    alignItems:'center',
  },
  header: {
    fontWeight:'bold',
    color:'blue',
    marginBottom:5,
  },
});
