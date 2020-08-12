import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colours, Buttons } from '../styles/index'

export default class Home extends Component {
    render() {

        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.button}>
                    <Text> Adventure! </Text>
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