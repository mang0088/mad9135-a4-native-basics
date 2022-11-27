import { FlatList } from 'react-native';
import { useAppContext } from '../context/AppContext';
import ListItem from './ListItem';

function ListScreen({ navigation }) {
  const list = useAppContext();

  if (!list) {
    return null;
  }

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <ListItem
          list={item}
          onPress={() => navigation.navigate('Detail', { id: item.id })}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListScreen;
