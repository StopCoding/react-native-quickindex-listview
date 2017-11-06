/**
 * Created by StopCoding on 2017/11/7.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    Text,
    View
} from 'react-native';

export default class QuickIndexListView extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});