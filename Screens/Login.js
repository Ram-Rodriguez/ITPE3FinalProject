import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  const GradientButton = ({onPress, title}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={['#92B4F4', '#5E7CE2', '#4472CA']} style={styles.loginGradient}>
          <Text style={styles.btnText}>
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginImageCont}>
          <Image source={require('../assets/QbeeLogoWText.png')} 
                style={styles.loginImage}
          />
      </View> 
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <GradientButton title={"Login"} onPress={handleLogin}/>
      {/*<Button title="Login" onPress={handleLogin} style={styles.btnLogin} color={"#92B4F4"}/>*/}
    </View>
  );
};


export default Login;