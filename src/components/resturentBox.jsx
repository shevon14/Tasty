import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants/theme';
import RatingBar from './rating';
import styles from './styles';

const ResturentBox = ({ data }) => (
  <View style={styles.resturentBoxContainer}>
    <Image style={styles.imageBox} source={{ uri: data.image_url }} />
    <View style={styles.distanceBoxContainer}>
      <Text style={styles.distance}>
        {parseInt(data.distance / 1000, 10)}
        {' '}
        KM
      </Text>
    </View>
    <View style={styles.textContainer}>
      <Text numberOfLines={1} style={styles.name}>{data.name}</Text>
      <Text numberOfLines={1} style={styles.address}>
        {data.location.address1}
        ,
        {' '}
        {data.location.city}
      </Text>
      <RatingBar ratingData={data.rating} reviewCount={data.review_count} verticalBar showCount />
    </View>
  </View>
);

export default ResturentBox;
