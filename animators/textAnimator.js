import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { Containers, Typography, Colours } from '../styles/index'

export default class TextAnimator extends Component {
    animatedValues = []
    constructor(props) {
        super(props)

        const tarr = props.content.split('')
        tarr.forEach((_, i) => {
            this.animatedValues[i] = new Animated.Value(0)
        });
        this.State = {
            textarray: tarr
        }
    }

    animated = (toValue = 1) => {
        const animations = this.State.textarray.map((_, i) => {
            return Animated.timing(this.animatedValues[i], {
                toValue,
                duration: 1100,
                useNativeDriver: true
            });
        });
        Animated.stagger(100, animations).start();
    }

    componentDidMount() {
        this.animated()
    }

    render() {
        return (
            <View style={styles.animatedTextContainer}>
                {this.State.textarray.map((letter, index) => {
                    return (
                        <Animated.Text
                            key={index}
                            style={[styles.animatedText,
                                {opacity: this.animatedValues[index]}]}>
                            {letter}
                        </Animated.Text>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animatedTextContainer: {
        ...Containers.animatedTextContainer
    },
    animatedText: {
        ...Typography.base,
        ...Typography.header,
        color: Colours.theme.main
    }
})
