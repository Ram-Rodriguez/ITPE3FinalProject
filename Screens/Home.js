import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/Styles';
import Loader from '../Screens/LoadingScreen';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  //loading screen will pop up first
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(()=> {
      setIsLoading(false);

    }, 2000);
  }

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const GradientButton = ({onPress, title}) => {
    return (
      <TouchableOpacity>
        <LinearGradient colors={['#92B4F4', '#5E7CE2', '#4472CA']} style={styles.linearGradient}>
          <Text style={styles.btnText}>
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  
  const GradientLogout = ({onPress, title}) => {
    return (
      <TouchableOpacity onPress={handleLogout}>
        <LinearGradient colors={['#f74747', '#e63434', '#ce0000']} style={styles.linearGradient}>
          <Text style={styles.btnText}>
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.home}>
      {isLoading ? <Loader/> : (
        <>
          <View style={styles.body}>
            <GradientButton title={"Review"}/>
            <GradientButton title={"Practice Test"}/>
            <GradientButton title={"Timed Test"}/>
            <GradientButton title={"Logout"}/>
            <GradientButton title={"Review"}/>
          </View>
          <View style={styles.footer}>
            <GradientLogout title={"Logout"}/>
          </View>
        </>
      )}
    </View>
  );
};

export default Home;