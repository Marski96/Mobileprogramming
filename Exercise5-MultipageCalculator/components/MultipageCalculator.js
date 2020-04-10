import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import History from './screens/History'

// Add also imports
// This is the calculator page
// navigation prop is passed in to every screen component (definition) in stack navigator
export default function MultipageCalculatorScreen({ navigation }) {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [result, setResult] = useState('')
    const [history, setHistory] = useState('')

    const plusPressed = () => {
        
        let calculateResult = parseInt(value1) + parseInt(value2)
        setResult(calculateResult)

        let expression = value1 + ' + ' + value2 + ' = ' + calculateResult
        setHistory(expression)

        console.log(expression)
        navigation.navigate('HistoryScreen', {history: history})
    }

    const minusPressed = () => {
        let calculateResult = parseInt(value1) - parseInt(value2)
        setResult(calculateResult)

        let expression = value1 + ' - ' + value2 + ' = ' + calculateResult
        setHistory(expression)

        navigation.navigate('HistoryScreen', {history: history})
        console.log(expression)

    }

    const pressHandler = () => {
        navigation.navigate('HistoryScreen', {history: ''})
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
                    onPress={pressHandler}/>
                    
            </View>
        </View>
    );
}
