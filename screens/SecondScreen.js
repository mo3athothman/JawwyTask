import React, { Component } from 'react';
import {Text, View, Button, StyleSheet,} from 'react-native';
const util = require('util');


export default class SecondScreen extends Component<{}>{
    
    static navigationOptions = {
      title: 'Film Description',  
    };
    render(){
        var{params} = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{params.title}:</Text> 
                <Text style={styles.description}>{params.description}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    description: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  