//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//components
import {Post, NewPostButton} from '../ComponentsPost';

//Context
import {NavigationContext} from '@react-navigation/native';
import {Context as PostContext} from '../../../contexts/PostContext';
import {Button, Input} from 'react-native-elements';
export const IdChat = {
  idUser: 0,
  chatId: 0,
};
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
//Translation
import Translation from '../../../constants/i18n';
import Toast from 'react-native-toast-message';

//Style Components
import {SpaceView} from './Postlist.styles';
import {BackgroundMain} from '../../../style/main';
import {CustomButton} from '../../../shared';
import {ViewBotton} from '../../screens/OptionScreen/ImageProfile/ImageProfileScreen.styles';
import {sendCode, vCode} from '../../../api/profile';

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
  },
});

const PostList = () => {
  const {state, loadPosts} = useContext(PostContext);

  const navigation = useContext(NavigationContext);
  //Should appear if there has been new content since the last visit
  const [showNewPost, setShowNewPost] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const renderItem = ({item}) => {
    // alert(JSON.stringify(item.item.id))
    return (
      <>
        {/* {showNewPost ? (
          <NewPostButton
            title="Neue Inhalte"
            onPress={() => navigation.navigate('NewPost')}
          />
        ) : (
          <SpaceView />
        )}
        {item.item === 0 && (
          <Text>
            Keine Inhalte vorhanden. Folge andere Personen und schau dir deren
            Suchanfragen und Beiträge an.
          </Text>
        )} */}
        <Post
          id={item?.item?.id}
          userId={item?.item?.user?.id}
          username={item?.item?.user?.username}
          profileImage={item?.item?.user?.profile_pic?.replace(/https/g, 'http')}
          postImage={item?.item?.medias?.map(x => {
            return x.url?.replace(/https/g, 'http');
          })}
          liked={item?.item?.liked}
          description={item?.item?.content}
          datePosted={item?.item?.publication_date}
          commentsCount={item?.item?.comments_count}
          likesCount={item?.item?.likes_count}
          post={item}
        />
      </>
    );
  };
  

  return (
    <SafeAreaView style={{flex: 1, padding: 15}}>
      <View>
        <Button
          containerStyle={{width: wp('92%'), height: 50}}
          buttonStyle={{height: 35}}
          onPress={() => {
            loadPosts();
          }}
          title={Translation.t('socialApp.Buttons.NewPost')}
          titleStyle={{fontSize: hp('1.5%'), color: '#fff'}}
          disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
        />

        {state.posts ? (
          <FlatList
            data={state.posts}
            renderItem={(item, index) => renderItem(item)}
            onEndReached={() => console.log('end')}
            onEndReachedThreshold={0.1}
            nestedScrollEnabled
          />
        ) : (
          <Text style={styles.empty}>
            {Translation.t('socialApp.SearchRequestList.empty')}
          </Text>
        )}
      </View>
     
    </SafeAreaView>
  );
};

export default PostList;
