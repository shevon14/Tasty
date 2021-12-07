import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const DetailsScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Reviews" onPress={() => navigation.navigate('Reviews')} />
    </View>
  );
};

export default DetailsScreen;
