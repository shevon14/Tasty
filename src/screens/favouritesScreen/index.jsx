import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import styles from './styles';
import realm from '../../services/realm';
import ResturentBox from '../../components/resturentBox';
import searchResults from '../../api/searchResults';
import { COLORS } from '../../constants/theme';
import favouritesAction from '../../redux/action';

const Favourites = ({ navigation }) => {
  const [searchApi, results, errorMsg] = searchResults();

  const [data, setData] = useState([]);
  const favourites = realm.objects('FavouritesSchema');

  navigation.addListener('didFocus', () => {
    data.splice(0, data.length);
    const filterResults = (id) => results.filter((result) => result.id === id);
    if (favourites) {
      favourites.forEach((element) => {
        const newFav = filterResults(element.restaurentId);
        const alreadyExits = data.some((val) => val.id === element.restaurentId);
        if (newFav[0] !== undefined && !alreadyExits) data.push(newFav[0]);
      });
      setData(data);
    }
  });

  return (
    <View
      style={styles.container}
    >
      <View style={styles.topContainer}>
        <Text style={styles.title}>
          My Favourites
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', { id: item.id });
              }}
            >
              <ResturentBox data={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Favourites;
