//React & React Native
import React, {useContext, useState} from 'react';
import {View} from 'react-native';

//Libraries
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Button, CheckBox} from 'react-native-elements';

//Color
import colorSchema from '../../../../constants/colorSchema';

//API
import * as API from '../../../../api/index';

//Translation
import Translation from '../../../../constants/i18n';

//Styles Component
import {
  CheckBoxAndTextView,
  InformationCheckBoxText,
  InformationText,
  ButtonsView,
  Container,
  ContainerView,
} from './DeactivateScreen.styles';
import {deactivate} from '../../../../api/profile';
import {Context as AuthContext} from '../../../../contexts/AuthContext';

export const DeactivateScreen = props => {
  const [checked, setChecked] = useState(false);
  const {state, signOut} = useContext(AuthContext);

  return (
    <Container>
      <ContainerView>
        <InformationText>
          {Translation.t('socialApp.Options.deactivate.text.head')}
        </InformationText>
        <InformationText>
          {Translation.t('socialApp.Options.deactivate.text.body')}
        </InformationText>
        <InformationText>
          {Translation.t('socialApp.Options.deactivate.text.foot')}
        </InformationText>
        <CheckBoxAndTextView>
          <CheckBox
            checked={checked}
            onPress={() => setChecked(!checked)}
            size={wp('9%')}
          />
          <InformationCheckBoxText>
            {Translation.t('socialApp.Options.deactivate.text.checkBox')}
          </InformationCheckBoxText>
        </CheckBoxAndTextView>
        <ButtonsView>
          <Button
            style={{width: wp('42%')}}
            buttonStyle={{backgroundColor: colorSchema.button.gray}}
            title={Translation.t('socialApp.Options.deactivate.button.cancel')}
            titleStyle={{fontSize: 20, fontWeight: 'bold', color: 'gray'}}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <Button
            style={{width: wp('42%'), marginLeft: wp('4')}}
            title={Translation.t('socialApp.Options.deactivate.button.disable')}
            titleStyle={{fontSize: 20, fontWeight: 'bold', color: 'white'}}
            onPress={() => {
              deactivate().then(res => {
                if (res == true) {
                  signOut();
                }
              });
            }}
          />
        </ButtonsView>
      </ContainerView>
    </Container>
  );
};
