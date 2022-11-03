import React, {useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

//Context
import {Context as SearchContext} from '../../../../contexts/SearchContext';
import {Context as SearchPostFilterContext} from '../../../../contexts/SearchPostFilterContext';

// API
import {searchPosts} from '../../../../api/search';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const PostSearch = ({discover = false}) => {
  let previousKeyword = '';
  const {state} = useContext(SearchContext);
  const {state: filterState} = useContext(SearchPostFilterContext);
  const navigation = useNavigation();

  let keyword = state.keyword;
  const [post, setPost] = useState([]);
  const [dividedPosts, setDividedPosts] = useState([]);

  const [resizeMode, setResizeMode] = useState(
    filterState.fillTile ? 'cover' : 'contain',
  );
  const [aspectRatio, setAspectRatio] = useState(
    filterState.squareView ? 1 : 0.56,
  );
  const [tilesPerRow, setTilesPerRow] = useState(
    filterState.listView ? 1 : filterState.tilesPerRow,
  );

  const SearchPost = async keyword => {
    const data = keyword ? await searchPosts(keyword) : null;
    setPost(data.posts);
  };

  const filterPosts = posts => {
    let filterPosts = [];
    let postContentType = [];
    filterState.photos ? postContentType.push('image') : null;
    filterState.videos ? postContentType.push('video') : null;
    filterState.questions ? postContentType.push('question') : null;

    filterPosts = posts?.filter(post => {
      return postContentType?.includes(post?.medias[0]?.type);
    });
    return filterPosts;
  };

  const adjustFormat = () => {
    setResizeMode(filterState.fillTile ? 'cover' : 'contain');
    setAspectRatio(filterState.squareView ? 1 : 0.56);
    setTilesPerRow(filterState.listView ? 1 : filterState.tilesPerRow);
  };

  const organizeRow = posts => {
    let tempArray = [];
    for (let i = 0; i < posts?.length; i = i + tilesPerRow) {
      let rowArray = posts?.slice(i, i + tilesPerRow);
      tempArray.push(rowArray);
    }
    setDividedPosts(tempArray);
  };

  useEffect(() => {
    if (previousKeyword !== state.keyword) {
      SearchPost(keyword);
    }
    adjustFormat();

    previousKeyword = state.keyword;
  }, [state.keyword, filterState]);

  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < post.length; i = i + tilesPerRow) {
      let rowArray = post.slice(i, i + tilesPerRow);
      tempArray.push(rowArray);
    }
    setDividedPosts(tempArray);
  }, [tilesPerRow]);

  useEffect(() => {
    if (discover) {
      organizeRow(discover ? filterPosts(post) : post);
    }
  }, [post]);

  const ImagePost = ({source}) => (
    <Image
      source={{uri: source}}
      style={{
        width: widthPercentageToDP(`${(100 / tilesPerRow) * 0.9}%`),
        height: undefined,
        backgroundColor: 'black',
        resizeMode: resizeMode,
        aspectRatio: aspectRatio,
        marginBottom: 1,
        marginRight: 1,
      }}
    />
  );

  const PostImageRow = ({posts}) => (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {posts.map(post => {
        return (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Post', {post: post})}>
            <ImagePost source={post.medias[0]?.url?.replace(/https/g, 'http')} />
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 15}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dividedPosts && (
          <>
            {dividedPosts.map(rowOfPosts => (
              <PostImageRow posts={rowOfPosts} />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostSearch;
