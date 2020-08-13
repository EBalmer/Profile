import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MenuButton } from '../components/index';
import { Containers } from '../styles/index'

export default class Home extends Component {
    render() {

        return (
            <View style={styles.main}>
                <View style={styles.menuRow}>
                    <View style={styles.buttonContainer}>
                        <MenuButton navigation={this.props.navAdventure} title='Adventure' />
                    </View>
                    <View style={styles.buttonContainer}>
                        <MenuButton  title = 'Blank'/>
                    </View>
                </View>
                <View style={styles.menuRow}>
                    <View style={styles.buttonContainer}>
                        <MenuButton   title = 'Blank'/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <MenuButton   title = 'Blank'/>
                    </View>
                </View>
                <View style={styles.menuRow}>
                    <View style={styles.buttonContainer}>
                        <MenuButton   title = 'Blank'/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <MenuButton   title = 'Blank' />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        ...Containers.base
    },
    menuRow: {
        ...Containers.menuRow
    },
    buttonContainer: {
        ...Containers.buttonContainer
    }
  })
