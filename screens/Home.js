import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { MenuButton } from '../components/index';

export default class Home extends Component {
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <MenuButton onPress = {this.props.onPress}/>
            </View>
        );
    }
}