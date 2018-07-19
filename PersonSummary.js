import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import {Container, Text, Button, Card, CardItem, Content, List, ListItem} from 'native-base';
import movieService from './movie.service';
import PersonDetail from './PersonDetail';
import apiService from './api.service.js';
import MovieDetail from './MovieDetail';
import Movies from './Movies';
import style from './style';


let data;
export default class MovieSummary extends Component {
 
      constructor(props) {
        super(props);
        this.state = {
          person: props.navigation.state.params.person,
          credits: []
        };
     
      }

   static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {title: params.person.name}
    };
    
     componentWillMount=() =>{
        movieService.Person(this.state.person.id).then((result)=>{
            this.setState({person: result});         
        });
        movieService.PopleCredit(this.state.person.id).then((result)=>{
           this.setState({credits: result.cast});         
       });
      }
      onClickMovie = movie => {
        this.props.navigation.navigate('MovieSummary', {movie});
     };
    render() {
        return (
            <Content>
        <Card > 
           
        <CardItem>
          <Text style={style.title}> {this.state.person.name} </Text>
        </CardItem>
        <CardItem> 
            <Text>Birth Date: {this.state.person.birthday}</Text> 
        </CardItem>

            <CardItem> 
            <Text>Applicable Death Date: {this.state.person.deathday}</Text> 
        </CardItem>
        <CardItem>
        <Text>Popularity:  {this.state.person.popularity}</Text> 
        </CardItem>
            <CardItem> 
            <Text>Place of Birth: {this.state.person.place_of_birth}</Text> 
        </CardItem> 
        <CardItem> 
            <Text> {this.state.person.biography}</Text> 
        </CardItem>  
        <CardItem >
          <Image style={style.image} source={{ uri: apiService.getImage(this.state.person.profile_path) }}
          />
        </CardItem>
        <CardItem> 
        <List 
              dataArray = {this.state.credits}
              renderRow={ movie => (
                <TouchableOpacity
                onPress={() => this.onClickMovie(movie)}
                key={movie.id}
                     >
            <MovieDetail movie={movie} person/>
            </TouchableOpacity>
              )} horizontal
            />
     </CardItem>        
       </Card> 
       </Content> 
 
         ) }
        }
      