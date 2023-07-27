import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/Colors';

const PAGE_SIZE = 10; // Number of posts to load per page

/**
 * Home screen is used to display the list of post to fetch from API and also added refresh button and pull to refresh and pagination features
 * @param {Object} navigation
 * @returns component of list of post
 */
export const Home = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Current page number
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_SIZE}&_page=${page}`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts.');
      }

      const data = await response.json();
      setPosts(isRefreshing ? data : [...posts, ...data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setPage(1);
    fetchPosts();
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    fetchPosts();
  };

  const renderPostItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.postItem}
        onPress={() => navigation.navigate('PostDetails', {post: item})}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postBody}>{item.body}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && page === 1 ? (
        <ActivityIndicator size="large" color={COLORS.AQUA} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={handleRefresh}>
            <Text style={styles.refreshButtonText}>Refresh</Text>
          </TouchableOpacity>
          <FlatList
            data={posts}
            renderItem={renderPostItem}
            keyExtractor={(item, index) => index.toString()}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                colors={[COLORS.AQUA]}
                tintColor={COLORS.AQUA}
              />
            }
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        </>
      )}
    </View>
  );
};
