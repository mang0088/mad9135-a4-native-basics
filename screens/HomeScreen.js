import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.styleTitle}>IMDB</Text>
        <Image style={styles.tinyLogo} source={require('../images/IMDB.png')} />
        <Text style={styles.styleDescription}>
          {'\t'}IMDb is an online database of information related to films,
          television series, home videos, video games, and streaming content
          online including cast, production crew and personal biographies, plot
          summaries, trivia, ratings, and fan and critical reviews.
        </Text>
        <Text style={styles.styleDescription}>
          {'\t'}While we actively gather information from and verify items with
          studios and filmmakers, the bulk of our information is submitted by
          people in the industry and visitors like you! In addition to using as
          many sources as we can, our data goes through consistency checks to
          ensure it's as accurate and reliable as possible.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 20,
    backgroundColor: '#abdbe3',
    borderRadius: 5,
  },
  styleTitle: {
    fontSize: 26,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
  },
  tinyLogo: {
    borderRadius: 20,
    width: 350,
    height: 250,
  },
  styleDescription: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    padding: 20,
    textAlign: 'justify',
  },
  scrollView: {
    marginHorizontal: 10,
  },
});
