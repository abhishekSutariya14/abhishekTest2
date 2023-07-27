import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const PostDetails = ({route}) => {
  const {post} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postBody}>{post.body}</Text>
    </View>
  );
};
