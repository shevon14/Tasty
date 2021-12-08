import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants/theme';
import styles from './styles';

const Resturent = ({ data }) => {
  const [starCount, setStarCount] = useState(data.rating);

  const rating = [];

  for (let i = 0; i < starCount - 1; i++) {
    rating.push(
      <Icon name="star" size={18} color={COLORS.yellow} />,
    );
  }

  function isInt(n) {
    return n % 1 === 0;
  }

  return (
    <View style={styles.resturentContainer}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <View style={styles.distanceContainer}>
        <Text style={styles.distance}>
          {parseInt(data.distance / 1000, 10)}
          {' '}
          KM
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.name}>{data.name}</Text>
        <Text style={styles.address}>
          {data.location.address1}
          ,
          {' '}
          {data.location.city}
        </Text>
        <View style={styles.bottomContainer}>
          <View style={styles.starContainer}>
            {rating}
            {!isInt(starCount) && <Icon name="star-half" size={18} color={COLORS.yellow} /> }
          </View>
          <Text style={styles.review}>
            {' '}
            |
            {' '}
            {data.review_count}
            {' '}
            Reviews
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Resturent;
