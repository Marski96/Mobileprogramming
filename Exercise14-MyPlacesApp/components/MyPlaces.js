import React, { useState, useEffect } from 'react';
import { AsyncStorage, Alert, View } from 'react-native';
import { Button, ThemeProvider, Header, Input, ListItem, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyPlaces({ navigation }) {

  const [address, setAddress] = useState('')
  const [addressList, setAddressList] = useState([])
  const [showData, setShowData] = useState([])

  useEffect(() => {
    readData();
  }, []);
  
  const saveAddress = async () => {
    addressList.push({address})
    try {
      AsyncStorage.setItem('MyPlaces', JSON.stringify(addressList)).then(() => {
        console.log('Saving data was succesful')
      readData()
      });
    }
    catch(error) {
      Alert.alert('There was an error while saving data')
      console.log('There was an error while saving data')
    }
  }

  const readData = async () => {
    try {
      let addresses = await AsyncStorage.getItem('MyPlaces') || '[]';
      setShowData(JSON.parse(addresses))
      console.log(addresses)
    } 
    catch(error) {

    }
  }

  const deleteAddress = async (item) => {
    console.log(item.address)
    try {
      //await AsyncStorage.removeItem(item.address) 
        console.log('Item deleted')
        readData()
    }
    catch(error) {

    }
  }


    return (
      <ThemeProvider>
        <Input 
          label='Placefinder'
          placeholder='Type in address' 
          style={{marginTop: 30, fontSize: 12, width: 200}}
          onChangeText={(address) => setAddress(address)}
          value={address}
          />   
        <Button
          buttonStyle={{marginHorizontal : "8%", width: 350, backgroundColor: "#808080"}}
          titleStyle={{color: 'white', fontSize: 20}}
          type="outline"
          icon={
            <Icon
              style={{marginRight: 15}}
              name="save"
              size={15}
              color="white"
            />
          }
          iconLeft
          onPress={saveAddress} 
          title="Save" />

      <View>
        {
          showData.map((item, i) => (
            <ListItem
              key={i}
              title={item.address}
              bottomDivider
              rightSubtitle={<Text style={{color:"#808080"}}>show on map</Text>}
              chevron
              onPress={() => navigation.navigate('Map', {item : item})}
              onLongPress={() => deleteAddress(item)}
            />
          ))
        }
      </View>

      </ThemeProvider>  
    );
  }