//React & React Native
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Libraries
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Utils
import {profileImages} from '../../../../assets/Images/ProfileImages/Images';
import {fullDate} from '../../../../utils/DateFormatter/DateFormatter';

//Components
import {Post} from '../../../components/ComponentsPost';

//Icons
import {Delete} from '../../../../shared/Icons/index';

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleDate: {
    fontSize: wp('4%'),
    marginTop: hp('-1%'),
    textAlign: 'center',
    backgroundColor: colorSchema.general.gray,
    padding: 5,
    borderRadius: 13,
  },
  cardContainer: {
    flex: 1,
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
  },
  headCardContainer: {
    backgroundColor: colorSchema.iconColor.blue,
    width: wp('75%'),
    padding: 5,
    borderRadius: 10,
    marginTop: hp('1%'),
    marginBottom: hp('0.5%'),
  },
  deleteButton: {
    marginLeft: wp('66%'),
  },
  commentContainer: {
    flexDirection: 'row',
  },
  descriptionContainer: {
    maxWidth: wp('55%'),
    marginLeft: wp('4%'),
    borderColor: colorSchema.general.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
});

const TimelineCard = ({rowData}) => {
  return (
    <View style={styles.container}>
      {rowData?.date && (
        <Text style={styles.titleDate}>{fullDate(rowData?.date)}</Text>
      )}
      {rowData?.items &&
        rowData?.items.map(item => {
          return (
            <View style={styles.cardContainer}>
              <View style={styles.headCardContainer}>
                <View style={styles.deleteButton}>
                  <Delete />
                </View>
              </View>
              {item.type === 'post' && (
                <Post
                  id={item.id}
                  username={item.username}
                  profileImage={item.profileImage}
                  postImage={item.postImage}
                  description={item.description}
                  datePosted={item.datePosted}
                  commentsCount={item.comments_count}
                  likesCount={item.likes_count}
                />
              )}
              {item.type === 'comment' && (
                <View style={styles.commentContainer}>
                  <Avatar
                    size="medium"
                    rounded
                    title="MD"
                 
                    source={profileImages[item.profileImage - 1].image}
                  />
                  <View style={styles.descriptionContainer}>
                    <Text>{item.description}</Text>
                  </View>
                </View>
              )}
            </View>
          );
        })}
    </View>
  );
};

export default TimelineCard;
