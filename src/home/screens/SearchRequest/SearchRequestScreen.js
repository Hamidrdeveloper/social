//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

//Libraries
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Components
import {
  PostImage,
  PostInfo,
  PostInteraction,
} from '../../components/ComponentsPost';

//React Navigation
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchRequestDescription from './Components/SearchRequestDescription';
import SearchRequestFolder from './Components/SearchRequestFolder';
import {searchRequestData} from './Utils/SearchRequest.utils';

//API
import {SearchRequest} from '../../../api/index';
import {Context as AuthContext} from '../../../contexts/AuthContext';

//Translation
import Translation from '../../../constants/i18n';
import {showErrorMessage} from '../../../utils/MessageToast/MessageToast';
import NavigationHeader from '../../../shared/NavigationHeader/NavigationHeader';
import {
  BackTouchableOpacity,
  ContainerView,
  TitleText,
  TitleView,
} from '../../../shared/NavigationHeader/NotificationSettingsHeader.styles';
import {Back, DotsThreeVertical} from '../../../shared/Icons';
import LinearGradient from 'react-native-linear-gradient';

//Navigation Types
const Tab = createMaterialTopTabNavigator();

//Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  headImage: {
    width: wp('100%'),
    height: hp('25%'),
    resizeMode: 'cover',
  },
  userInformationContainer: {
    maxWidth: wp('95%'),
    marginLeft: wp('2%'),
    marginBottom: hp('0.5%'),
  },
  interactionContainer: {
    marginLeft: wp('2%'),
  },
  tabScreenLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  tabScreenIndicator: {
    backgroundColor: '#2975B5',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: wp('4%'),
    marginTop: hp('3%'),
  },
});
//TODO If it's your own post it should show "Delete" instead of "Report"
//TODO Only the creator of an event should see "Liste bearbeiten"
//TODO Button "Teilnehmen" and "Contact" should only be visible to other people.
const SearchRequestScreen = ({navigation, route}) => {
  const {searchRequestId, hideNavigation} = route.params;
  const {state} = useContext(AuthContext);

  const [searchRequest, setSearchRequest] = useState(null);

  useEffect(() => {
    getSearchRequest();
  }, []);

  const getSearchRequest = async () => {
    const {error, data} = await SearchRequest.getSearchRequestById({
      searchRequestId,
    });
    if (error) {
      showErrorMessage();
    } else {
      setSearchRequest(data?.search_request);
    }
  };
  const Home = () => {
    return (
      <View style={{width: '100%'}}>
        <SearchRequestDescription searchRequestData={searchRequest} />
      </View>
    );
  };
  const ReportScreen = () => {
    return (
      <View style={{width: '100%'}}>
        <SearchRequestDescription searchRequestData={searchRequest} />
      </View>
    );
  };
  const RenderNavigation = searchRequest => {
    return (
      <View style={{height: 500, backgroundColor: '#000'}}>
        <Tab.Navigator>
          <Tab.Screen
            name="SearchRequestDescription"
            component={Home}
            // children={Home}
            options={{
              title: Translation.t(
                'socialApp.SearchRequest.navigators.description',
              ),
              tabBarLabelStyle: styles.tabScreenLabel,
              tabBarIndicatorStyle: styles.tabScreenIndicator,
            }}
          />
          {/* <Tab.Screen
            name="SearchRequestFolder"
            component={SearchRequestFolder}
            options={{
              title: Translation.t('socialApp.SearchRequest.navigators.folder'),
              tabBarLabelStyle: styles.tabScreenLabel,
              tabBarIndicatorStyle: styles.tabScreenIndicator,
            }}
          /> */}
        </Tab.Navigator>
      </View>
    );
  };
  console.log(searchRequest?.medias[0]?.url?.replace(/https/g, 'http'));
  let image = searchRequest?.user?.profile_pic?.replace(/https/g, 'http');
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {searchRequest ? (
        <>
          <PostImage
            uri={searchRequest?.medias[0]?.url?.replace(/https/g, 'http')}
            style={styles.headImage}
          />

          <View style={styles.userInformationContainer}>
            <PostInfo
              profileId={searchRequest?.user?.id}
              username={searchRequest?.user?.username}
              profileImage={searchRequest?.user?.profile_pic?.replace(
                /https/g,
                'http',
              )}
              datePosted={new Date()}
              follow={searchRequest?.user?.you_follow?.check}
              post={{item: searchRequest}}
            />
            <View style={styles.interactionContainer}>
              <PostInteraction
                id={searchRequest?.id}
                likesCount={searchRequest?.likes_count}
                liked={searchRequest?.liked}
                type="searchRequest"
                post={searchRequest}
              />
            </View>
          </View>
          {!hideNavigation ? (
            <SearchRequestDescription searchRequestData={searchRequest} />
          ) : (
            <SearchRequestDescription searchRequestData={searchRequest} />
          )}
        </>
      ) : (
        <Text style={styles.loadingText}>Loading</Text>
      )}
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.01)']}  style={{position: 'absolute',height:48, width: '100%', top: 0,justifyContent:'center'}}>
        <ContainerView style={{width: '100%'}}>
          <View style={{width: 15}} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Back
              width={20}
              height={20}
              firstColor="white"
              secondColor="white"
            />
          </TouchableOpacity>
          <View style={{width: 50}} />

          <View style={{position: 'absolute', right: 15}}>
            <TouchableOpacity
              style={{marginLeft: wp('8%')}}
              onPress={() =>
              {
                
                navigation.navigate('ProfileNotificationSettings', {
                  profileId: searchRequest?.user?.id,
                  userName: searchRequest?.user?.username,
                  id: searchRequest?.id,
                  useId: state?.user?.id,
                })}
              }>
              <DotsThreeVertical
                width={20}
                height={40}
                firstColor="white"
                secondColor="white"
              />
            </TouchableOpacity>
          </View>
        </ContainerView>
      </LinearGradient>
    </ScrollView>
  );
};

export default SearchRequestScreen;
