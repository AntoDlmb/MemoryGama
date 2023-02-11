import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const LoadingPic = () => {
  const [images, setImages] = useState([]);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets.map(asset => asset.uri)]);
    }
  };

  const clearImages = () => {
    setImages([]);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Select Images" onPress={selectImage} />
      <Button title="Clear Images" onPress={clearImages} />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {images.map((image, index) => (
          <View key={index} style={{margin: 10}}>
            <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default LoadingPic;
