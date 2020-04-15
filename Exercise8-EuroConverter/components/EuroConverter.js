import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';

export default function EuroConverter() {

  const [rates, setRates] = useState([])
  const [amount, setAmount] = useState('')
  const [pickedCurrency, setPickedCurrency] = useState('')
  const [result, setResult] = useState('')
  const [index, setIndex] = useState('')

  useEffect(() => {
    getRates();

  }, []);

  const getRates = () => {
    const url = 'http://data.fixer.io/api/latest?access_key=7ab5e0d7fee576ac9df153985c250eea';
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
       setRates(responseJson.rates);
    })
    .catch((error) => { 
      Alert.alert('Error' , error); 
    }); 
  }

  const convert = () => {
    const calculation = (Number(amount) / Number(pickedCurrency)).toFixed(2)
    setResult(calculation + ' €')
  }

  
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'space-between'}}>
      <Text>Euro converter</Text>

      <View style={{paddingTop: 20}}/>
      
      <Text style={{fontSize: 25}}>{result}</Text>

      <View 
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 50, 
          paddingTop: 40}}>

        <TextInput 
          style={{
            width: 100, 
            borderColor: 'gray',
             borderWidth: 1}}
        keyboardType='numeric'
        onChangeText={(amount) => setAmount(amount)}/>

        <Picker
         selectedValue={pickedCurrency}
         style={{ height: 50, width: 150 }}
         onValueChange={(itemValue, itemIndex) => {
           setPickedCurrency(itemValue);
           setIndex(itemIndex);
            }
        }>
          {Object.keys(rates).map((a) => {
            return <Picker.Item label={a} value={rates[a]} key={index} />
          })}
        </Picker>

      </View>

      <View 
        style={{ 
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingHorizontal: 50, 
          paddingBottom: 1}}>

        <Button title='Convert' onPress={convert}></Button>
      </View>
     
      

    </View>
  );
}