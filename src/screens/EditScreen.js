import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(post => post.id === navigation.getParam('id'));

  return (
    <>
      <BlogPostForm
        labels={{
          titleLabel: 'Edit Post Title:',
          contentLabel: 'Edit Post Content:',
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
