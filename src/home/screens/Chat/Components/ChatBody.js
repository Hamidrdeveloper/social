//React & React Native
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Libraries
import {
  GiftedChat,
  InputToolbar,
  Bubble,
  Send,
  Actions,
} from 'react-native-gifted-chat';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Icons
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {Gallery} from '../../../../shared/Icons/index';

//Colors
import colorSchema from '../../../../constants/colorSchema';

//Utils
import {
  fullDate,
  getHourAndMinutes,
  isSameDay,
} from '../../../../utils/DateFormatter/DateFormatter';
import {ChatContext} from '../../../../contexts/ChatContext';
import {Context as AuthContext} from '../../../../contexts/AuthContext';
import {chatDataIdUploadDocument} from '../../../../api/chat';
import {IdChat} from '../../BottomTabNavigatorScreens/HomeFeed';

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'white',
  },
  inputMessage: {
    backgroundColor: 'white',
  },
  inputText: {
    color: 'black',
    height: hp('5%'),
    width: wp('78%'),
    marginLeft: wp('3%'),
    paddingTop: hp('1%'),
  },
  sendButton: {
    marginBottom: hp('1%'),
  },
  dayContainer: {
    flexDirection: 'row',
    marginLeft: wp('5%'),
    marginBottom: hp('2%'),
  },
  horizontalLine: {
    borderTopColor: colorSchema.general.lightGray,
    borderTopWidth: 0.2,
    width: wp('30%'),
    marginTop: hp('1.5%'),
  },
  dayText: {
    color: colorSchema.general.lightGray,
    textAlign: 'center',
    borderColor: colorSchema.general.gray,
    borderRadius: 16,
    borderWidth: 1.5,
    width: wp('30%'),
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  galleryIconContainer: {
    marginTop: hp('-1%'),
  },
});

const renderInputToolbar = (props, openGallery, pickedImage) => {
  console.log('props.messages', props.messages);

  return (
    <InputToolbar
      {...props}
      renderActions={() => (
        <Actions
          {...props}
          options={{
            ['Photo']: props => {
              // openGallery();
              props.onSend([
                {
                  _id: '0f61f44d-3ee7-4ac8-98dd-11f33ad262cb',
                  createdAt: '2022-01-30T00:49:27.554Z',
                  text: 'Look this photo',
                  user: {_id: 1, avatar: 12},
                  image: 'https://picsum.photos/id/237/200/300',
                },
              ]);
            },
            Cancel: props => {},
          }}
          icon={() => (
            <View style={styles.galleryIconContainer}>
              <Gallery
                width={42}
                height={42}
                onPress={() => {
                  openGallery();
                }}
              />
            </View>
          )}
          onSend={args => props.onSend(args)}
        />
      )}
      renderSend={() => <RenderSend {...props} />}
    />
  );
};

const RenderSend = props => {
  return (
    <Send {...props}>
      <View style={styles.sendButton}>
        <IconIonicons
          name="send-sharp"
          size={wp('5%')}
          color={colorSchema.text.lightBlue}
        />
      </View>
    </Send>
  );
};

const renderBubble = props => {
  return (
    <View>
      <Bubble
        {...props}
        wrapperStyle={{
          left: {backgroundColor: colorSchema.iconColor.blue},
          right: {backgroundColor: colorSchema.iconColor.lightBlue},
        }}
        textStyle={{
          left: {color: 'white'},
          right: {color: 'white'},
        }}
        renderTime={() => <></>}
      />
      <Text
        style={{
          color: colorSchema.general.lightGray,
          marginLeft: props.position === 'left' ? wp('2%') : wp('16%'),
        }}>
        {getHourAndMinutes(props.currentMessage.createdAt)}
      </Text>
    </View>
  );
};

const renderDay = props => {
  if (
    props.currentMessage &&
    !isSameDay(props.currentMessage.createdAt, props.previousMessage.createdAt)
  ) {
    return (
      <View style={styles.dayContainer}>
        <View style={styles.horizontalLine} />
        <Text style={styles.dayText}>
          {fullDate(props.currentMessage.createdAt).slice(0, -7)}
        </Text>
        <View style={styles.horizontalLine} />
      </View>
    );
  }
};

const ChatBody = props => {
  const [pickedImage, setPickedImage] = useState('');
  const [message, setMessage] = useState('');

  const {sendMessage, sendMessageImage} = useContext(ChatContext);
  const {state} = useContext(AuthContext);
  const onClickSend = id => {
    sendMessageImage(id);
  };
  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, res => {
      if (res.didCancel) {
        console.log('User cancellled');
      } else if (res.errorCode) {
        console.log('Error', res.errorMessage);
      } else {
        const image = res.assets[0];
        chatDataIdUploadDocument(
          {uri: image.uri, base64: image.base64},
          IdChat.chatId,
          onClickSend,
        );
        // setPickedImage({uri: image.uri, base64: image.base64});
      }
    });
  };

  return (
    <GiftedChat
      listViewProps={{
        style: styles.listView,
      }}
      renderInputToolbar={props =>
        renderInputToolbar(props, openGallery, pickedImage)
      }
      renderBubble={renderBubble}
      textInputProps={{style: {...styles.inputText}}}
      scrollToBottom
      render
      renderTime={props => {
        return (
          <Text style={{marginHorizontal: 10, marginBottom: 5, color: 'red'}}>
            {`''`}
          </Text>
        );
      }}
      renderDay={renderDay}
      messages={props.messages}
      onSend={messages => {
        setMessage(messages);
        console.log('messages', messages);
        sendMessage(messages);
      }}
      showUserAvatar={true}
      user={{
        _id: state.user.id,
      }}
    />
  );
};

export default ChatBody;
