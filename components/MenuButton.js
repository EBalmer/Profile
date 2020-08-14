import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colours, Buttons, Containers } from '../styles/index'

export default class Home extends Component {
    render() {

        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.props.navigation}>
                    <View style={styles.button}>
                        <Text> {this.props.title} </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        ...Buttons.homeMenu,
        borderColor: Colours.theme.main
    },
    buttonContainer: {
        ...Containers.buttonContainer
    }
})