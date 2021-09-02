import React, { Component } from 'react';
import {
    ScrollView,
    SafeAreaView,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { actions } from '../store'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class PostCreate extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '', 
            lat: '', 
            long: '',
            photoUrl: '',
            photoTitle: '',
            photoDescription: '',
            description: '',
            tags: ''
        }
    }

    _send = () => {
        ///VALIDACIONES
        const  { name,
                location, 
                lat, 
                long, 
                description,
                tags } = this.state

        const touristSite = {
            name,
            location,
            lat,
            long,
            description, 
            tags,
            photo: [
                {
                    url: this.state.photoUrl,
                    title: this.state.photoTitle,
                    description: this.state.photoDescription
                }
            ]
        }
        // console.log(touristSite);

        this.props.createPost(touristSite).then((res) => {
            this.props.navigation.goBack()
            console.log(res)
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                 <ScrollView >
                {/* <ImageBackground
                    style={[styles.content, { height, width }]}
                    source={require('../assets/images/fondo7.jpg')}
                > */}
                    <Input
                        placeholder='Nombre del sitio'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ name: value })}
                    />
                    <Input
                        placeholder='Localidad'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ location: value })}
                    />
                     <Input
                        placeholder='Latitud'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ lat: value })}
                    />

                    <Input
                        placeholder='Longitud'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ long: value })}
                    />
                 
                    <Input
                        placeholder='Url Foto'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({photoUrl: value })}
                    />

                    
                    <Input
                        placeholder='Titulo'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ photoTitle: value })}
                    />
                    
                    <Input
                        placeholder='Descripcion'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ photoDescription: value })}
                    />

                    <Input
                        placeholder='Tags'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ tags: value })}
                    />  

                    <Input
                        placeholder='Descripcion'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', height: height * 0.4, backgroundColor: 'rgba(0,0,0,0.5)',
                            pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.body}
                        onChangeText={(value) => this.setState({ description: value })}
                        multiline
                        numberOfLines={2}
                    />
                    <Button title='Postear' onPress={() => this._send()}
                        style={{ width: width * 0.8 }} />
                {/* </ImageBackground> */}
                {/* </View> */}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        // color:'#fff',
        textAlign: 'center'
    },
    content: {
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapDispatchToProps = dispatch => ({
    createPost: (data) => dispatch(actions.posts.createPost(data)),
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)((PostCreate))