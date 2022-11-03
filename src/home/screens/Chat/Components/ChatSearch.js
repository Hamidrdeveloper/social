//React & React Native
import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

// Icon
import IconAntDesign from 'react-native-vector-icons/AntDesign';

//Libraries
import {Input} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Context
import {ChatContext} from '../../../../contexts/ChatContext';

const ChatSearch = () => {
  const {searchChat, setSearchChat} = useContext(ChatContext);
  //TODO Add empty state, if there are no chats "Keine Chats vorhanden"
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

  return (
    <View style={styles.container}>
      <Input
        autoCapitalize="none"
        value={searchChat}
        placeholder="Search"
        autoCorrect={false}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.searchField}
        onChangeText={keyword => {
          setSearchChat(keyword);
        }}
        rightIcon={
          <Clear
            visible={searchChat && true}
            onPress={() => setSearchChat('')}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0,
    marginTop: hp('3%'),
    marginLeft: wp('-5%'),
    height: hp('4.5%'),
    width: wp('75%'),
    alignSelf:'center',
   
  },
  searchField: {
    height: 30,
    color: 'black',
    fontSize: 18,
  },
  container: {
    marginBottom: 0,
    borderBottomWidth: 0,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default ChatSearch;
