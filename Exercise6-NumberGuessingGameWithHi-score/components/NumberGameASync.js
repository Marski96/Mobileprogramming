// This is the history page
import React, { useState } from 'react';
import { View, Text, AsyncStorage, Button, TextInput, Alert } from 'react-native';

export default function NumberGame({ navigation }) {

    const [inputValue, setInputValue] = useState('')
    const [tries, setTries] = useState(1)
    const [showHighscore, setShowHighscore] = useState('')
    const [text, setText] = useState('Guess a number between 1-100')
    const [correctNumber, setCorrectNumber] = useState(Math.floor(Math.random() * 100) + 1)

    const guessMade = () => {
        console.log(correctNumber)

        if (inputValue == correctNumber) {
            console.log('Voitit pelin')
            Alert.alert('You guessed the number in ' + tries + ' guesses' )
            addHighscore()
            displayHighscore()
            restartTheGame()
        }
        if (inputValue < correctNumber) {
            setText('Your guess ' + inputValue + ' is too low')
            setTries(tries + 1)
        }
        if (inputValue > correctNumber) {
            setText('Your guess ' + inputValue + ' is too high')
            setTries(tries + 1)
        }
    }

    const addHighscore = async () => {
        let score = tries
        let highscore = score + ' guesses'
        let existingHighscore = await AsyncStorage.getItem('highscore')

        if(existingHighscore >= score) {
            AsyncStorage.setItem('highscore', (highscore))
        }
        
    }

    const displayHighscore = async () => {
        try {
            let highscore = await AsyncStorage.getItem('highscore')
            setShowHighscore(highscore)
        }
        catch(error) {
            alert(error)
        }
    }

    const restartTheGame = () => {
        setInputValue('')
        setTries(1)
        setText('Guess a number between 1-100')
        setCorrectNumber(Math.floor(Math.random() * 100) + 1)
    }

    displayHighscore()

    return (
        <View
            style={{
                paddingTop: 200,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text 
                style={{
                    fontSize: 16
                }}
            >
                {text}
            </Text>
            
            <View style={{paddingBottom: 15}}/>

            <TextInput
                style={{width:100, borderColor: 'gray', borderWidth: 1}}
                keyboardType='numeric'
                onChangeText={inputValue => setInputValue(inputValue)}
                defaultValue={inputValue}
            />

            <View style={{paddingBottom: 15}}/>

            <Button
                title='Make a Guess'
                onPress={guessMade}
            />

            <View style={{paddingBottom: 15}}/>

            <Text>Highscore: {showHighscore}</Text>

        </View>

    );

};