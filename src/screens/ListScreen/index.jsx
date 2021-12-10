import React, { useState } from 'react';
import {
  SafeAreaView, View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../constants/theme';
import styles from './styles';
import searchResults from '../../api/searchResults';
import ResturentList from '../../components/resturentList';

const ListScreen = (props) => {
  const { navigation } = props;
  const [searchTerm, setSearchTerm] = useState();
  const [searchApi, results, errorMsg] = searchResults();

  const filterResults = (price) => results.filter((result) => result.price === price);

  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBox}>
            <Icon name="search" size={20} color={COLORS.icon} style={{ marginRight: 10 }} />
            <TextInput
              value={searchTerm}
              autoCapitalize="none"
              autoCorrect={false}
              onEndEditing={() => searchApi(searchTerm)}
              onChangeText={(newTerm) => setSearchTerm(newTerm)}
              placeholder="Search"
            />
          </View>
          <View style={styles.locationBox}>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <Icon name="location" size={25} color={COLORS.primay} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        {!errorMsg ? (
          <ScrollView>
            <ResturentList title="Cost Effective" data={filterResults('$')} />
            <ResturentList title="Bit Pricer" data={filterResults('$$')} />
            <ResturentList title="Big Spender" data={filterResults('$$$')} />
            <View style={{ height: 160, backgroundColor: COLORS.background }} />
          </ScrollView>
        ) : (
          <View style={styles.errorScreen}>
            <Text style={styles.error}>{errorMsg}</Text>
          </View>
        ) }
      </View>
    </SafeAreaView>
  );
};

export default ListScreen;
