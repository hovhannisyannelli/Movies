import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Text, Button, List, Content, ListItem, Container } from 'native-base';
import PersonDetail from './PersonDetail';




export default class People extends Component {
  constructor(props) {
    super(props);
    this.page=1;
    this.state = { people: [] 
    };
    
  }

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return {title: 'Found People'}
};

_get = ()=> {
  this.props.navigation.state.params.fetchpeople(this.page++).then((result)=>{
    this.setState( prevState => ({
      people: [...prevState.people, ...result.results]}))
    }
  )
}
componentWillMount=()=>{
     this._get();
}

onClickPerson = person => {
   this.props.navigation.navigate('PersonSummary', {person});
};

    render() {
        return (
          //onScrollEndDrag={this._get}
          <Container>
          <List dataArray={this.state.people}
                onEndReached={this._get}
                renderRow={(person)=><ListItem key={person.id} onPress={()=>this.onClickPerson(person)}><PersonDetail person={person}  /></ListItem> }>
          </List>
          
          </Container>
        );
     }
 }
