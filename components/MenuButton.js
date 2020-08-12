import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default class Home extends Component {
    render() {

        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{height:100, width:100, borderRadius: 20, borderWidth: 5, borderColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
                    <Text> Adventure! </Text>
                </View>
            </TouchableOpacity>
        );
    }
}