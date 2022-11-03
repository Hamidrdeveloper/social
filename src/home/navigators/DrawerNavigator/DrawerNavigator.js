//React & React Native
import React, {useContext} from 'react';

//React Navigation
import {DrawerItemList} from '@react-navigation/drawer';

//Context
import {Context as AuthContext} from '../../../contexts/AuthContext';

//i18n
import Translation from '../../../constants/i18n';

//Styled components
import {
  DrawerContainer,
  TopContainer,
  RoutesContainer,
  SignOutContainer,
  SignOutText,
  LineView,
} from './DraweNavigator.styles';

//components
import UserInfoContainer from '../../components/UserInfoContainer/UserInfoContainer';
import DropsContainer from '../../components/DropsContainer/DropsContainer';
import {ScrollView,View} from 'react-native';

const DrawerNavigator = links => {
  //Context usage
  const {signOut} = useContext(AuthContext);

  return (
    <DrawerContainer>
      <ScrollView>
        <TopContainer>
          <UserInfoContainer />
          {false && <DropsContainer />}
        </TopContainer>

        <RoutesContainer>
          <DrawerItemList {...links} />
        </RoutesContainer>
        <LineView />
        <SignOutContainer onPress={signOut}>
          <SignOutText>
            {Translation.t('socialApp.SideBarDrawer.signOut')}
          </SignOutText>
        </SignOutContainer>
        <View style={{height:30}}/>
      </ScrollView>
    </DrawerContainer>
  );
};

export default DrawerNavigator;
