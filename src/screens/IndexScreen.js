import React, { useContext } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, actions } = useContext(Context);
  const { addBlogPost, deleteBlogPost } = actions;

  return (
    <View>
      <Button
        title="Add post"
        onPress={() =>
          addBlogPost({
            id: Date.now(),
            title: `Blog post #${state.length + 1}`,
          })
        }
      />

      <FlatList
        data={state}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.title}>
              {item.title} - id: {item.id}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <MaterialIcons style={styles.deleteIcon} name="delete" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  deleteIcon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
