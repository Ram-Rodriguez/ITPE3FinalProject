import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../Styles/Styles';
import { DotIndicator, PulseIndicator } from 'react-native-indicators';
import { WaveIndicator } from 'react-native-indicators';
import { UIActivityIndicator } from 'react-native-indicators';
import { SkypeIndicator } from 'react-native-indicators';
import { MaterialIndicator } from 'react-native-indicators';
import { BarIndicator } from 'react-native-indicators';

const Loader = ({navigation}) => {
    return (
        <View style={[styles.container, styles.horizontal]} >
            
            <BarIndicator color="#CFDEE7" count={5} size={50}/>

        </View>


    );

};

export default Loader;