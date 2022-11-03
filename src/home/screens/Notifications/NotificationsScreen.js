//React & React Native
import React, {useEffect, useState, useRef} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';

//Libraries
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';

//Components
import NotificationSettingsModal from './components/NotificationSettingsModal';
import FollowerNotification from './components/FollowerNotification';

//PostImages
import Notification from './components/Notification';

//Icons
import {Settings} from '../../../shared/Icons/index';

//API
import {getNotifications} from '../../../api/notifications';

//Translation
import Translation from '../../../constants/i18n';

const Notifications = () => {
  const [filteredNotifications, setFilteredNotifications] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterOption, setFilterOption] = useState(-1);
  const [totalPages, setTotalPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  let page = 1;
  let per_page = 9;

  const filterIdxToOption = idx => {
    switch (idx) {
      case -1:
        return [''];
      case 0:
        return ['Alle'];
      case 1:
        return ['Abonnenten'];
      case 2:
        return ['Bearbeitungen'];
      case 3:
        return ['Bedingungen'];
      case 4:
        return ['Beiträge'];
      case 5:
        return ['Erwähnungen'];
      case 6:
        return ['Kommentare'];
      case 7:
        return ['Likest'];
      case 8:
        return ['Markierungen'];
      case 9:
        return ['Suchanfragen'];
      case 10:
        return ['Teilnahmen'];
      case 11:
        return ['Sircher'];
    }
  };

  // Runs on first page load
  useEffect(() => {
    getNotifications().then((res)=>{
      console.log('getNotifications',res.getNotifications);
      setNotifications(res.getNotifications);
    })
    requestNotifications();
  }, []);

  // Runs every time the filterOption changes
  useEffect(() => {
    applyFilter();
  }, [filterOption, notifications]);

  const showErrorToast = error => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.errorMessage,
    });
  };

  const requestNotifications = async () => {
    const {error, data} = await getNotifications(page, per_page);
    if (error === true) {
      showErrorToast(error);
    }
    setTotalPages(data.total_page);
    setNotifications(data.notifications);
    setFilteredNotifications(data.notifications);
  };

  const loadMoreNotifications = async () => {
    // Triggered when the end of the page is reached
    if (actualPage < totalPages) {
      setActualPage(actualPage + 1);
      page = page + 1;

      const {error, data} = await getNotifications(page, per_page);

      if (error === true) {
        showErrorToast(error);
      }

      const newNotifications = [...notifications, ...data.notifications];
      setNotifications(newNotifications);
      applyFilter();
    }
  };

  const applyFilter = () => {
    // filterOption === -1 means no filter
    if (filterOption !== -1) {
      const new_notifications = notifications.filter(function (el) {
        const notificationType = el.meta_data[0].type;
        const filterOptions = filterIdxToOption(filterOption);
        return filterOptions.includes(notificationType);
      });
      setFilteredNotifications(new_notifications);
    } else {
      setFilteredNotifications(notifications);
    }
  };

  const refreshData = async () => {
    setRefreshing(true);
    requestNotifications();
    setRefreshing(false);
  };

  const renderNotification = ({item}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Notification notification={item} />
      </View>
    );
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      {/* <NotificationSettingsModal
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        setFilterOption={setFilterOption}
        applyFilter={applyFilter}
      /> */}
      <Button
        buttonStyle={{
          width: wp('95%'),
          marginTop: hp('1.5%'),
          alignSelf: 'center',
        }}
        title={Translation.t('socialApp.Notification.all')}
        titleStyle={{marginRight: wp('75%'), fontWeight: 'bold'}}
        icon={<Settings firstColor={"#fff"} width={20} height={25} />}
        iconPosition="right"
        // onPress={toggleModal}
      />

      <FlatList
        style={{height: '100%'}}
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item, idx) => idx.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
        }
        onEndReached={() => loadMoreNotifications()}
      />
    </View>
  );
};

export default Notifications;
