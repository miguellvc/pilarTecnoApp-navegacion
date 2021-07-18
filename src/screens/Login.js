import React from 'react'
import { View, Text, Button } from 'react-native'

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '1027510867749-3udinmmhq2ivn8k47loj748qburgasav.apps.googleusercontent.com',
  });

export default class Login extends React.Component {

      onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }


    render() {
        return (
            <View>
                <Text>
                    <Button
                        title="Google Sign-In"
                        onPress={()=>this.onGoogleButtonPress().then(async(data)=>{
                            console.log('Signed in with Google!')
                            if(data){
                            console.log('res login: '+JSON.stringify(data.user))
                            try {
                            // await AsyncStorage.setItem('isloged', JSON.stringify(data.user))
                            console.log(data);
                            } catch (e) {
                            console.log('ubo un error :'+e)
                            }
                            // this.props.setUser(data.user)
                            }
                            })}
                    />
                </Text>
            </View>
        )
    }

}