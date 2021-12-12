import React, { useEffect, useState } from 'react';
import {
  View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Linking, Platform,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { UpdateMode } from 'realm';
import yelp from '../../api/yelpAPI';
import RatingBar from '../../components/rating';
import { COLORS, SIZES } from '../../constants/theme';
import styles from './styles';
import realm from '../../services/realm';

const DetailsScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');

  const [favorite, setFavourite] = useState(false);
  const [favs, setFavs] = useState([]);

  const [result, setResult] = useState(null);
  const [days, setDays] = useState([
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: 'Closed' },
    { day: 'Wednesday', time: 'Closed' },
    { day: 'Thursday', time: 'Closed' },
    { day: 'Friday', time: 'Closed' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ]);

  const dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    const favouriteObject = realm.objects('FavouritesSchema').find((val) => val.restaurentId === id);
    favouriteObject ? setFavourite(true) : setFavourite(false);
  };

  useEffect(() => {
    getResult(id);
  }, [id]);

  const saveFavourites = () => {
    setFavourite(true);
    realm.write(() => {
      realm.create('FavouritesSchema', {
        restaurentId: id,
        name: result.alias,
      }, UpdateMode.Modified);
    });
  };

  const removeFavourites = () => {
    setFavourite(false);
    realm.write(() => {
      const favouriteObject = realm.objects('FavouritesSchema').find((val) => val.restaurentId === id);
      realm.delete(favouriteObject);
    });
  };

  if (!result) {
    return null;
  }

  function setOpeningHours(data) {
    data.forEach((val) => {
      const index = days.findIndex((x) => x.day === dayOfTheWeek[val.day]);
      const time = `${(val.start.substring(0, 2))}:${(val.start.substring(2, 4))} - ${(val.end.substring(0, 2))}:${(val.end.substring(2, 4))}`;
      if (days[index].time === 'Closed') {
        days[index].day = dayOfTheWeek[val.day];
        days[index].time = time;
      } else if ((days[index].time).length < 15 && data.length > 7) {
        days[index].time = `${(days[index].time)}\n${time}`;
      }
    });

    return (
      days.map((val) => (
        <View>
          <View style={styles.line} />
          <View style={styles.rowContainer}>
            <Text style={styles.day}>
              {val.day}
            </Text>
            <Text style={styles.time}>
              {val.time}
            </Text>
          </View>
        </View>
      ))
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.topContainer}>
          <Text style={styles.title}>
            {result.name}
          </Text>
          <View style={styles.verfied}>
            <IonIcon name="checkmark-circle" size={18} color={COLORS.primay} style={{ paddingRight: 5 }} />
            <Text style={styles.subTitle}>Verified</Text>
          </View>
          <Text style={styles.address}>
            {result.location.display_address}
          </Text>
          <RatingBar ratingData={result.rating} reviewCount={result.review_count} showCount />
          <View style={styles.reviewBar}>
            <View style={styles.line} />
            <View style={styles.rowContainer}>
              <View style={styles.iconRowContainer}>
                <TouchableOpacity onPress={() => {
                  if (favorite === false) {
                    saveFavourites();
                  } else {
                    removeFavourites();
                  }
                }}
                >
                  <View style={styles.circle}>
                    <Icon name="heart" size={25} color={favorite ? COLORS.primay : COLORS.title} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  Linking.openURL(Platform.OS === 'ios' ? `maps:${result.coordinates.latitude},${result.coordinates.longitude}?q=${result.location.display_address}` : `geo:${result.coordinates.latitude},${result.coordinates.longitude}?q${result.location.display_address}`);
                }}
                >
                  <View style={styles.circle}>
                    <Icon name="location-pin" size={25} color={COLORS.title} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  Linking.openURL(`tel:${result.phone}`);
                }}
                >
                  <View style={styles.circle}>
                    <Icon name="phone" size={25} color={COLORS.title} />
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Reviews', { id })}>
                <View style={styles.reviewBox}>
                  <Text style={styles.reviewText}>
                    REVIEWS
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.subTitle}>FEATURED IMAGES</Text>
        </View>
        <View style={styles.imgContainer}>
          <Carousel
            data={result.photos}
            sliderWidth={SIZES.width}
            itemWidth={SIZES.width - 10}
            loop
            autoplay
            autoplayInterval={8000}
            activeSlideOffset={0}
            firstItem={1}
            renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
          />
        </View>
        <View style={styles.hoursContainer}>
          <Text style={styles.subTitle}>OPENING HOURS</Text>
          <View style={styles.hoursValuesContainer}>
            {
             setOpeningHours(result.hours[0].open)
          }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
