import React from 'react'
import { View, Text, Button } from 'react-native'

import auth from '@react-native-firebase/auth';

import { GoogleSignin,  GoogleSigninButton } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
    webClientId: '1027510867749-3udinmmhq2ivn8k47loj748qburgasav.apps.googleusercontent.com',
    offlineAccess: true
  });


export default class Login extends React.Component {

    componentDidMount(){
        
    }  
    
    _signIn  = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };


    render() {
        return (
            <View>
                <Text>
                    {/* <Button
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
                    /> */}

                    {/* <Button onPress={() => this.onGoogleButtonPress()} title="Google"> </Button> */}

                    <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                     />
                </Text>
            </View>
        )
    }

}