import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { render } from 'react-dom';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {
            value1: '',
            value2: '',
            result_value: 'Result: '

        }
    }

    buttonPressed_plus = () => {
        const calculate_plus = parseInt(this.state.value1) + parseInt(this.state.value2)
        this.setState({result_value: 'Result: ' + calculate_plus})

        //clear inputbox after press
        this.setState({value1: '', value2: ''})
        
    }

    buttonPressed_minus = () => {
        const calculate_minus = parseInt(this.state.value1) - parseInt(this.state.value2)
        this.setState({result_value: 'Result: ' + calculate_minus})

        //clear inputbox after press
        this.setState({value1: '', value2: ''})
        
    }

    render() {
        return(   

            <View style={{flex: 1, paddingTop: 280}}>
                <Text 
                    style={{textAlign:'center', fontSize: 18}}>
                    {this.state.result_value}
                </Text>

                <TextInput 
                    style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                    keyboardType='numeric'
                    value={this.state.value1}
                    onChangeText={value1 => this.setState({ value1 })}
                />

                <TextInput 
                    style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                    keyboardType='numeric'
                    value={this.state.value2}
                    onChangeText={value2 => this.setState({ value2 })}
                />

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 280, paddingHorizontal: 50 }}>
                    <Button
                        style={{flexDirection: 'row', alignItems: 'center' }}
                        onPress={this.buttonPressed_plus} title='+'/>
                    
                    <Button
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={this.buttonPressed_minus} title='-'/>
                        
                </View>
            </View> 
        );   
    }
}
