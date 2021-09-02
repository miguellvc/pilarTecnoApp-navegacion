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

class PostEdit extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            _id: '',
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

    componentDidMount(){
       const { item } = this.props.route.params;
       this.setState({_id: item._id});
       this.setState({name: item.name}); 
       this.setState({location: item.location});
       this.setState({lat: item.lat});
       this.setState({long: item.long});
       this.setState({photoUrl: item.photo[0].url});
       this.setState({photoTitle: item.photo[0].title});
       this.setState({photoDescription: item.photo[0].description});
       this.setState({description: item.description});
       this.setState({tags: item.tags});

       console.log(item);
     
    }

    _send = () => {
        const touristSite = {
            _id: this.state._id,
            name: this.state.name,
            location: this.state.location,
            lat: this.state.lat,
            long: this.state.log,
            description: this.state.description,
            tags: this.state.tags,
            photo: [
                {
                    url: this.state.photoUrl,
                    title: this.state.photoTitle,
                    description: this.state.photoDescription
                }
            ]
        }
        console.log("valor de touristSite",touristSite);
        this.props.editPost(touristSite).then(() => {
            this.props.navigation.navigate('Posts');
            console.log('se editó correctamente el post')
        })
    }

    render() {
        console.log("nombre del sitio", this.state.name);
        return (
            
            this.state.name ==undefined ? <Text>Cargando data</Text>: 
            
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
                   value={this.state.name}
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
                   value={this.state.location}
                   onChangeText={(value) => this.setState({ location: value })}
               />
              
               <Input
                   placeholder='Url Foto'
                   inputContainerStyle={{
                       width: width * 0.8, alignItems: 'flex-start',
                       alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                   }}
                   inputStyle={{ color: 'white', marginLeft: 15 }}
                   placeholderTextColor='#ccc'
                   value={this.state.photoUrl}
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
                   value={this.state.photoTitle}
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
                   value={this.state.photoDescription}
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
                   value={this.state.tags}
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
                   value={this.state.description}
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
    editPost: (data) =>
        dispatch(actions.posts.updatePost(data)),
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)((PostEdit))