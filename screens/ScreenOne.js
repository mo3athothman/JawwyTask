//THE APP

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import{List, ListItem} from 'react-native-elements';
const util = require('util');



export default class App extends Component<{}> {
 
  state = {
    data:[],
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films?limit=200');
    const json = await response.json();
    this.setState({data: json});
  };

  static navigationOptions = {
    title: 'List of Films',  
  };

  render() {
    this.props.navigationOptions
    var {navigate} = this.props.navigation;
    return (
      <View >
        <List>
            <FlatList 
              data={this.state.data}
              keyExtractor={(x, i) => i}
              renderItem={({item}) => 
            <ListItem
              roundAvatar
              onPress={
                () =>navigate("Second", {description: item.description, title: item.title})
            }
              //avatar={{uri: 'https://i.ytimg.com/vi/JilHZ_DdBYg/maxresdefault.jpg'}}
              title={`${item.title}`}
            />}
          />
        </List>
      </View>
    );
  }
}



