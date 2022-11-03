//React & React Native
import React, {useContext, useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

//Context
import {ThemeContext} from 'styled-components';
import {Context as SearchContext} from '../../../contexts/SearchContext';

// Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';

//React Native Elements
import {Input} from 'react-native-elements';
import Translation from '../../../constants/i18n';
import colorSchema from '../../../constants/colorSchema';

//Others
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// Styled Components
import {SearchFieldContainer, TouchableFilterContainer} from './Search.styles';
import {Filter} from '../../Icons';
import {View} from 'react-native';

const SearchField = ({
  navigation,
  discoverMode = false,
  currentTab = 'Events',
}) => {
  const themeContext = useContext(ThemeContext);
  const {state, setKeyword} = useContext(SearchContext);
  const {fontFamily} = themeContext;
  const iconSize = 22;

  return (
    <SearchFieldContainer>
      <View style={{borderTopWidth: 3, borderColor: '#000'}} />
      <Input
        autoCapitalize="none"
        value={state.keyword}
        placeholder={Translation.t('socialApp.ScreenTitles.Search')}
        autoCorrect={false}
        inputContainerStyle={styles.inputContainer}
        inputStyle={{
          height: 30,
          color: 'black',
          fontSize: 18,
          fontFamily: fontFamily,
        }}
        onChangeText={keyword => {
          setKeyword(keyword);
        }}
        rightIcon={
          <Clear
            visible={state.keyword && true}
            onPress={() => setKeyword(' ')}
          />
        }
      />
      {!discoverMode && (
        <TouchableFilterContainer
          onPress={() => {
            alert(currentTab);
            navigation.navigate(`Search${currentTab}Filter`);
          }}>
          <Filter height={iconSize} width={iconSize} />
        </TouchableFilterContainer>
      )}
    </SearchFieldContainer>
  );
};

const Clear = ({onPress, visible}) => {
  const IconSize = 18;
  if (visible) {
    return (
      <TouchableOpacity onPress={onPress}>
        <IconAntDesign
          name={'closecircle'}
          color={colorSchema.general.darkGray}
          size={IconSize}
        />
      </TouchableOpacity>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0,
    marginTop: 10,
    marginBottom: -15,
    height: hp('4.5%'),
  },
});

export default SearchField;
