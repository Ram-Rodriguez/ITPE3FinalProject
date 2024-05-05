import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import styles from '../Styles/Styles';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 5000);

        return () => clearTimeout(timer);
    }, {navigation});

    return (
            <View style={styles.splashcontainer} >
                <View style={styles.innerSplashCont}>
                    <Image source={require('../assets/QbeeLogoWText.png')} 
                            style={styles.splash}
                            resizeMode='cover'
                    />
                </View>                
            </View>
    );
};

export default SplashScreen;