import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const Doviz = () => {
    const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
        const apiUrl = 'http://api.exchangeratesapi.io/v1/latest?access_key=b86828d80448d6c076b710d7539aa853';
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setExchangeRates(data.rates);
            })
            .catch(error => {
                console.error('hata oluştu:', error);
            });
    }, []);

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Döviz Kurları</Text>
            <FlatList
                data={Object.entries(exchangeRates).splice(0, 5)}
                keyExtractor={(item) => item[0]}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                        <Text style={{ fontSize: 16 }}>{item[0]}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item[1]}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Doviz;
