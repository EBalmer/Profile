import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Menu from '../components/Menu';
import { Containers, Typography, Colours } from '../styles/index'
import { center } from '../styles/containers';

export default class Home extends Component {
    render() {

        return (
            <View style={styles.main}>
                <View style={{ flex: 0.25, marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.title}>Edd Balmer</Text>
                </View>
                <Menu 
                    navA={this.props.navPersonalStatement} titleA='Profile'
                    navB={this.props.navExperience} titleB='Experience'
                    navC={this.props.navEducation} titleC='Education'
                    navD={this.props.navEmployment} titleD='Employment'
                    navE={this.props.navHobbies} titleE='Hobbies'
                    navF={this.props.navDetails} titleF='Details'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        ...Containers.base,
        backgroundColor: Colours.theme.background
    },
    title: {
        ...Typography.base,
        ...Typography.header,
        color: Colours.theme.main
    }
})
