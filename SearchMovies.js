import React, { Component } from 'react';
import {

  StyleSheet,
TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import apiService from './api.service';
import movieService from './movie.service';
import style from './style'

// import {Container, Text, Button} from 'native-base';



  
export default class SearchMovies extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' ,
                       };
       this.onSubmitEditing = this.onSubmitEditing.bind(this);
      
      }
    
    static navigationOptions = {
        title: 'Search Movies'
    }

    onChangeText= (text)=>{
        this.setState({text})
      }
    
      SearchedMovies= param => {
        return page => {
           return movieService.Searchmovie(param,page).then((result)=> {
             return result;
           })
        }
      };

      onSubmitEditing =() =>{
        if(this.state.text){
        this.props.navigation.navigate("Movies", {
          name: `Results for` + this.state.text,
          fetchmovies: this.SearchedMovies(this.state.text)
        })}
        else {
        Alert.alert(
            'Empty Data',
            'Empty Data: Input Something to Search ',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          ) }
          this.setState({text: ""})
      };
      
    render() {
        return (

         <View> 

          <TextInput 
          ref={(ref) => { this.textInputRef = ref; }}
          style={style.search}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmitEditing}
          value={this.state.text}    
          placeholder={'Search...'}
           />
        
          </View> 
  
        );
    }
}
