import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Dimensions, TextInput, View, Button, Keyboard, Alert, Text } from 'react-native';

export default function FindAddress() {
    //Region consts
    const [RegionLatitude, setRegionLatitude] = useState(60.200692)
    const [RegionLongitude, setRegionLongitude] = useState(24.934302)
    const [RegionLatDelta, setRegionLatDelta] = useState(0.0322)
    const [RegionLongDelta, setRegionLongDelta] = useState(0.0721)

    //Marker consts
    const [MarkerLatitude, setMarkerLatitude] = useState(60.201373)
    const [MarkerLongitude, setMarkerLongitude] = useState(24.934041)
    const [MarkerTitle, setMarkerTitle] = useState('Haaga-Helia')

    //Input value
    const [inputValue, setInputValue] = useState('')

    //APIKEY
    const [APIKEY, setAPIKEY] = useState('l5pgbJy1PhRyppctEc8iBPhbJz6LcbL8')

    const showOnMap = () => {
        Keyboard.dismiss()
        setMarkerTitle(inputValue)
        const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=' + APIKEY + '&location=' + inputValue + ',FI'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                setMarkerLatitude(responseJson.results[0].locations[0].displayLatLng.lat)
                setMarkerLongitude(responseJson.results[0].locations[0].displayLatLng.lng)
                
                setRegionLatitude(responseJson.results[0].locations[0].displayLatLng.lat)
                setRegionLongitude(responseJson.results[0].locations[0].displayLatLng.lng)

            })
            .catch((error) => {
                Alert.alert('Error', error);
        });

    }

  
  return (
    <View>
        <MapView
            style={{ 
                flex:1,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
                
            }}
            region={{
                latitude: RegionLatitude,
                longitude: RegionLongitude,
                latitudeDelta: RegionLatDelta,
                longitudeDelta: RegionLongDelta,
            }}>
                <Marker
                    coordinate={{
                        latitude: MarkerLatitude,
                        longitude: MarkerLongitude}}
                        title={MarkerTitle}
                />
        </MapView>

        <View>
            <Text>Huom! Käytä suomalaisia osoitteita</Text>
            <TextInput 
            style={{
            width: Dimensions.get('window').width,
            borderColor: 'gray',
            borderWidth: 0.5,
            }}
            placeholder='Enter address here'
            onChangeText={(inputValue => setInputValue(inputValue))}
           />
           <View style={{paddingTop: 10}}/>

            <Button title='Show' onPress={showOnMap}/>

            <View style={{paddingTop: 10}}/>
        </View>

    </View>
  );
}