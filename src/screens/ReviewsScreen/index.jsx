import React, { useEffect, useState } from 'react';
import {
  View, Text, SafeAreaView, ScrollView, FlatList, Image,
} from 'react-native';
import yelp from '../../api/yelpAPI';
import RatingBar from '../../components/rating';
import styles from './styles';

const ReviewsScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}/reviews`);
    setResult(response.data);
    console.log('-----', result);
  };

  useEffect(() => {
    getResult(id);
  }, [getResult, id]);

  if (!result) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>All Reviews</Text>
        </View>
        <FlatList
          data={result.reviews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.reviewContainer}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.user.image_url,
                  }}
                />
              </View>
              <View style={styles.dataContainer}>
                <View style={styles.rowContainer}>
                  <Text style={styles.name}>{item.user.name}</Text>
                  <RatingBar ratingData={item.rating} showCount={false} />
                </View>
                <Text style={styles.date}>{item.time_created}</Text>
                <View style={styles.textContainer}>
                  <Text style={styles.review}>{item.text}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReviewsScreen;
