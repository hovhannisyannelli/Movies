/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Text, Button, List, Content, ListItem, Container , onMomentumScrollEnd } from 'native-base';
import MovieDetail from './MovieDetail';



export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.page=1;
    this.state = { movies: [] 
    };
    
  }
  static navigationOptions = {
    title: 'Movies List'
}

_get= ()=> {
  this.props.navigation.state.params.fetchmovies(this.page++).then((result)=>{
    this.setState( prevState => ({
      movies: [...prevState.movies, ...result.results]}))
    }
  )
}
componentWillMount=()=>{
     this._get();
}

onClickMovie = movie => {
   this.props.navigation.navigate('MovieSummary', {movie});
};

goToPerson = person => {

    this.props.navigation.navigate("PersonSummary", { person });
  
}
    render() {
        return (
          //onScrollEndDrag={this._get}
          <Container>
          <List dataArray={this.state.movies}
                onEndReached={this._get}
                renderRow={(movie)=><ListItem key={movie.id} onPress={()=>this.onClickMovie(movie)}><MovieDetail movie={movie}  /></ListItem> }>
          </List>
            
          </Container>
        );
     }
 }
