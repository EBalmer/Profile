import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Menu from '../components/Menu';
import { Containers, Typography, Colours } from '../styles/index';
import TextAnimator from '../animators/textAnimator';

export default class Home extends Component {
    render() {

        return (
            // <ImageBackground source={require('../assets/paper.png')} style={{flex: 1}}>
                <View style={styles.main}>
                    <View style={{ flex: 0.25, marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <TextAnimator content={'Edd Balmer'} />
                    </View>
                    <Menu
                        navA={this.props.navPersonalStatement} titleA='Profile'
                        navB={this.props.navExperience} titleB='Experience'
                        navC={this.props.navEducation} titleC='Education'
                        navD={this.props.navEmployment} titleD='Employment'
                        navE={this.props.navHobbies} titleE='Hobbies'
                        navF={this.props.navDetails} titleF='Details' />
                </View>
            // </ImageBackground>
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
