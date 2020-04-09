import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';
import { render } from 'react-dom';

import History from './screens/History'

// Add also imports
// This is the first page
// navigation prop is passed in to every screen component (definition) in stack navigator
export default function MultipageCalculatorScreen({ navigation }) {

    const [value1, setValue1] = React.useState('')
    const [value2, setValue2] = React.useState('')
    const [result, setResult] = React.useState('')

    const plusPressed = () => {
        setResult(parseInt(value1) + parseInt(value2))
        navigation.navigate('HistoryScreen', {results: result})
    }

    const minusPressed = () => {
        setResult(parseInt(value1) - parseInt(value2))
    }

    return (
        <View
        style={{
            paddingTop: 200,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text 
                style={{textAlign:'center', fontSize: 18}}>
                Result: {result}
            </Text>

            <TextInput
                style={{width:200, borderColor: 'gray', borderWidth: 1}}
                keyboardType='numeric'
                onChangeText={value1 => setValue1(value1)}
                defaultValue={value1}
            />
            <View style={{padding: 1}} />
            <TextInput
                style={{width:200, borderColor: 'gray', borderWidth: 1}}
                keyboardType='numeric'
                onChangeText={value2 => setValue2(value2)}
                defaultValue={value2}
            />

            <View style={{paddingTop: 10,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button 
                    title='+' 
                    onPress={plusPressed}/>
                
                <Button 
                    title='-' 
                    onPress={minusPressed}/>

                <Button 
                    title='History' 
                    onPress={() => navigation.navigate('HistoryScreen')}/>
            </View>
                
        </View>
    );
}
