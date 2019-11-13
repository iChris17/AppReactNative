import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native'
import UserInfo from './UserInfo'

export default class MyAccountUser extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.viewbody}>
                <UserInfo/>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    viewbody:{
        flex :1,
        alignItems:"center",
        paddingLeft:30,
        paddingRight:30
    }
})