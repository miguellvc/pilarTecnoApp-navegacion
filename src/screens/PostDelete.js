import React from 'react'
import {
    View,
    Text
} from 'react-native'

import { Card, Button } from 'react-native-elements'

import { connect } from 'react-redux'
import { actions } from '../store'

class PostDelete extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            post: []
        }
    }

    componentDidMount() {

        const { item } = this.props.route.params

        this.setState({ post: [item] })

        console.log(actions);
    }

    delete = () => {

        const { body, id, title, userId } = this.state.post[0]; 

        this.props.deletePost({ id, body, title, userId }).then(() => {
            this.props.navigation.navigate('Posts');
            console.log('post eliminado');
        })
    }

    render() {
        return (
            this.state.post ?
                <View>
                    <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 20 }}>¿Desea eliminar el Post?</Text>
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
                                    </View>
                                </Card>
                            </View>
                        )
                    })}

                    <Button onPress={() => this.delete() } title='Sí, eliminar' style={{ fontSize: 20 }}>
                    </Button>
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

const mapDispatchToProps = dispatch => ({
    deletePost: (data) =>
        dispatch(actions.posts.delPost(data)),
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)((PostDelete))