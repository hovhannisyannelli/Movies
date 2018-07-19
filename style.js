import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: { 
           width: 400, 
           height: 500, 
           flex: 1 },
  search: { borderColor: '#ffb6c1', 
            borderWidth: 3, 
            width: 400, 
            fontSize: 25, 
            fontFamily: 'italic', 
            color: '#40e0d0'

  },
  title: {
    fontSize: 20, 
    fontFamily: 'italic',
    color: 'red',
    fontWeight: 'bold',
  },

  genre: {
    fontSize: 30, 
    fontFamily: 'italic',
    color: 'red',
    fontWeight: 'bold',
    color: '#555'
  }
});