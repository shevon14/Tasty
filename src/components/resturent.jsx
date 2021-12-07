import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/theme';
import styles from './styles';

const Resturent = ({ data }) => (
  <View style={styles.resturentContainer}>
    <Image style={styles.image} source={{ uri: data.image_url }} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.address}>
        {data.location.address1}
        ,
        {' '}
        {data.location.city}
      </Text>
      <View style={styles.bottomContainer}>
        <View style={styles.starContainer}>
          <Icon name="star" size={15} color={COLORS.primay} />
          <Icon name="star" size={15} color={COLORS.primay} />
          <Icon name="star" size={15} color={COLORS.primay} />
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

export default Resturent;
