import { FlatList } from 'react-native';
import { useAppContext } from '../context/AppContext';
import DetailItem from './DetailItem';

function DetailsScreen({ navigation }) {
  const list = useAppContext();

  if (!list) {
    return null;
  }

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <DetailItem
          list={item}
          onPress={() => navigation.navigate('Profile', { id: item.id })}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default DetailsScreen;
