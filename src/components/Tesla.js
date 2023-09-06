import React from 'react';
import { View, Text, FlatList } from 'react-native';

const data = [
    'Elon Musk',
    'Tesla Motor',
    'SpaceX',
    'Elon Musk',
    'Tesla Motor',
    'SpaceX',
    'SpaceX',
    'Tesla Motor',
    'Tesla Motor',
    'Tesla Motor',
];

const Tesla = () => {
    return (
        <View>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%', marginTop: 5 }}></View>

            <View style={{ flexDirection: 'row', marginTop: 12 }}>
                <FlatList
                    data={data}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={{ marginRight: 10, marginBottom: 5 }}>
                            <Text>{item}</Text>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}></View>
                        </View>
                    )}
                />
            </View>

            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '100%', marginTop: 10 }}></View>
        </View>
    );
};

export default Tesla;
