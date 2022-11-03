//React & Reac Native
import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';

//Libraries
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colorSchema from '../../../../constants/colorSchema';

//Icons
import FeatherIcons from 'react-native-vector-icons/Feather';

//Components
import ChoosePhoto, {
  ChoosePhotoMulti,
} from '../../../../shared/ImageGallery/ChoosePhoto';

//Translation
import Translation from '../../../../constants/i18n';
import Toast from 'react-native-toast-message';

//Context
import {CreateSearchRequestContext} from '../../../../contexts/CreateSearchRequestContext';

//Styles
import {TitleSectionText} from '../Styles/CreateSearchRequest.styles';
import {
  ContainerButtonSection,
  ContainerCategorySection,
  ContainerInput,
  ContainerPeopleSection,
  ContainerQuantityPeople,
  ContainerScrollView,
  PeopleNumberText,
  PeopleText,
  PlaceholderText,
} from '../Styles/CreateSearchRequestStepOne.styles';
import {SpaceView} from '../../../components/PostList/Postlist.styles';

const CreateSearchRequestStepOne = ({navigation}) => {
  const {
    pickedImage,
    setPickedImage,
    title,
    setTitle,
    description,
    setDescription,
    people,
    setPeople,
    category,
    setCategory,
  } = useContext(CreateSearchRequestContext);

  const decreasePeople = () => {
    if (people > 0) {
      setPeople(people - 1);
    }
  };
  //TODO Only increase up to 10, otherwise show "10+"
  //TODO Open little modal that shows categories usand el endpoint "getCategories"
  const incrementPeople = () => {
    if (people < 11) setPeople(people + 1);
  };

  const next = () => {
    if(description&&title&&pickedImage){
      navigation.navigate('SearchRequestStepTwo');

    }else{
      Toast.show({
        type: 'error',
        text1:'Fields marked with an asterisk must be filled.',
      });
    }
  };

  return (
    <ContainerScrollView>
      <ChoosePhoto
       pickedImage={pickedImage} setPickedImage={setPickedImage}
      />
      <View
        style={{
          marginTop: pickedImage ? hp('35%') : hp('10%'),
        }}>
        <TitleSectionText>
          {Translation.t('socialApp.CreateSearchRequest.stepOne.description')}
        </TitleSectionText>
        <PlaceholderText>
          {Translation.t('socialApp.CreateSearchRequest.stepOne.titel')}*
        </PlaceholderText>
        <ContainerInput>
          <Input maxLength={60} value={title} onChangeText={setTitle} />
        </ContainerInput>
        <PlaceholderText>
          {Translation.t('socialApp.CreateSearchRequest.stepOne.description')}*
        </PlaceholderText>
        <ContainerInput>
          <Input
            multiline={true}
            value={description}
            onChangeText={setDescription}
            maxLength={1000}
          />
        </ContainerInput>

        <ContainerPeopleSection>
          <TitleSectionText>
            {Translation.t('socialApp.CreateSearchRequest.stepOne.people')}
          </TitleSectionText>
          <View style={{flexDirection: 'row'}}>
            <PeopleText>
              {Translation.t('socialApp.CreateSearchRequest.stepOne.people')}
            </PeopleText>
            <ContainerQuantityPeople>
              <FeatherIcons
                name={'minus-circle'}
                size={30}
                color={colorSchema.general.lightBlue}
                onPress={decreasePeople}
              />
              <PeopleNumberText>{people > 9 ? '10+' : people}</PeopleNumberText>
              <FeatherIcons
                name={'plus-circle'}
                size={30}
                color={colorSchema.general.lightBlue}
                onPress={incrementPeople}
              />
            </ContainerQuantityPeople>
          </View>
        </ContainerPeopleSection>

        {/* <ContainerCategorySection>
          <TitleSectionText>
            {Translation.t('socialApp.CreateSearchRequest.stepOne.category')}
          </TitleSectionText>
        </ContainerCategorySection>
        <ContainerInput>
          <Input multiline={true} value={category} onChangeText={setCategory} />
        </ContainerInput> */}

        <ContainerButtonSection>
          <Button
            containerStyle={{width: wp('48%')}}
            onPress={next}
            title={Translation.t('socialApp.Buttons.Continue')}
            titleStyle={{fontSize: hp('2.5%')}}
            disabledTitleStyle={{color: 'gray', fontWeight: 'bold'}}
          />
        </ContainerButtonSection>
      </View>
      <SpaceView />
    </ContainerScrollView>
  );
};

export default CreateSearchRequestStepOne;
