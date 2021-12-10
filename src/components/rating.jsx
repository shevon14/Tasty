import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants/theme';
import styles from './styles';

const RatingBar = ({
  ratingData, reviewCount, verticalBar, showCount,
}) => {
  const [starCount] = useState(ratingData);
  const rating = [];
  for (let i = 0; i < starCount - 1; i++) {
    rating.push(
      <Icon name="star" size={18} color={COLORS.yellow} />,
    );
  }

  { !isInt(starCount) && rating.push(<Icon name="star-half" size={18} color={COLORS.yellow} />); }

  for (let i = Math.ceil(rating.length); i < 5; i++) {
    rating.push(
      <Icon name="star" size={18} color={COLORS.icon} />,
    );
  }

  function isInt(n) {
    return n % 1 === 0;
  }

  return (
    <View style={[styles.bottomContainer, verticalBar && { flexDirection: 'column', alignItems: 'flex-start' }]}>
      <View style={styles.starContainer}>
        {rating}
      </View>
      {
        showCount && (
          <Text style={styles.review}>
            {' '}
            (
            {reviewCount}
            {' '}
            Reviews)
          </Text>
        )
      }
    </View>
  );
};

export default RatingBar;
