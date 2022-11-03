//React & React Native
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

//Libraries
import {Button} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

//Icons
import {AddFriend, Coffe} from '../../../../../shared/Icons';

//API
import {Profile, Follower} from '../../../../../api';

//Style Components
import {
  ContainerView,
  ContainerViewButtons,
} from './ButtonsProfileScreen.styles';

//Translation
import Translation from '../../../../../constants/i18n';

//Colors
import colorSchema from '../../../../../constants/colorSchema';

const ButtonsProfileScreenTwo = ({navigation, userId, post}) => {
  console.log('ButtonsProfileScreenTwo',post);
  const [changeFollowText, setChangeFollowText] = useState(
    post.you_follow?.check,
  );
  const [changeFollow, setChangeFollow] = useState(post.you_follow?.check);
  const [followLoading, setFollowLoading] = useState();
  //this variable will be modified when there is an endpoint to query if the current user is a follower of the profile that is viewing
  const following = post.you_follow;

  const followHandler = async () => {
    setFollowLoading(true);
    const {error, data} = changeFollow
      ? await Follower.unFollow({userId}).then(res => {
          if (res.status == 201) {
            setChangeFollowText(false);
            setChangeFollow(false);
          }

          setFollowLoading(false);
        })
      : await Follower.follow({userId}).then(res => {
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

  return (
    <ContainerView>
      <ContainerViewButtons>
        <Button
          buttonStyle={styles.button}
          titleStyle={styles.titleFollowButton}
          icon={<AddFriend />}
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
        <Button
          buttonStyle={{
            ...styles.button,
            ...styles.marginLeftButton,
          }}
          titleStyle={styles.titleSubscriptionButton}
          title={Translation.t('socialApp.Profile.buttonsProfile.subscribe')}
          onPress={Profile.subscribe}
        />
        <Button
          icon={<Coffe />}
          buttonStyle={{
            ...styles.button,
            ...styles.marginLeftButton,
            ...styles.coffeButton,
          }}
          onPress={() => navigation.navigate('ProfileNotificationSettings')}
        />
      </ContainerViewButtons>
    </ContainerView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorSchema.button.blue,
    width: wp('32%'),
    height: hp('5.5%'),
    borderRadius: 4,
  },
  coffeButton: {
    width: wp('15%'),
  },
  marginLeftButton: {
    marginLeft: wp('4%'),
  },
  titleFollowButton: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  titleSubscriptionButton: {
    fontWeight: 'bold',
  },
});

export default ButtonsProfileScreenTwo;
