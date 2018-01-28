import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import firebase from '../secrets';

const provider = new firebase.auth.GoogleAuthProvider();

class Login extends Component {

  constructor() {
    super();
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    // firebase.auth().signInWithRedirect(provider)
    // .then(result => {
    //   const token = result.credential.accessToken;
    //   const user = result.user
    // })
    // .catch(err => console.log(err));

    this.props.navigation.navigate('List');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} style={{fontSize: 50}} >
          Welcome to Anuj's CryptoApp!
        </Text>
        {/* <Form style={styles.formContainer} type={User} /> */}
        <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.onPress}>
          <Text style={styles.buttonText}>Login With Google</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 25,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Login;