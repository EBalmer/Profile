import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Containers } from '../styles/index';
import MenuButton from './MenuButton';

export default class MenuRow extends Component {
    render() {

        return (
            <View style={styles.menuRow}>
                    <MenuButton navigation={this.props.nav1} title={this.props.title1} />
                    <MenuButton navigation={this.props.nav2} title={this.props.title2} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    menuRow: {
        ...Containers.menuRow
    },
  })
