/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import movieService from './movie.service';
import {Container, Text, Content, List, ListItem} from 'native-base';
import style from './style'

export default class Genres extends Component {
  
  constructor(props) {
    super(props);
    this.state = { genres: [] };
  }

  static navigationOptions = {
      title: 'List of Genres'
  } 

   componentWillMount=()=>{
    movieService.Genres().then((result)=>{
          this.setState({genres: result.genres});         
      });  
  }

  onClick = (genre) => {
    this.props.navigation.navigate('Movies', {
      name: genre.name,
      fetchmovies: this.getMovies(genre.id)
    })
  }

  getMovies= id => {
    return (page) => {
       return movieService.GenreMovie(id,page).then((result)=> {
         return result;
       })
    }
  };

    render() {
      var items = this.state.genres;
        return (
          <Container> 
            <Content>
            <List >
              {this.state.genres.map(genre => (
                <ListItem key={genre.id} onPress={() => this.onClick(genre)} >
                <Text style={style.genre}> {genre.name}</Text>
                </ListItem>  
              ))}
            </List>
            </Content>            
          </Container>
        );
    }
}

