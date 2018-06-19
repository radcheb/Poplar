'use strict';

import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import BackBtn from './component/navbar/BackBtn';

export default class About extends Component{
  render() {
    return (
      <View style={{flex:1,backgroundColor: 'white',}}>
        <NavigationBar
        style={{borderBottomWidth: 0.5, borderBottomColor: '#F3F3F3'}}
        title={{title: '关于'}}
        leftButton={<BackBtn onPress={()=>this.props.navigation.goBack()}/>}
        />
        <View>
          <View style={{alignItems: 'center', marginTop: 30,}}>
            <Image source={require('./imgs/poplar_logo_108.png')} style={{width: 56, height: 56}}/>
          </View>
          <View style={{alignItems: 'center', marginTop: 20,}}>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>Poplar</Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 5,}}>
            <Text style={{fontSize: 14, color:'#9B9B9B'}}>©2017-2018 lvwangbeta. All rights reserved.</Text>
          </View>
          <View style={{alignItems: 'flex-start', marginTop: 40, marginLeft: 60,}}>
            <Text style={{fontSize: 16, color:'#9B9B9B', marginBottom: 5}}>Open source components</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-navigation</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-image-crop-picker</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-keyboard-spacer</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-navbar</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-parallax-scroll-view</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-photo-view</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-qiniu</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-scrollable-tab-view</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-swiper</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-tab-navigator</Text>
            <Text style={{fontSize: 16, color:'#9B9B9B'}}>react-native-wechat</Text>
          </View>
        </View>
      </View>
    );
  }
}
