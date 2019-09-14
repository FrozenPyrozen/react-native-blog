import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { actions } = useContext(Context);
  const { addBlogPost } = actions;

  return (
    <>
      <BlogPostForm
        labels={{
          titleLabel: 'Enter Post Title:',
          contentLabel: 'Enter post Content:',
        }}
        onSubmit={(title, content) =>
          addBlogPost({
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

export default CreateScreen;
