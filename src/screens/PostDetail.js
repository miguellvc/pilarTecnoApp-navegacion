import React from 'react';

import { fetchComments } from '../api';

import {
    Text,
    View,
} from 'react-native';

import { Card, Button,  } from 'react-native-elements'


export default class PostDetail extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            post: [],
            postsComment: null
        }
    }
    componentDidMount() {

        const { item } = this.props.route.params

        this.setState({ post: [item] })

        fetchComments(item)
            .then(resp => {
                this.setState({ postsComment: resp[1] })
            })
    }

    render() {
        return (

            this.state.post ?
                <View>
                   
                    {this.state.post.map(item => {
                        return (
                            
                            <View key={item.id}>
                                <Card>
                                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                    <Text>{item.body}</Text>
                                    <View style={{
                                        paddingTop: 5,
                                        paddingLeft: 15,
                                        flexDirection: "row", justifyContent: 'flex-end'
                                    }}>
                                        <Button onPress={() =>
                                            this.props.navigation.navigate('PostEdit', { item })} title='Editar' style={{ fontSize: 20 }}></Button>
                                        <Button onPress={() =>
                                            this.props.navigation.navigate('PostDelete', { item })} title='Eliminar'>Editar</Button>
                                    </View>
                                </Card>
                                <Text style={{ padding: 20, fontSize: 20 }}>Comentarios</Text>
                                {this.state.postsComment ?
                                    this.state.postsComment.map((comments, i) => {
                                        return <Card key={i}>

                                            <Text style={{ fontWeight: 'bold' }}>
                                                {comments.name}
                                            </Text>
                                            <Text>
                                                {comments.body}
                                            </Text>
                                        </Card>
                                    })
                                    :
                                    <Text>cargando comentarios</Text>
                                }
                            </View>
                        )
                    })}
                </View>


                :
                <View>
                    <Text>
                        cargando data
                    </Text>
                </View>
        )


    }

}
