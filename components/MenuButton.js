import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colours, Buttons } from '../styles/index'

export default class Home extends Component {
    render() {

        return (
            <TouchableOpacity onPress={this.props.navigation}>
                <View style={styles.button}>
                    <Text> {this.props.title} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
      ...Buttons.homeMenu,
      borderColor: Colours.theme.main
    },
  })