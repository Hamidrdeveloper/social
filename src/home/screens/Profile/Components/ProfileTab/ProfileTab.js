//React & React Native
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';

//Libraries
import {Tab, TabView} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Components
import SearchRequestList from '../SearchRequestList/SearchRequestList';
import PostMiniatureList from '../PostMiniatureList/PostMiniatureList';
import FilterButton from '../FilterButton/FilterButton';

//Translation
import Translation from '../../../../../constants/i18n';

//Color
import colorSchema from '../../../../../constants/colorSchema';

//Styles
import {ContainerItem, ContainerItemView} from './ProfileTab.styles';
import { SpaceView } from '../../../../components/PostList/Postlist.styles';

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
  },
});

const ProfileTab = ({profile}) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Tab
        indicatorStyle={{backgroundColor: colorSchema.general.lightBlue}}
        value={index}
        onChange={setIndex}>
        <Tab.Item
          containerStyle={{backgroundColor: 'transparent'}}
          titleStyle={{
            color: 'black',
            fontSize: 13,
            marginLeft: wp('-3%'),
          }}
          title={Translation.t('socialApp.Profile.tab.searchQuestions')}
        />
        <Tab.Item
          containerStyle={{backgroundColor: 'transparent'}}
          titleStyle={{
            color: 'black',
            fontSize:
              Translation.t('socialApp.Profile.tab.contributions') ===
              'CONTRIBUTIONS'
                ? 11
                : 13,
          }}
          title={Translation.t('socialApp.Profile.tab.contributions')}
        />
        <Tab.Item
          containerStyle={{backgroundColor: 'transparent'}}
          titleStyle={{color: 'black', fontSize: 13}}
          title={Translation.t('socialApp.Profile.tab.likes')}
        />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item
          style={{width: '100%', alignItems: 'center', alignContent: 'center'}}>
          <ContainerItem>
          <SpaceView/>
            {/* <FilterButton width={'88'} filterData={filterData}/> */}
            <SpaceView/>
            <ContainerItemView>
              <SearchRequestList profile={profile} />
            </ContainerItemView>
            <SpaceView/>
          </ContainerItem>
        
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <ContainerItem>
            <ContainerItemView>
              <PostMiniatureList profile={profile} />
            </ContainerItemView>
          </ContainerItem>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Text style={styles.empty}>
            {Translation.t('socialApp.LikesList.empty')}
          </Text>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default ProfileTab;
