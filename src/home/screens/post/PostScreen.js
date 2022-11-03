//React & React Native
import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DoubleTapToClose from '../../../shared/ExecuteOnlyOnAndroid/ExecuteOnlyOnAndroid';
import {Post} from '../../components/ComponentsPost';
import PostSearchScreenTwo from '../../components/ComponentsPost/Post/PostSearchScreenTwo';

const PostScreen = ({route}) => {
  const {post} = route.params;

  return (
    <ScrollView>
      <PostSearchScreenTwo
        id={post.id}
        userId={post.user.id}
        username={post.user.username}
        profileImage={post.user.profile_pic}
        postImage={post?.medias?.map(x => {
          return x.url?.replace(/https/g, 'http');
        })}
        description={post.content}
        datePosted={new Date()}
        commentsCount={post.comments_count}
        likesCount={post.likes_count}
        liked={post.liked}
      />
      <DoubleTapToClose />
    </ScrollView>
  );
};

export default PostScreen;
