import React, { Component } from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    ImageBackground
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
            title: '',
            body: '',
            id: ''
        }

    }

    componentDidMount(){
       const { item } = this.props.route.params;
       this.setState({title: item.title}); 
       this.setState({body: item.body});
       this.setState({id: item.id});

       console.log(actions);
     
    }

    _send = () => {
        const { id, title, body } = this.state
        ///VALIDACIONES
        this.props.editPost({ id, title, body }).then(() => {
            this.props.navigation.navigate('Posts');
            console.log('se editó correctamente el post')
        })
    }

    render() {

        console.log(this.state.id, 'valor del item en el componente PostEdit'); 
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Input
                        placeholder='Titulo'
                        inputContainerStyle={{
                            width: width * 0.8, alignItems: 'flex-start',
                            alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)', pading: 15
                        }}
                        inputStyle={{ color: 'white', marginLeft: 15 }}
                        placeholderTextColor='#ccc'
                        value={this.state.title}
                        onChangeText={(value) => this.setState({ title: value })}
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
                        onChangeText={(value) => this.setState({ body: value })}
                        multiline
                        numberOfLines={2}
                    />
                    <Button title='Editar Post' onPress={() => this._send()}
                        style={{ width: width * 0.8 }} />
            
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