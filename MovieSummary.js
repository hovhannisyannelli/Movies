
import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import {Container, Text, Button, Card, CardItem, Content, List, ListItem} from 'native-base';
import movieService from './movie.service';
import MovieDetail from './MovieDetail';
import apiService from './api.service.js';
import PersonDetail from './PersonDetail';
import style from './style';


export default class MovieSummary extends Component {
 
      constructor(props) {
        super(props);
        this.state = {
          movie: props.navigation.state.params.movie,
          cast: [],
          genre: []
        };
      }

      static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {title: params.movie.title}
    };
    
    componentWillMount=()=> {
       
        movieService.MovieDetail(this.state.movie.id).then((result)=>{
           
            this.setState({movie: result}); 
                    
        });
        movieService.MovieCast(this.state.movie.id).then((result)=>{
           
            this.setState({cast: result.cast});         
        });
      
        movieService.MovieDetail(this.state.movie.id).then((result)=>{
           
            this.setState({genre: result.genres}); 
                    
        });
      }

    render() {
        return (
            <Content>
        <Card > 
            
        <CardItem>
          <Text style={style.title} > {this.state.movie.title} </Text>
        </CardItem>
        <CardItem> 
            <Text>Release Date: {this.state.movie.release_date}</Text> 
        </CardItem>
            <CardItem>
                <Text>Popularity: {this.state.movie.popularity}</Text> 
            </CardItem>
            <CardItem>
                <Text>Genres: {this.state.genre
                .reduce((accumulator, genre) => `${accumulator}, ${genre.name}`, " ")
                }</Text> 
            </CardItem>
            <CardItem> 
            <Text>Status: {this.state.movie.status}</Text> 
        </CardItem>
        <CardItem> 
            <Text>Revenue: {this.state.movie.revenue}</Text> 
        </CardItem>
        <CardItem> 
            <Text>Budget: {this.state.movie.budget}</Text> 
        </CardItem>
        <CardItem>
          <Text>{this.state.movie.overview}</Text>
        </CardItem>
       
        <CardItem >
          <Image style={style.image} source={{ uri: apiService.getImage(this.state.movie.poster_path) }}
          />
        </CardItem>
        <CardItem> 

        <List
        dataArray = {this.state.cast}
        renderRow={ person => (
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PersonSummary', {person})}
          key={person.cast_id}
               >
      <PersonDetail person={person} movie/>
      </TouchableOpacity>
        )} horizontal
      />
 </CardItem> 
       
       </Card> 
       </Content> 
 
         ) }
        }
      