'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import FeedList from './component/FeedList';


export default class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      barVisible: false,
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('new props ' + this.props.id + ' : ' + nextProps.id);
  //   if(nextProps.id == this.props.id ) return ;
  //   this.setState({sent: nextProps.sent, barVisible: true});
  //   //if(nextProps.id == this.props.id ) return ;
  //   if(nextProps.sent) {
  //     this.timer = setTimeout(() => {
  //       this.setState({sent: false, barVisible: false})
  //     },
  //     1000);
  //   }
  //
  // }
  //
  // componentWillUnmount() {
  //    this.timer && clearTimeout(this.timer);
  // }

  render(){
    return (
      <View style={styles.container}>
        <NavigationBar
        style={{borderBottomWidth: 0.5, borderBottomColor: '#F3F3F3'}}
        title={{title: 'Home'}}/>
        {this.state.barVisible && (!this.state.sent ?
        <View style={{height: 25,justifyContent: 'center',alignItems: 'center',backgroundColor: 'rgba(251, 189, 8, 0.8)'}}>
          <Text style={{color: 'white'}}>sending...</Text>
        </View> :
        <View style={{height: 25,justifyContent: 'center',alignItems: 'center',backgroundColor: '#00B5AD',}}>
          <Text style={{color: 'white'}}>Has been sent</Text>
        </View>
        )
        }
        <FeedList {...this.props} caller={'main'}/>
      </View>
    );
  }
};



var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  header: {
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(251, 189, 8, 0.8)',
  }
});

// module.exports = MainPage;
