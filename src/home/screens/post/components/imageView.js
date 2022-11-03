//React & React Native
import React from 'react';

//Styles
import {
  ContainerView,
  TouchableOpacityImage,
  ImageSelected,
} from '../styles/imageView.styles';

//Libraries
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  deleteButton: {
    marginLeft: wp('85%'),
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    borderRadius: 25,
    padding: 3,
  },
});

const ImageView = ({pickedImage, setPickedImage,style}) => {
  return (
    <ContainerView>
      <ImageSelected style={style} source={pickedImage} />
      <TouchableOpacityImage>
        <Icon
          style={styles.deleteButton}
          name="close"
          type="FontAwesome"
          color="black"
          onPress={() => setPickedImage(null)}
        />
      </TouchableOpacityImage>
    </ContainerView>
  );
};

export default ImageView;
