import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import styles from './styles';
import RatingBar from '../components/rating';

const Resturent = ({ data }) => (
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
      <RatingBar showCount ratingData={data.rating} reviewCount={data.review_count} verticalBar={false} />
    </View>
  </View>
);

export default Resturent;
