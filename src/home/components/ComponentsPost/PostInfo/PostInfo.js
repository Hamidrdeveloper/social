//React & React Native
import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';

//Libraries
import {Avatar, Button} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Styled components
import {
  PostInfoContainerView,
  UserDataWrapper,
  PostedTimeReferenceText,
  UserNameText,
  FollowButtonContainer,
} from './PostInfo.styles';
import Toast from 'react-native-toast-message';

//ProfileImages
import {profileImages} from '../../../../assets/Images/ProfileImages/Images';

//Utils
import {dateFormatter} from '../../../../utils/DateFormatter/DateFormatter';

// Shared Components
import {ToProfileTouchableContainer} from '../../../../shared';

//Translation
import Translation from '../../../../constants/i18n';
import {Follower} from '../../../../api';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

//Styles
const styles = StyleSheet.create({
  followButton: {
    height: hp('4%'),
    width: wp('25%'),
    padding: 0,
    borderRadius: 5,
  },
  titleFollowButton: {
    fontSize: wp('4%'),
  },
});
import {Context as AuthContext} from '../../../../contexts/AuthContext';

const PostInfoContainer = ({
  profileId,
  username,
  profileImage,
  datePosted,
  follow = false,
  post,
}) => {
  const {state} = useContext(AuthContext);

  const [changeFollowText, setChangeFollowText] = useState(
    post?.item?.user?.you_follow.check,
  );
  const [changeFollow, setChangeFollow] = useState(
    post?.item?.user?.you_follow.accepted,
  );
  const [followLoading, setFollowLoading] = useState();
  //this variable will be modified when there is an endpoint to query if the current user is a follower of the profile that is viewing
  const followHandler = async () => {
    setFollowLoading(true);
    const {error, data} = changeFollow
      ? await Follower.unFollow({profileId}).then(res => {
          if (res.status == 201) {
            setChangeFollowText(false);
            setChangeFollow(false);
          }

          setFollowLoading(false);
        })
      : await Follower.follow({profileId}).then(res => {
          if (res.status == 201) {
            setChangeFollowText(true);
            setChangeFollow(true);
          }

          setFollowLoading(false);
        });
    if (!error) {
      setChangeFollowText(true);
      setFollowLoading(false);
    } else {
      setFollowLoading(false);
      //Show errro
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: data?.errorMessage,
      });
    }
  };
  console.log(post);
  return (
    <PostInfoContainerView>
      <ToProfileTouchableContainer profileId={profileId} post={post}>
        <Avatar
          size="medium"
          rounded
          title={username.substring(0, 2)}
          source={
            profileImage
              ? {
                  uri: profileImage?.replace(/https/g, 'http'),
                }
              : {
                  uri: 'https://hostpapasupport.com/knowledgebase/wp-content/uploads/2018/04/1-13.png',
                }
          }
        />
      </ToProfileTouchableContainer>
      <UserDataWrapper>
        <ToProfileTouchableContainer profileId={profileId}>
          <UserNameText>@{username}</UserNameText>
        </ToProfileTouchableContainer>
        <PostedTimeReferenceText>
          {dateFormatter(datePosted)}
        </PostedTimeReferenceText>
      </UserDataWrapper>
      {profileId == state.user.id
        ? null
        : follow && (
            <FollowButtonContainer>
              <Button
                buttonStyle={styles.followButton}
                titleStyle={styles.titleFollowButton}
                title={
                  changeFollowText
                    ? Translation.t('socialApp.Profile.buttonsProfile.pending')
                    : changeFollow
                    ? Translation.t('socialApp.Profile.buttonsProfile.unfollow')
                    : Translation.t('socialApp.Profile.buttonsProfile.follow')
                }
                loading={followLoading}
                onPress={followHandler}
              />
            </FollowButtonContainer>
          )}
    </PostInfoContainerView>
  );
};

export default PostInfoContainer;
