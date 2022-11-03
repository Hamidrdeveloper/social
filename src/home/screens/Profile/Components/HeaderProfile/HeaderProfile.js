//React & React Native
import React, {useContext, useEffect, useState, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//Libraries
import {Avatar} from 'react-native-elements';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Icons
import {
  Back,
  Message,
  DotsThreeVertical,
  LeftRow,
} from '../../../../../shared/Icons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

//Data
import {statisticsData} from '../../Utils/ProfileUtils';

//API
import * as API from '../../../../../api';

//Style Components
import {
  ContainerView,
  AvatarView,
  ProfileNameText,
  ProfileNicknameText,
  ProfileAddressText,
  StatisticsContainerView,
  StatisticsSectionView,
  VerticalLineView,
  StatisticsTitleSectionText,
  StatisticsSubtitleSectionText,
} from './HeaderProfile.styles';
import {IdChat} from '../../../BottomTabNavigatorScreens/HomeFeed';
import {ChatContext} from '../../../../../contexts/ChatContext';
import {ProfileContext} from '../../../../../contexts/ProfileContext';
const styles = StyleSheet.create({
  touchVerticalSlider: {
    alignItems: 'center',
    height: hp('7%'),
  },
});

const HeaderProfile = ({
  profile,
  profileAddress,
  navigation,
  personalView,
  profileId,
  profileImage,
  nickname,
}) => {
  const [statistics, setStatistics] = useState(null);
  const scroll = useRef();
  const statisticsSectionRender = () => {
    return (
      <>
        <View style={{width: '80%'}}>
          <ScrollView
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            ref={scroll}>
            {statisticsData.map((statistic, index) => {
              const lastStatistic = index + 1 >= statisticsData.length;
              return (
                <>
                  <TouchableWithoutFeedback
                    style={styles.touchVerticalSlider}
                    onPress={() =>
                      navigation.navigate('UserList', {
                        apiRequest: personalView
                          ? statistic.personalApi
                          : statistic.externalApi,
                        keyName: statistic.keyName,
                        userId: profile?.id,
                      })
                    }>
                    <StatisticsTitleSectionText>
                      {statistic.title}
                    </StatisticsTitleSectionText>
                    {statistic.keyToObtainValue == 'contributions' ? (
                      <StatisticsSubtitleSectionText>
                        {`${current_page}`}
                      </StatisticsSubtitleSectionText>
                    ) : (
                      <StatisticsSubtitleSectionText>
                        {profile?.[statistic.keyToObtainValue]
                          ? profile?.[statistic.keyToObtainValue] > 10
                            ? '10+'
                            : profile?.[statistic.keyToObtainValue]
                          : 0}
                      </StatisticsSubtitleSectionText>
                    )}
                  </TouchableWithoutFeedback>
                  {!lastStatistic && <VerticalLineView />}
                </>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  };

  useEffect(() => {
    if (!statistics) {
      setStatistics(API.Profile.getStatistics());
    }
  }, [statistics]);
  const {
    chatList,
    reGetChatId,
    setCurrentChat,
    getChatId,
    setSelectId,
    setUserId,
    getChat,
  } = useContext(ChatContext);
  const {current_page, setCurrent_page} = useContext(ProfileContext);
  return (
    <LinearGradient
      colors={['#FF675F', '#FFB963']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
        <TouchableWithoutFeedback
          style={{marginLeft: wp('4%')}}
          onPress={() => navigation.goBack()}>
          <Back width={20} height={20} firstColor="white" secondColor="white" />
        </TouchableWithoutFeedback>
        {profile?.options?.allow_chat_messages ? (
          <TouchableWithoutFeedback
            style={{marginLeft: wp('70%')}}
            onPress={() => {
              let idU = profileId;
              let idC = 0;
              IdChat.chatId = 0;
              IdChat.idUser = profileId;
              chatList.forEach(res => {
                if (
                  res?.creator_user.id == profileId ||
                  res?.target_user?.id == profileId
                ) {
                  idC = res.id;
                  idU = profileId;
                  IdChat.chatId = res.id;
                  IdChat.idUser = profileId;
                  reGetChatId();
                }
              });

              setSelectId(idC);
              setUserId(idU);
              getChatId(idC, profileId);
              setCurrentChat({
                nickname: profile?.username,
                avatar: profile?.profile_pic,
              });
              navigation.navigate('Chat');
            }}>
            <Message
              width={20}
              height={20}
              firstColor="white"
              secondColor="white"
            />
          </TouchableWithoutFeedback>
        ) : null}
        <TouchableWithoutFeedback
          style={{marginLeft: wp('8%')}}
          onPress={() =>
            navigation.navigate('ProfileNotificationSettings', {
              profileId: profileId,
            })
          }>
          <DotsThreeVertical
            width={20}
            height={20}
            firstColor="white"
            secondColor="white"
          />
        </TouchableWithoutFeedback>
      </View>
      <ContainerView>
        <AvatarView>
          {profile?.profile_pic ? (
            <Avatar
              avatarStyle={{
                borderWidth: 4,
                borderColor: 'white',
              }}
              size={wp('35%')}
              rounded
              title="MD"
              source={{uri: profile?.profile_pic?.replace(/https/g, 'http')}}
            />
          ) : (
            <View
              style={{
                width: wp('35%'),
                height: wp('35%'),
                borderRadius: wp('35%'),
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 4,
                borderColor: 'white',
              }}>
              <Text style={{color: '#fff', fontSize: 32}}>
                {profile?.fullname.substring(0, 2)}
              </Text>
            </View>
          )}
        </AvatarView>
        <ProfileNameText>{profile?.fullname}</ProfileNameText>
        <ProfileNicknameText>@{profile?.username}</ProfileNicknameText>
        <ProfileAddressText>{profile?.address}</ProfileAddressText>
        {/* {profile?.options?.share_phone&&profile?.phone ? (
          <ProfileAddressText>{profile?.phone}</ProfileAddressText>
        ) : null}
        {profile?.options?.share_email&&profile?.email ? (
          <ProfileAddressText>{profile?.email}</ProfileAddressText>
        ) : null} */}
        {profile?.address ? (
          <ProfileAddressText>{profile?.address}</ProfileAddressText>
        ) : null}
        <IconAntDesign
          style={{
            position: 'absolute',
            left: wp('2%'),
            marginTop: hp('41%'),
          }}
          name={'left'}
          size={20}
          color="white"
          onPress={() => {
            scroll.current.scrollTo({x: 0});
          }}
        />
        <IconAntDesign
          style={{
            position: 'absolute',
            left: wp('92%'),
            marginTop: hp('41%'),
          }}
          onPress={() => {
            scroll.current.scrollTo({x: 130});
          }}
          name="right"
          size={20}
          color="white"
        />
        <View
          horizontal={true}
          width={wp('100%')}
          showsHorizontalScrollIndicator={false}>
          <StatisticsContainerView>
            {statisticsSectionRender()}
          </StatisticsContainerView>
        </View>
      </ContainerView>
    </LinearGradient>
  );
};

export default HeaderProfile;
