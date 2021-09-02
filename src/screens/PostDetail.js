import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

import { Card, Button,  } from 'react-native-elements'

export default class PostDetail extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            post: [],
        }
    }


    render() {
        const { item } = this.props.route.params
        return (
            <SafeAreaView style={{
                flex: 1, justifyContent: 'center', alignItems: 'center',
                backgroundColor: 'white'
            }}>
                     <View key={item._id}>
                                <Card>
                                    <Text style={styles.title}>
                                        {item.name}
                                    </Text>

                                    <Text>
                                        {item.description}
                                    </Text>
                                    
                                    <Image
                                        source={{ uri: item.photo[0].url }}
                                        style={{ width: 360, height: 400,  borderRadius: 10 }}
                                    />
                                    <View style={{
                                        paddingTop: 5,
                                        paddingLeft: 15,
                                        flexDirection: "row", justifyContent: 'flex-end'
                                    }}>
                                    
                                    <Button onPress={() =>
                                            this.props.navigation.navigate('PostEdit', { item })} title='Editar'>
                                    </Button>
                                    <Button onPress={() =>
                                            this.props.navigation.navigate('PostDelete', { item })} title='Eliminar'>
                                    </Button>
                                    </View>
                                </Card>
                        
                     </View>
            </SafeAreaView>
        )


    }

}

const styles = StyleSheet.create({

    title: {
        fontFamily: 'Roboto',
        fontSize: 25,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center'
    },
})
