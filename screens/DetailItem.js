import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

function DetailItem({ list, onPress }) {
  return (
    <TouchableOpacity style={styles.main_container} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={{ uri: `${list.image}` }} />
        <Text style={styles.movieTitle}>{list.fullTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 8,
    borderRadius: 20,
  },
  tinyLogo: {
    width: 350,
    height: 200,
    borderRadius: 20,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    paddingLeft: 5,
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
});

export default DetailItem;
