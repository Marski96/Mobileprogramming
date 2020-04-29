import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { Button, ThemeProvider, Header, Input, ListItem } from 'react-native-elements';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('coursedb.db');

export default function App() {
  const [amount, setAmount] = useState('');
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shoppinglist (id integer primary key not null, amount text, product text);');
    });
    updateList();    
  }, []);

  // Save course
  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into shoppinglist (amount, product) values (?, ?);', [amount, product]);    
      }, null, updateList
    )
  }

  // Update courselist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from shoppinglist;', [], (_, { rows }) =>
        setProducts(rows._array)
      ); 
    });
  }

  // Delete course
  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from shoppinglist where id = ?;`, [id]);
      }, null, updateList
    )    
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "100%",
          backgroundColor: "#fff",
          marginLeft: "5%"
        }}
      />
    );
  };

  return (
      <ThemeProvider>
        <Header 
          centerComponent={{ text: 'SHOPPING LIST', style: { color: '#fff', fontSize: 22, marginBottom: "10%"} }}
        />

        <Input 
          label='Product'
          placeholder='Product' 
          style={{marginTop: 30, fontSize: 12, width: 200}}
          onChangeText={(product) => setProduct(product)}
          value={product}/>  
        <Input
          label='Amount' 
          placeholder='Amount' style={{ marginTop: 5, marginBottom: 5,  fontSize:12, width: 200}}
          onChangeText={(amount) => setAmount(amount)}
          value={amount}/>      
        <Button
          buttonStyle={{marginHorizontal : "8%", width: 350, backgroundColor: "#808080"}}
          titleStyle={{color: 'white', fontSize: 20}}
          type="outline"
          onPress={saveItem} 
          title="Save" />
          
      <View>
        {
          products.map((item, i) => (
            <ListItem
              key={i}
              title={item.product}
              subtitle={item.amount}
              bottomDivider
              rightSubtitle={<Text style={{color:"#808080"}}>bought</Text>}
              chevron
              onPress={() => deleteItem(item.id)}
            />
          ))
        }
      </View>

      </ThemeProvider>  
  );
}
