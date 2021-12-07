import React from 'react';
import {
  View, Text, FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import Resturent from './resturent';
import styles from './styles';

const ResturentList = ({ title, data, navigation }) => {
    console.log('-------', data);
  if (!data.length) {
    return null;
  }
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={data.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', { id: item.id });
            }}
          >
            <Resturent data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default withNavigation(ResturentList);
