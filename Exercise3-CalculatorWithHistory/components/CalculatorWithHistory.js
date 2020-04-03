import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { render } from 'react-dom';

export default class CalculatorWithHistory extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            value1: '',
            value2: '',
            result_value: 'Result: ',
            history: [],
        }
    }

    buttonPressed_plus = () => {
        const calculate_plus = parseInt(this.state.value1) + parseInt(this.state.value2)
        this.setState({result_value: 'Result: ' + calculate_plus})

        const formHistorydata = this.state.value1 + ' + ' +  this.state.value2 + ' = ' + calculate_plus
        this.setState({
            history: [...this.state.history, formHistorydata]
        })
        
    }

    buttonPressed_minus = () => {
        const calculate_minus = parseInt(this.state.value1) - parseInt(this.state.value2)
        this.setState({result_value: 'Result: ' + calculate_minus})

        const formHistorydata = this.state.value1 + ' - ' +  this.state.value2 + ' = ' + calculate_minus

        this.setState({
            history: [...this.state.history, formHistorydata]
        })

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

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 130, paddingHorizontal: 50 }}>
                    <Button
                        style={{flexDirection: 'row', alignItems: 'center' }}
                        onPress={this.buttonPressed_plus} title='+'/>
                    
                    <Button
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={this.buttonPressed_minus} title='-'/> 
                        
                </View>
                
                <Text>History</Text>
                <FlatList
                    data={this.state.history}
                    renderItem={({item}) =>
                    <Text>{item}</Text>}
                />

            </View> 
        );   
    }
}
