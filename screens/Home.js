import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import { Containers } from '../styles/index'

export default class Home extends Component {
    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'black', flex: 0.3, marginTop: 25 }} />
                <Menu 
                    navA={this.props.navPersonalStatement} titleA='Personal Statement'
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
    menu: {
        ...Containers.base
    },
    menuRow: {
        ...Containers.menuRow
    },
    buttonContainer: {
        ...Containers.buttonContainer
    }
})
