import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, Modal, Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
import { COLORS } from '../../constants/theme';
import styles from './styles';
import searchResults from '../../api/searchResults';
import ResturentList from '../../components/resturentList';

const ListScreen = (props) => {
  const { navigation } = props;
  const [searchTerm, setSearchTerm] = useState();
  const [locationTerm, setLocationTerm] = useState('new york');
  const [searchApi, results, errorMsg] = searchResults();
  const [modalVisible, setModalVisible] = useState(false);

  const [position, setPosition] = useState({});

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      searchApi(searchTerm, null, crd.longitude, crd.latitude);
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    }).catch((err) => {
      console.log(err);
    });
  };

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
              onEndEditing={() => {
                searchApi(searchTerm, locationTerm, position.longitude, position.latitude);
                setSearchTerm('');
              }}
              onChangeText={(newTerm) => setSearchTerm(newTerm)}
              placeholder="Search"
            />
          </View>
          <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.locationSearchBox}>
                  <Icon name="search" size={20} color={COLORS.icon} style={{ marginRight: 10 }} />
                  <TextInput
                    value={locationTerm}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onEndEditing={() => {
                    }}
                    onChangeText={(newTerm) => setLocationTerm(newTerm)}
                    placeholder="Enter your location"
                  />
                </View>
                <TouchableOpacity onPress={() => {
                  getCurrentLocation();
                  setModalVisible(!modalVisible);
                }}
                >
                  <View style={styles.rowContainer}>
                    <Icon name="map" size={20} color={COLORS.primay} style={{ marginRight: 10 }} />
                    <Text style={styles.modalText}>Use Current Location</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  >
                    <View style={styles.buttonCancel}>
                      <Text style={styles.buttonTextCancel}>Cancel</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {
                    setModalVisible(!modalVisible);
                    locationTerm && searchApi(searchTerm, locationTerm, null, null);
                  }}
                  >
                    <View style={styles.buttonSave}>
                      <Text style={styles.buttonTextSave}>Save</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <View style={styles.locationBox}>
            <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); }}>
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
