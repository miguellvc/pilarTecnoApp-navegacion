import React, { Component } from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Text,
    ActivityIndicator,
    FlatList,
    View,
    Image 
} from 'react-native';
import { Button } from 'react-native-elements'
import { actions } from '../store'
import { connect } from 'react-redux'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const image =  'https://www.norte.com/img/2018/11/parque-nacional-talampaya.jpg'

class Posts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: null,
        }
    }

    componentDidMount = () => {
        this.props.getPosts()
        console.log("desde post",  this.props.posts)
    }

    keyExtractor = (item, index) => index.toString()
    
    renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={() =>
            this.props.navigation.navigate('PostDetail', { item })} >
            <View style={styles.contentList}>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}>
                        {item.name}
                    </Text>
                </View>
                <View>
                        <Image
                        source={{ uri: item.photo[0].url }}
                        style={{ width: 360, height: 400,  borderRadius: 10 }}
                        />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
    render() {
        return (
            <SafeAreaView style={{
                flex: 1, justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'white'
            }}>
                {
                    !this.props.posts ?
                        <ActivityIndicator />
                        :
                        
                            <View style={{ flex: 1 }}>
                                <Button title='Crear Nuevo Post'
                                    onPress={() => this.props.navigation.navigate('PostCreate')} />
                                <FlatList
                                    keyExtractor={this.keyExtractor}
                                    data={this.props.posts.touristSite}
                                    renderItem={this.renderItem}
                                />
                            </View>
                }    
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center'
    },
    titlecontainer: {
        padding: 10
    },
    bodycontainer: {
        padding: 10
    },
    content: {
        margin: width / 20,
        height: width / 2.5,
        width: width / 2.5,
        borderRadius: 15,
        justifyContent: 'center',
    },
    contentList : {
        margin: 20, 
        padding: 5, 
        shadowColor: "#000",
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 21,
    }
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(actions.posts.getPosts()),
})

const mapStateToProps = state => ({
    posts: state.posts.posts
})
export default connect(mapStateToProps, mapDispatchToProps)((Posts))
