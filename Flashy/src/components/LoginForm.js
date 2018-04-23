//Background Photo by Jeff Sheldon on Unsplash
import { Image, View, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {

  render() {
    return (
      <ImageBackground
      style={styles.ImageBackgroundStyles}
      source={background}
      >
        <View style={styles.logoStyles}>
          <Image
          source={logo}
          style={{ borderRadius: 100 }}
          />
        </ View>

        <View style={{ marginTop: 30 }}>
          <Input
            placeholderTextColor='black'
            inputStyle={styles.inputStyles}
            placeholder='Email'
            leftIcon={
              <Icon
                name='email'
                size={24}
                color='black'
              />
            }
          />

          <Input
            secureTextEntry
            placeholderTextColor='black'
            inputStyle={styles.inputStyles}
            placeholder='Password'
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='black'
              />
            }
          />

          <View
          style={{
            marginTop: 50,
            padding: 50,
          }}
          >
            <Button
            titleStyle={{ color: 'black',
            fontWeight: 'bold',
            fontSize: 25 }}
            buttonStyle={styles.buttonStyles}
            title='Login'
            clear
            />

            <Button
            buttonStyle={styles.buttonStyles}
            titleStyle={styles.titleStyles}
            title='Create Account'
            clear
            onPress={Actions.createAccount}
            />
          </ View>
        </View>

      </ ImageBackground>
    );
  }
}

const styles = {
  ImageBackgroundStyles: {
    width: '100%',
    height: '100%'
  },
  logoStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 75,
  },
  inputStyles: {
    color: 'black',
    fontWeight: 'bold'
  },
  buttonStyles: {
      borderColor: '#4286f4',
      borderWidth: 4,
      borderRadius: 10,
      marginBottom: 50
    },
    titleStyles: {
      fontWeight: 'bold',
      fontSize: 25
    }
};

const background = require('../../assets/images/background.jpeg');
const logo = require('../../assets/images/logo.png');

export default LoginForm;
