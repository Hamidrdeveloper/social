//React & React Native
import React, {useCallback, useContext, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

//Librries
import {GiftedChat} from 'react-native-gifted-chat';

//Context
import {ChatContext} from '../../../../contexts/ChatContext';

//Data
import {messagesMock} from '../../../../utils/mockData/messageMock';

//Components
import ChatBody from './ChatBody';

//Styles
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

const Chat = props => {
  const {currentChat,chatListId} = useContext(ChatContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(messagesMock(currentChat));
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.container}>
      <ChatBody messages={chatListId} onSend={onSend} />
    </View>
  );
};

export default Chat;
