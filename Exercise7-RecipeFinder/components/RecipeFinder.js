import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

export default function RecipeFinder() {
    const [inputValue, setInputValue] = useState('');
    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {
        const url = 'http://www.recipepuppy.com/api/?i=' + inputValue;
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            setRecipes(responseJson);
            console.log(recipes)
        })
        .catch((error) => {
            Alert.alert('Error', error);
        });
    }

    const listSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: "#CED0CE",
              marginLeft: "10%"
            }}
          />
        );
      };

            <FlatList 
                    style={{marginLeft : "5%"}}
                    keyExtractor={item => item.id} 
                    renderItem={({item}) => <Text>{item.title}, {item.company}</Text>} 
                    ItemSeparatorComponent={listSeparator}
                    data={recipes} 
            />  

  return (
    <View>

        
            <TextInput
                    style={{width:100, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(inputValue) => setInputValue(inputValue)}
                />

            <View style={{paddingBottom: 5}}/>

             <Button
                title='Find'
                onPress={getRecipes}
            />

            <View style={{paddingBottom: 50}}/>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
