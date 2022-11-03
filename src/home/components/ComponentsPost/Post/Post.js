//React & React Native
import React, {useContext, useEffect} from 'react';
import {PostImage, PostInfo, PostInteraction, Description} from '../index';

//Context
import {Context as AuthContext} from '../../../../contexts/AuthContext';

//Styled components
import {PostContainer, ImageContainer, ExtraPostContainer} from './Post.styles';
import {ReportModal} from '../../../../shared';
import {Context as CommentContext} from '../../../../contexts/CommentContext';
import {SliderBox} from 'react-native-image-slider-box';
import { Dimensions } from 'react-native';
const Post = ({
  id,
  userId,
  username,
  profileImage,
  postImage,
  description,
  datePosted,
  likesCount,
  commentsCount,
  liked = false,
  post,
}) => {
  const {state} = useContext(AuthContext);

  return (
    <PostContainer>
      <ImageContainer>
        {/* <PostImage uri={postImage} /> */}
        <SliderBox
          images={postImage}
          ImageComponentStyle={{
            borderTopLeftRadius: 8,
            borderTopRightRadius:8,
          }}
          parentWidth={Dimensions.get('window').width-30}
          sliderBoxHeight={260}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </ImageContainer>
      <ExtraPostContainer>
        <PostInfo
          profileId={userId}
          username={username}
          profileImage={profileImage}
          datePosted={datePosted}
          post={post}
        />
        <PostInteraction
          id={id}
          commentsCount={commentsCount}
          likesCount={likesCount}
          liked={liked}
          type={'post'}
          post={post}
        />
        <Description description={description} />
        {/* <ReportModal
          type={userId !== state?.user?.id ? 'post' : 'deletePost'}
          reference={username}
          id={id}
        /> */}
      </ExtraPostContainer>
    </PostContainer>
  );
};

export default Post;
