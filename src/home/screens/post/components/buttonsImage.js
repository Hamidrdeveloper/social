//React & React Native
import React from 'react';

//Styles
import {
  ContainerView,
  GalleryIconView,
  PhotoIconView,
  TouchableOpacity,
} from '../styles/buttonsImage.styles';

//Libraries
import {Text} from 'react-native-elements';

//i18n
import Translation from '../../../../constants/i18n';

//Icons
import {Gallery, Photo} from '../../../../shared/Icons';

const ButtonsImage = ({openGallery, openCamera,style}) => {
  return (
    <ContainerView style={style}>
      {/* Gallery Icon */}
      <TouchableOpacity onPress={openGallery}>
        <GalleryIconView>
          <Gallery width={42} height={42} />
        </GalleryIconView>
        <Text>{Translation.t(`socialApp.newPost.gallery`)}</Text>
      </TouchableOpacity>
      {/* Photo Icon */}
      <TouchableOpacity onPress={openCamera}>
        <PhotoIconView>
          <Photo width={42} height={42} />
        </PhotoIconView>
        <Text>{Translation.t(`socialApp.newPost.photo`)}</Text>
      </TouchableOpacity>
    </ContainerView>
  );
};

export default ButtonsImage;
