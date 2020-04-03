import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { render } from 'react-dom';

export default class ShoppingList extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            value1: '',
            ShoppingList: [],
        }
    }

    buttonAdd = () => {

        const formShoppingListdata = this.state.value1
        this.setState({
            ShoppingList: [...this.state.ShoppingList, formShoppingListdata]
        })
        
    }

    buttonClear = () => {
        this.setState({
            ShoppingList: [],
        })

    }

    render() {
        return(   

            <View style={{flex: 1, paddingTop: 80}}>
                <TextInput 
                    style={{width: 200, borderColor: 'gray', borderWidth: 1}}
                    value={this.state.value1}
                    onChangeText={value1 => this.setState({ value1 })}
                />

                <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: 40, paddingHorizontal: 50 }}>
                    <Button
                        style={{flexDirection: 'row', alignItems: 'center' }}
                        onPress={this.buttonAdd} title='Add'/>
                    
                    <Button
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={this.buttonClear} title='Clear'/> 
                        
                </View>
                
                <Text style={{color: 'blue', fontSize: 18, textAlign: 'center', paddingBottom: 80}}>
                    Shopping List
                </Text>
                <FlatList
                    style={{fontSize: 16, alignSelf: 'center'}}
                    data={this.state.ShoppingList}
                    renderItem={({item}) =>
                    <Text>{item}</Text>}
                />

            </View> 
        );   
    }
}
