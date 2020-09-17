import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 30
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.cover}> 
                    <Text style={styles.medium}>Zip Code: {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>    
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
        
    },
    cover: {
        backgroundColor: '#111',
        width: '100%',
        height: 300,
        opacity: 0.5,
    },
    medium: {
        fontSize: 20, 
        color: '#FFF',
    }
});
