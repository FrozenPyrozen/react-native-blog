import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(post => post.id === navigation.getParam('id'));

  return (
    <View>
      <Text>Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
