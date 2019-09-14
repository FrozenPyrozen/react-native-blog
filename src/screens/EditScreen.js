import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, actions } = useContext(Context);
  const { editBlogPost } = actions;

  const id = navigation.getParam('id');
  const blogPost = state.find(post => post.id === id);

  return (
    <>
      <BlogPostForm
        labels={{
          titleLabel: 'Edit Post Title:',
          contentLabel: 'Edit Post Content:',
        }}
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) =>
          editBlogPost({
            id,
            title,
            content,
            callback: () => navigation.navigate('Index'),
          })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
