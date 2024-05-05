import React from "react";
import { StyleSheet  } from "react-native";

const Styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: "#0a369d"
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: '#ffffff',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      backgroundColor: "#CFDEE7"
    },
    welcomeText: {
      fontSize: 20,
      marginBottom: 20,
    },
    splash: {
      width: '100%',
      height: '50%',
    },
    splashcontainer: {
      backgroundColor: "#0a369d",
      alignContent: "center",
      flex: 1,
    },
    horizontal: {

    },
    loadingcontainer: {
      flex: 1,
    },
    btnLogin: {
      backgroundColor: "92B4F4",
    },
    innerSplashCont: {
      marginTop: '70%',
      width: '100%',
      height: '50%'
    },
    loginImageCont: {
      width: '60%',
      height: '15%',
      alignContent: "center",
    },
    loginImage: {
      width: '100%',
      height: '100%'
    },
  });

  export default Styles;
  