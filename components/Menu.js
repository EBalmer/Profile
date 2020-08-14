import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Containers } from '../styles/index';
import MenuRow from './MenuRow';

export default class Menu extends Component {
    render() {

        return (
            <View style={styles.menu}>
                    <MenuRow nav1 = {this.props.navA} title1={this.props.titleA} nav2 = {this.props.navB} title2={this.props.titleB} />
                    <MenuRow nav1 = {this.props.navC} title1={this.props.titleC} nav2 = {this.props.navD} title2={this.props.titleD}/>
                    <MenuRow nav1 = {this.props.navE} title1={this.props.titleE} nav2 = {this.props.navF} title2={this.props.titleF}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    menu: {
        ...Containers.base
    },
  })
