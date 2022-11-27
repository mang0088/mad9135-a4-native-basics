import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useAppContext } from '../context/AppContext';

function ProfileScreen({ route }) {
  const list = useAppContext();
  const id = route.params.id;

  let Card = {};
  Object.keys(list).forEach((detailCard) => {
    if (list[detailCard].id === id) Card = list[detailCard];
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={{ uri: `${Card.image}` }} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{Card.title}</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.categoryStyle}>
            <Text style={{ fontWeight: '500' }}>Year: </Text> {Card.year}
          </Text>
          <Text style={styles.categoryStyle}>
            <Text style={{ fontWeight: '500' }}>Crew: </Text> {Card.crew}
          </Text>
          <Text style={styles.categoryStyle}>
            <Text style={{ fontWeight: '500' }}>Rank Status: </Text>{' '}
            {Card.rankUpDown}
          </Text>
          <Text style={styles.categoryStyle}>
            <Text style={{ fontWeight: '500' }}>Ratings: </Text>
            {Card.imDbRating}/10 ({Card.imDbRatingCount})
          </Text>
        </View>
      </View>
    </View>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
    paddingLeft: 15,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#2596be',
    height: 400,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 200,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
  titleStyle: {
    textAlign: 'center',
    fontFamily: 'Cochin',
    fontSize: 24,
    fontWeight: '800',
  },
  categoryStyle: {
    fontFamily: 'Gill Sans',
    fontSize: 18,
    fontWeight: '300',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default ProfileScreen;
