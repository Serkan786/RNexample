import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View,Image } from 'react-native';

const openWeatherkey = "78b8597aea8b4d6e6928e6eebc969f3c";

const Havadurumu = () => {
    const [weather, setWeather] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const lat = 33.44;
    const lon = -94.04;

    async function fetchWeatherData() {
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${openWeatherkey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
            setLoaded(true);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);

    if (!loaded) {
        return <Text>Loading...</Text>;
    }

    const renderHourlyItem = ({ item }) => (
        <TouchableOpacity>
            <View style={{backgroundColor:"#DEDEDE",marginRight:10}}>
                <Text> {weather.timezone}</Text>
                <Image
                    source={{ uri: `https://openweathermap.org/img/w/${item.weather[0].icon}.png` }}
                    style={{ width: 80, height:80 }}
                />
                <Text> {item.weather[0].description}</Text>
                <Text> {new Date(item.dt * 1000).toLocaleTimeString()}</Text>
                <Text style={{fontSize:24}}>{convertKelvinToCelsius(item.temp)} °C</Text>

            </View>
        </TouchableOpacity>
    );
    const convertKelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2);
    };

    return (
        <View>
            <FlatList

                style={{ marginTop: 70 }}
                data={weather.hourly}
                renderItem={renderHourlyItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
            />
        </View>
    );
};

export default Havadurumu;
