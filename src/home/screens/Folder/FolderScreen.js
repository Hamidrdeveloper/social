//React & React Native
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//Libraries
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Timeline from 'react-native-timeline-flatlist';

//Colors
import colorSchema from '../../../constants/colorSchema';

//Components
import {
  PostImage,
  PostInfo,
  PostInteraction,
} from '../../components/ComponentsPost';
import TimelineCard from './Components/TimelineCard';

//Utils
import {dataFolder} from './Utils/Folder.utils';

//Styles
const styles = StyleSheet.create({
  headImage: {
    maxWidth: wp('100%'),
    maxHeight: hp('40%'),
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
  horizontalLine: {
    borderTopColor: colorSchema.general.gray,
    borderTopWidth: 3,
    width: wp('100%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('3%'),
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  descriptionContainer: {
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
  descriptionText: {
    fontSize: wp('4%'),
  },
  timelineContainer: {
    paddingRight: wp('8%'),
    marginLeft: wp('-3%'),
    marginTop: hp('1%'),
  },
});

const FolderScreen = ({route}) => {
  const {folder} = route.params;
  const renderCard = (rowData, sectionID, rowID) => {
    return <TimelineCard rowData={rowData} />;
  };

  return (
    <ScrollView>
      <PostImage photoIndex={folder.image} style={styles.headImage} />
      <View style={styles.userInformationContainer}>
        <PostInfo
          username={'jonhwilson'}
          profileImage={1}
          datePosted={new Date()}
          follow={true}
        />
        <View style={styles.interactionContainer}>
          <PostInteraction
            id={123}
            commentsListId={[1, 2]}
            likesListsId={[1]}
          />
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{folder.description}</Text>
      </View>
      <View style={styles.timelineContainer}>
        <Timeline
          style={styles.list}
          data={dataFolder}
          circleSize={25}
          renderDetail={renderCard}
        />
      </View>
    </ScrollView>
  );
};

export default FolderScreen;
