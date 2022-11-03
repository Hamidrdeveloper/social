//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Libraries
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

//Context
import {ProfileContext} from '../../../../../contexts/ProfileContext';

//Components
import {PostImage} from '../../../../components/ComponentsPost';
import FilterButton from '../FilterButton/FilterButton';

//API
import {Post} from '../../../../../api/index';

//Utils
import {applyFilter, filterData} from './PostMiniatureList.utils';

//Translation
import Translation from '../../../../../constants/i18n';

//Styles Component
import {Container} from './PostMiniatureList.styles';

const styles = StyleSheet.create({
  postsContainer: {
    marginTop: hp('2%'),
  },
  emptyText: {
    textAlign: 'center',
  },
});

const PostMiniatureList = ({profile}) => {
  const {reloadPosts, setCurrent_page} = useContext(ProfileContext);
  const [posts, setPosts] = useState([]);
  const [filterOption, setFilterOption] = useState(filterData[0].value);

  const navigation = useNavigation();

  const getPosts = async () => {
    const {error, data} = await Post.getPostByUserId({
      userId: profile?.id,
    });
   
    if (!error && data.length) {
      const posts = [];
      let threePosts = [];
      applyFilter(data, filterOption).map(post => {
        if (threePosts.length === 3) {
          posts.push(threePosts);
          threePosts = [];
        }
        threePosts.push(post);
      });
      posts.push(threePosts);
      setCurrent_page(posts.length);
      setPosts(posts);
    }
  };

  useEffect(() => {
    getPosts();
  }, [filterOption, reloadPosts]);

  return (
    <Container>
      <FilterButton
        width={'98'}
        filterData={filterData}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />
      <View style={styles.postsContainer}>
        {posts.length > 0 &&
          posts.map((threePosts, index) => {
            return (
              <View style={{flexDirection: 'row'}} key={index}>
                {threePosts.map((post, index) => {
                  return (
                    <TouchableWithoutFeedback
                      onPress={() => {
                        navigation.navigate('Post', {post: post});
                      }}>
                      <PostImage
                        uri={post?.medias[0]?.url?.replace(/https/g, 'http')}
                        style={{
                          maxWidth: wp('32%'),
                          height: hp('24%'),
                          backgroundColor: 'black',
                          aspectRatio: 1,
                        }}
                      />
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            );
          })}
        {!posts.length && (
          <Text style={styles.emptyText}>
            {Translation.t('socialApp.PostMiniatureList.empty')}
          </Text>
        )}
      </View>
    </Container>
  );
};

export default PostMiniatureList;
