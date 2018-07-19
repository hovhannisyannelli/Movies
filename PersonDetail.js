
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

export default class PersonDetail extends Component {

    render() {

        return (
        <Card > 
        <CardItem>
          <Text style={style.title}> {this.props.person.name} </Text>
        </CardItem>
        { 
               !this.props.movie ? (
            <CardItem>
                <Text> Popularity: {this.props.person.popularity}</Text> 
               </CardItem> ) : null} 
               { 
               this.props.movie ? (
                   <CardItem> 
                       <Text> Character: {this.props.person.character}
                       </Text> 
                       </CardItem> ) : null
                }
         <CardItem >
          <Image style={style.image} source={{ uri: apiService.getImage(this.props.person.profile_path) }}
          />
        </CardItem>
       </Card> 

 
         ) }
}



