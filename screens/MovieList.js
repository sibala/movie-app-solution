
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const win = Dimensions.get('window');
const ratio = win.width/300; //300 is actual image width
const scale = .15;

export default function MovieList({}) {
  const [searchByTitle , setSearchByTitle] = useState('');
  const [errorMessage , setErrorMessage] = useState('');
  const [movies , setMovies] = useState([]);
  const navigation = useNavigation();


  const getMovies = async title => {
    setSearchByTitle(title);
    setErrorMessage('');
    setMovies([]);
    try {
      let response = await fetch('http://www.omdbapi.com/?apikey=3abbd25a&s=' + title);
      let data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      setMovies(data.Search);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(title) => getMovies(title)}
        placeholder="Search movies by title"
      />
      {
        errorMessage && searchByTitle.length > 1
          ? <Text>{errorMessage}</Text>
          : <FlatList 
                data={movies}
                keyExtractor={item => item.imdbID}
                renderItem={({item}) => ( 
                  <TouchableOpacity
                      onPress={() => navigation.navigate('MovieDetails', {imdbID: item.imdbID})}
                  >
                    <View style={styles.movieContainer}>
                      <Image source={{ uri: item.Poster }} style={styles.moviePoster} />
                      <View style={styles.movieInfo}>
                        <Text style={styles.movieTitle}>{item.Title}</Text>
                        <Text>{item.Type}</Text>
                        <Text>{item.Year}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
            />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // marginTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 20,
  },
  moviePoster: {
    width: win.width * scale,
    height: 450 * ratio * scale, //450 is actual height of image
  },
  movieInfo: {
    marginLeft: 10,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
