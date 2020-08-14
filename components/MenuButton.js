import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colours, Buttons, Containers, Typography} from '../styles/index'

export default class Home extends Component {
    render() {

        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.props.navigation}>
                    <View style={styles.button}>
                        <Text style={styles.label}> {this.props.title} </Text>
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
    },
    label: {
        ...Typography.base,
        ...Typography.subHeader,
        color: Colours.theme.main
    }
})