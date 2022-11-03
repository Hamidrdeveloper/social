//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

//Libraries
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Timeline from 'react-native-timeline-flatlist';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Utils
import {dataFolder} from '../Utils/Folder.utils';

//Libraries
import DateTimePicker from '@react-native-community/datetimepicker';

//Icons
import FeatherIcons from 'react-native-vector-icons/Feather';

//Components
import TimelineCard from './TimelineCard';

//Translation
import Translation from '../../../../constants/i18n';

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  dateAndTimeTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    paddingLeft: wp('5%'),
    textTransform: 'uppercase',
  },
  dateAndTimeButton: {
    marginTop: hp('3%'),
    marginBottom: hp('-5%'),
    marginLeft: wp('8%'),
  },
  dateTimesContainer: {
    flexDirection: 'row',
    borderColor: '#a5afb7',
    width: wp('77%'),
    height: 50,
    marginLeft: wp('18%'),
  },
  dateTimeView: {
    width: '35%',
  },
  button: {
    width: wp('48%'),
    marginLeft: wp('47%'),
    marginTop: hp('2%'),
  },
});
import {Context as FolderContext} from '../../../../contexts/FolderContext';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Input} from 'react-native-elements';
import {createFolder} from '../../../../api/folder';
import Toast from 'react-native-toast-message';
import {SpaceView} from '../../../components/PostList/Postlist.styles';

const FolderStepTwo = ({route, navigation}) => {
  const [folderData, setFolderData] = useState([]);
  const [parent, setParent] = useState('');
  const [publicationDate, setPublicationDate] = useState(new Date());
  const [isButtonEnable, setButtonEnable] = useState(true);
  console.log('route?.params?.data', route?.params?.data);
  const onCrateFolder = () => {
    //Title and status attributes are not in the mockup
    const postObject = {...route.params.data, parent_id: parent};
    console.log(postObject);
    createFolder(postObject).then(res => {
      Toast.show({
        type: 'success',
        text2: 'Folder Created',
      });
      navigation.navigate('Home');
    });
  };
  const {getFullFolder, state} = useContext(FolderContext);
  useEffect(() => {
    getFullFolder();
  }, []);
  useEffect(() => {
    setFolderData(state.folders);
  }, [state]);
  function onClick(rowData) {
    let check = folderData.map(res => {
      if (rowData.id == res.id) {
        setParent(rowData.id);
        let data = {...res, flag: true};
        return data;
      }
      let data = {...res, flag: null};
      return data;
    });
    console.log(check);
    setFolderData(check);
  }
  const renderCard = rowData => {
    console.log(rowData);
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            onClick(rowData);
          }}>
          <View style={{flexDirection: 'row', paddingLeft: 30, marginTop: 12}}>
            <IconAntDesign
              name="folder1"
              size={wp('8%')}
              color={
                rowData.flag != null
                  ? colorSchema.text.lightBlue
                  : colorSchema.general.lightGray
              }
            />
            <View>
              <Text style={[styles.dateAndTimeTitle, {fontSize: 20}]}>
                {rowData.title}
              </Text>
              <Text style={[styles.dateAndTimeTitle, {fontSize: 15}]}>
                {rowData.description}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const addFolderData = () => {
    folderData.unshift({date: publicationDate});
    setFolderData(folderData);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.dateAndTimeTitle}>
          {Translation.t('socialApp.CreateFolder.stepTwo.parent')}
        </Text>
        <View style={styles.dateAndTimeButton}>
          <FeatherIcons
            name={'plus-circle'}
            size={30}
            color={colorSchema.general.lightBlue}
            onPress={addFolderData}
          />
        </View>
        <SpaceView />
        <SpaceView />
        {/* <View style={styles.dateTimesContainer}> */}
        {/* <View style={styles.dateTimeView}>
          <DateTimePicker
            testID="dateTimePicker"
            value={publicationDate}
            mode="date"
            textColor="black"
            display="default"
            format={'DD-MM-YYYY'}
            onChange={e => {
              setPublicationDate(new Date(e.nativeEvent.timestamp));
            }}
            style={{marginVertical: 10}}
          />
        </View>
        <View style={styles.dateTimeView}>
          <DateTimePicker
            testID="dateTimePicker"
            value={publicationDate}
            mode="time"
            textColor="black"
            display="default"
            format={'DD-MM-YYYY'}
            onChange={e => {
              setPublicationDate(new Date(e.nativeEvent.timestamp));
            }}
            style={{marginVertical: 10}}
          />
        </View> */}
        {/* </View> */}
        {folderData.map(item => {
          return renderCard(item);
        })}
        <View style={{height: 30}} />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            containerStyle={{width: '90%'}}
            disabled={!isButtonEnable}
            title={'Weiter'}
            titleStyle={{fontSize: hp('2.5%')}}
            disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
            onPress={() => {
              onCrateFolder();
            }}
          />
        </View>
      </View>
      <SpaceView />
    </ScrollView>
  );
};

export default FolderStepTwo;
