import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import _ from 'lodash';

const images = [
  { uri: require('./assets/cat-test (2).jpeg'), label: 'Cat' },
  { uri: require('./assets/cat-test (3).jpeg'), label: 'Cat' },
  { uri: require('./assets/cat-test (4).jpeg'), label: 'Cat' },
  { uri: require('./assets/cat-test (5).jpeg'), label: 'Cat' },
  { uri: require('./assets/Dog-Test (1).jpeg'), label: 'Dog' },
  { uri: require('./assets/Dog-Test (2).jpeg'), label: 'Dog' },
  { uri: require('./assets/Elephant-Test (1).jpeg'), label: 'Elephant' },
  { uri: require('./assets/Elephant-Test (4).jpeg'), label: 'Elephant' },
  { uri: require('./assets/Gorilla (4).jpeg'), label: 'Gorilla' },
  { uri: require('./assets/Gorilla (5).jpeg'), label: 'Gorilla' },
  { uri: require('./assets/Gorilla (6).jpeg'), label: 'Gorilla' },
  { uri: require('./assets/Gorilla (7).jpeg'), label: 'Gorilla' },
];
export {images};

const groupedImages = _.groupBy(images, 'label');

const ImageRow = ({ images, label }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ margin: 10 }}>{label}</Text>
      {images.map((image, index) => (
        <Image
          key={index}
          source={image.uri}
          style={{ width: 50, height: 50, margin: 10 }}
        />
      ))}
    </View>
  );
};

const GameOverview = () => {
  return (
    <FlatList
      data={Object.entries(groupedImages)}
      renderItem={({ item }) => (
        <ImageRow images={item[1]} label={item[0]} />
      )}
      keyExtractor={item => item[0]}
    />
  );
};

export default GameOverview;
