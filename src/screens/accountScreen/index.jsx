import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Account = () => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.title}>
        My Profile
      </Text>
    </View>
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: 'https://196034-584727-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/05/Business-Development-Manager-Profile-Photo.jpg' }} />
      </View>
      <View style={styles.profileTexts}>
        <Text style={styles.name}>John Smith</Text>
        <Text style={styles.email}>johnsmith@gmail.com</Text>
      </View>
    </View>
    <View style={styles.reviewconatiner}>
      <Text style={styles.subtitle}>My Reviews</Text>
      <View style={styles.reviewBox}>
        <Text style={styles.reviewText}>No any review add</Text>
      </View>
    </View>
  </View>
);

export default Account;
