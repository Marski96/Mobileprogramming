// This is the history page
import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function HistoryScreen({ navigation, route }) {
    const {history} = route.params;

    return (
        <View
        style={{
            paddingTop: 280,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>History</Text>
            <Text>{history}</Text>
        </View>

    );

};