import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BlogPostForm = ({ labels, onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const { titleLabel, contentLabel } = labels;

  return (
    <View>
      <Text style={styles.label}>{titleLabel}</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>{contentLabel}</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />

      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: { title: '', content: '' },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginTop: 5,
  },
});

export default BlogPostForm;
