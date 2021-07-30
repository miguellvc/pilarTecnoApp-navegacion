import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'


import {connect} from 'react-redux';
import {actions} from '../store';

import auth from '@react-native-firebase/auth';

import { GoogleSignin,  GoogleSigninButton } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
    webClientId: "166766918892-d6shqnlku0rhdba22bngv6jo040t4rcv.apps.googleusercontent.com",
  });

 class Login extends React.Component {

    componentDidMount(){
        
    }  
    
    onGoogleButtonPress = async () => {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
  
      return auth().signInWithCredential(googleCredential);
    };


    render() {
        return (
            <View>
                <Text>
              <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() =>
                  this.onGoogleButtonPress()
                    .then(async data => {
                      console.log('Signed in with Google!');
                      if (data) {
                        console.log('res login: ' + JSON.stringify(data.user));
                        try {
                          await AsyncStorage.setItem(
                            'isloged',
                            JSON.stringify(data.user),
                          );
                        } catch (e) {
                          console.log('There was a error:' + e);
                        }
                        this.props.setUser(data.user);
                      }
                    })
                    .catch(err =>
                      console.log('Error en el login de google==>', err),
                    )
                }
              />
            </Text>
            </View>
        )
    }

}


const mapDispatchToProps = dispatch => ({
    setUser: data => dispatch(actions.user.setUser(data)),
  });
  const mapStateToProps = state => ({
    user: state.user.user,
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
  