//React & React Native
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//Libraries
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-elements';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//Components
import {PostImage} from '../../../components/ComponentsPost';

//Utils
import {foldersDate, separateArray} from '../Utils/SearchRequest.utils';

//Translation
import Translation from '../../../../constants/i18n';
import CreateFolderButton from './CreateFolderButton';

//Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    maxHeight: hp('52%'),
  },
  folderContainer: {
    margin: 15,
    width: wp('42%'),
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    maxWidth: wp('42%'),
    height: hp('24%'),
    resizeMode: 'contain',
  },
  avatarContainer: {
    top: hp('-23%'),
    left: wp('-19%'),
    width: 0,
    height: 0,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

const SearchRequestFolder = () => {
  const navigation = useNavigation();
  renderImageWithAvatar = folder => {
    return (
      <TouchableOpacity
        style={styles.folderContainer}
        onPress={() => {
          navigation.navigate('FolderNavigators', {
            screen: 'Folder',
            params: {folder},
          });
        }}
      >
        <PostImage photoIndex={folder.image} style={styles.image} />
        <View style={styles.avatarContainer}>
          <Avatar size="small" source={folder.userAvatar} rounded={true} />
        </View>
      </TouchableOpacity>
    );
  };

  renderFolder = () => {
    const navigation = useNavigation();
    const firstFolder = foldersDate[0];
    const foldersLessFirst = separateArray(
      foldersDate.slice(1, foldersDate.length),
    );
    return (
      <View>
        {/* render first folder with the button new folder */}
        <View style={styles.rowContainer}>
          {/* Button new folder */}
          {<CreateFolderButton navigation={navigation} />}
          {/* First folder */}
          {renderImageWithAvatar(firstFolder)}
        </View>
        {/* render folders less first folder */}
        {foldersLessFirst.map(folders => {
          return (
            <View style={styles.rowContainer}>
              {folders.map(folder => {
                return renderImageWithAvatar(folder);
              })}
            </View>
          );
        })}
      </View>
    );
  };

  return <ScrollView style={styles.container}>{renderFolder()}</ScrollView>;
};

export default SearchRequestFolder;
