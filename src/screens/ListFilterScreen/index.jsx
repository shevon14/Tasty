import React from 'react';
import {
  SafeAreaView, View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import ResturentBox from '../../components/resturentBox';
import { COLORS } from '../../constants/theme';
import styles from './styles';

const ListFilterScreen = ({ navigation }) => {
  const title = navigation.getParam('title');
  const data = navigation.getParam('data');
  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={data.id}
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
    </SafeAreaView>
  );
};

export default ListFilterScreen;
