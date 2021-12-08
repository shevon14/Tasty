import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Resturent from './resturent';
import styles from './styles';

const ResturentList = ({ title, data, navigation }) => (
  <View style={styles.listContainer}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('ListFilter', { title, data });
      }}
      >
        <Text style={styles.seeAll}>
          view all
          {' '}
          {'>'}
        </Text>
      </TouchableOpacity>
    </View>
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

export default withNavigation(ResturentList);
