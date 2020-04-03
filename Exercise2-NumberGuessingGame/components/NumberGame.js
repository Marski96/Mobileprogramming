import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { render } from 'react-dom';

export default class NumberGame extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            attempts: 1,
            default_text: 'Guess a number between 1-100',
            numberToGuess: Math.floor(Math.random() * 100) + 1,
            guess: '',
        }
    }

    guessMade = () => {
        if (this.state.guess > this.state.numberToGuess) {
            const totalAttemps = this.state.attempts + 1;
            this.setState({attempts: totalAttemps})
            this.setState({default_text: 'Your guess ' + this.state.guess + ' is too high'})
        }

        if (this.state.guess < this.state.numberToGuess) {
            const totalAttemps = this.state.attempts + 1;
            this.setState({attempts: totalAttemps})
            this.setState({default_text: 'Your guess ' + this.state.guess + ' is too low'})
        }
        
        if (this.state.guess == this.state.numberToGuess) {
            alert('You guessed the number in ' + this.state.attempts + ' guesses')
        }
    }

    render() {
        return(   

            <View style={{paddingHorizontal:0}}>

                <View>
                    <Text 
                        style={{textAlign:'center', fontSize: 18, paddingBottom: 5}}>
                        {this.state.default_text}
                    </Text>
                </View>

                <TextInput 
                    style={{marginHorizontal: 85, alignItems:'center', width: 80, borderColor: 'gray', borderWidth: 1, }}
                    keyboardType='numeric'
                    value={this.state.guess}
                    onChangeText={guess => this.setState({ guess })}
                />

                <View style={{paddingTop: 10, paddingHorizontal:65}}>
                    <Button
                        onPress={this.guessMade} title='Make Guess'/>
                </View>
                    
            </View> 
        );   
    }
}
