/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Icon} from 'native-base';
import { StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import Genres from './Genres';
import Movies from './Movies';
import MovieDetail from './MovieDetail';
import PersonDetail from './PersonDetail';
import SearchMovies from './SearchMovies';
import MovieSummary from './MovieSummary';
import PeopleSearch from './PeopleSearch';
import People from './People';
import PersonSummary from './PersonSummary';

const Root = StackNavigator({


  Genres: {
      screen: Genres,
  },
  Movies: {
    screen: Movies
  },
  MovieDetail: {
    screen: MovieDetail
  },
  MovieSummary: {
      screen: MovieSummary
  },
  People: {screen: People},

  PersonSummary: {screen: PersonSummary}
},
);

const Root1 = StackNavigator({  
    Search: {
        screen: TabNavigator({

            PeopleSearch: {
                screen: PeopleSearch,
                navigationOptions: ({ navigation }) => ({
                  title: 'Searching People',
                }),
              },

              SearchMovies: {
                screen: SearchMovies,
                navigationOptions: ({ navigation }) => ({
                  title: 'Searching Movies',
                }),
              },
       
        
        }),},  
    People: {screen: People},
    PersonSummary: {screen: PersonSummary},
    MovieSummary: {screen: MovieSummary},
    Movies: {
        screen: Movies
      },
      MovieDetail: {
        screen: MovieDetail
      },

  });

const RootTab = TabNavigator({
    Genres: {
        screen: Root,
        navigationOptions: {
            title: 'Genres'
        }
    },
    Search: {
        screen: Root1,
        navigationOptions: {
            title: 'Search'
        }
    }},


    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Genres') {
              iconName = `ios-list-box`;
            } else if (routeName === 'Search') {
              iconName = `md-search`;
            }

            return <Icon name={iconName} size={25} color={"blue"} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);


export default class App extends Component {


  render() {
    return (
            
               
            <RootTab> 
            </RootTab> 
       
        
     
    );
  }
}



