import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Dimensions, FlatList } from 'react-native';

const win = Dimensions.get('window');
// const ratio = win.width/300; //300 is actual image width
// const scale = 1;

export default function MovieDetails({navigation, route}) {
  const [movie , setMovie] = useState([]);
  const [errorMessage , setErrorMessage] = useState('');
  const { imdbID } = route.params;
  const ALLOWED_MOVIE_PARAMS = [
    'Year',
    'Rated',
    'Released',
    'Runtime',
    'Genre',
    'Director',
    'Writer',
    'Actors',
    'Plot',
    'Language',
    'Country',
    'Awards',
    'Ratings',
    'Type',
    'DVD',
    'BoxOffice',
  ]


  useEffect(() => {
    getMovie();
  }, [imdbID]);

  const getMovie = async () => {
    setErrorMessage('');
    try {
      let response = await fetch('http://www.omdbapi.com/?apikey=3abbd25a&i=' + imdbID);
      let data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      console.log(data);
      setMovie(data);
    } catch (error) {
      setErrorMessage(error.message);
      // console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      {
        errorMessage
          ? <Text>{errorMessage}</Text>
          : <View style={styles.container}>
              <ImageBackground source={{ uri: movie.Poster }} imageStyle={{opacity:0.06}} style={styles.poster} >
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{movie.Title}</Text>
                <FlatList 
                  data={Object.entries(movie)}
                  keyExtractor={(item, index) => index}
                  renderItem={({item}) => {
                    // console.log(item);
                    const [param, value] = item;
                    if (typeof value === 'string' && ALLOWED_MOVIE_PARAMS.includes(param)) {
                      return (
                        <View style={styles.detailContainer}>
                          <Text style={styles.detailParam}>{param}: </Text><Text style={styles.detailValue}>{value}</Text>
                        </View>
                      );
                    }

                    if (param === 'Ratings') {
                      return (
                        <View style={styles.detailRatingsContainer}>
                          {  typeof value[0] !== 'undefined'
                                ? <View style={styles.detailRating}>
                                    <Text style={styles.detailParam}>IMDB: </Text><Text style={styles.detailValue}>{value[0].Value}</Text>
                                  </View>
                                : null
                          }
                              
                          {  typeof value[1] !== 'undefined'
                              ? <View style={[styles.detailRating, styles.detailRatingCenter]}>
                                  <Text style={styles.detailParam}>{value[1].Source}: </Text><Text style={styles.detailValue}>{value[1].Value}</Text>
                                </View>
                              : null
                          }
                              
                          { typeof value[2] !== 'undefined'
                              ? <View style={styles.detailRating}>
                                <Text style={styles.detailParam}>{value[2].Source}: </Text><Text style={styles.detailValue}>{value[2].Value}</Text>
                              </View>
                              : null
                          }
                        </View>
                      )
                    }

                  }}
                />
              </View>
              </ImageBackground>
            </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    // flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 20,
  },
  poster: {
    width: win.width,
    height: win.height, 
    // opacity: .02,//450 is actual height of image
  },
  detailsContainer: {
    margin: 20,
    opacity: 1,//450 is actual height of image
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    // textAlign: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailParam: {
    fontWeight: 'bold',
  },
  detailRatingsContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 30,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
  },
  detailRating: {
    padding: 9,
    textAlign: 'center',
  },
  detailRatingCenter: {
    // borderLeftColor: '#999',
    // borderLeftWidth: 1,
    // borderRightColor: '#999',
    // borderRightWidth: 1,
    // borderStyle: 'dotted',
  },
});
