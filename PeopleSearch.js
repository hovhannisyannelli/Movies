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



  
export default class SearchPeople extends Component {
  
    constructor(props) {
        super(props);
        this.state = { text: '' ,
                       };
       this.onSubmitEditing = this.onSubmitEditing.bind(this);
      }
    
    static navigationOptions = {
        title: 'Search people'
    }

    onChangeText= (text)=>{
        this.setState({text})

      }
    
      SearchedPeople = param => {
        return page => {
           return movieService.SearchPerson(param,page).then((result)=> {
             return result;
           })
        }
      };

      onSubmitEditing =() =>{
          if(this.state.text){
        this.props.navigation.navigate("People", {
          name: this.state.text,
          fetchpeople: this.SearchedPeople(this.state.text)
          
        })} 
        else 
        Alert.alert(
            'Empty Data',
            'Empty Data: Input Something to Search ',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
          ); 
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
