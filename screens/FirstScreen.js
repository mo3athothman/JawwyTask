import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
const util = require('util');

export default class FirstScreen extends Component<{}>{
    static navigationOptions = {
      title: 'First Screen',  
    };
    render(){
        this.props.navigationOptions
        var {navigate} = this.props.navigation;
        return(
            <View>
                <Text> This is screen1 </Text>
                <Button 
                onPress={
                    () =>navigate("Second", {name: "moath", email:"ASS.Com"})
                }
                title = "Go to screen2"
                />
            </View>
        );
    }
}