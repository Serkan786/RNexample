import React from 'react';
import { Image, Text, View, ScrollView, FlatList } from 'react-native';

const Foto = () => {

    const photos = [
        { id: 1, source: require('../../assets/eloon.png') },
        { id: 2, source: require('../../assets/eloon.png') },
        { id: 3, source: require('../../assets/elon.jpg') },
    ];


    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{marginTop:15}}
                    resizeMode="cover"
                    source={item.source}
                />
            </View>

        );
    };

    return (
        <ScrollView style={{ flex: 1 }} horizontal={true}>
            <FlatList
                data={photos}
                renderItem={renderItem}
                horizontal
            />
        </ScrollView>
    );
};

export default Foto;
