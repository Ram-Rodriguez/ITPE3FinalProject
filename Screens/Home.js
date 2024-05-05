import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/Styles';
import Loader from '../Screens/LoadingScreen';

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

  return (
    <View style={styles.container}>
      {isLoading ? <Loader/> : (
        <>
            <Button title="Review" style={styles.button}/>
            <Button title="Practice Test" style={styles.button}/>
            <Button title="Timed Test" style={styles.button}/>
            <Button title="Logout" onPress={handleLogout} />
        </>
      )}
    </View>
  );
};

export default Home;