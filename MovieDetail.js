/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import {Container, Text, Button, Card, CardItem} from 'native-base';
import movieService from './movie.service';
import apiService from './api.service.js';
import style from './style'

export default class MovieDetail extends Component {

    render() {
        return (
        <Card > 
        <CardItem>
          <Text style={style.title}> {this.props.movie.title} </Text>
        </CardItem>
        <CardItem> 
            <Text>Release Date: {this.props.movie.release_date}</Text> 
        </CardItem>
      
        { 
               !this.props.person ? (
            <CardItem>
                <Text>Popularity: {this.props.movie.popularity}</Text> 
           </CardItem> ) : null
        }
         { 
             !this.props.person ? (
        <CardItem>
          <Text>{this.props.movie.overview.substring(0, 100)}...</Text>
        </CardItem>) : null} 
        <CardItem >
          <Image style={{height: 500, flex: 1 }} source={{ uri: apiService.getImage(this.props.movie.poster_path) }}
          />
        </CardItem>
       </Card> 
         ) }
}

