import React, { useContext } from 'react';
import { StyleSheet, Button, Text, View, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { state, actions } = useContext(BlogContext);
  const { addBlogPost } = actions;

  return (
    <View>
      <Text>IndexScreen</Text>
      <Button
        title="Add post"
        onPress={() => addBlogPost({ title: `Blog post #${state.length + 1}` })}
      />

      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
