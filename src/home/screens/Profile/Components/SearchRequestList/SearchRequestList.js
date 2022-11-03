//React & React Native
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

//API
import {SearchRequest} from '../../../../../api/index';

//Component
import MinimizedEvent from '../../../../components/MinimizedEvent/MinimizedEvent';

//Utils
import {showErrorMessage} from '../../../../../utils/MessageToast/MessageToast';

//Translation
import Translation from '../../../../../constants/i18n';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//Context
import {ProfileContext} from '../../../../../contexts/ProfileContext';

//Styles
const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: hp('5%'),
  },
  empty: {
    textAlign: 'center',
  },
});

const SearchRequestList = ({profile}) => {
  const [searchRequests, setSearchRequests] = useState([]);

  const {reloadSearchRequests} = useContext(ProfileContext);

  useEffect(() => {
    loadMySearchRequest();
  }, [reloadSearchRequests]);

  const loadMySearchRequest = async () => {
    const {error, data} = await SearchRequest.getSearchRequest({
      userId: profile?.id,
    });
    if (error) {
      showErrorMessage();
    } else {
    
      setSearchRequests(data);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      {searchRequests?.length ? (
        searchRequests.map(value => {
          return <MinimizedEvent data={searchRequests} searchRequest={value} />;
        })
      ) : (
        <Text style={styles.empty}>
          {Translation.t('socialApp.SearchRequestList.empty')}
        </Text>
      )}
    </ScrollView>
  );
};

export default SearchRequestList;
