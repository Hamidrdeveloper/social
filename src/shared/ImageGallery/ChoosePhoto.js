//React & React Native
import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

//Libraries
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//Components
import ButtonsImage from '../../home/screens/post/components/buttonsImage';
import ImageView from '../../home/screens/post/components/imageView';
import {TouchableOpacityImage} from '../../home/screens/post/styles/imageView.styles';
export const ChoosePhotoMulti = ({
  pickedImage,
  setPickedImage = [],
  multi = 1,
  mixed = 'photo',
}) => {
  const openGallery = () => {
    launchImageLibrary(
      {mediaType: mixed, includeBase64: true, selectionLimit: multi},
      res => {
        if (res.didCancel) {
          console.log('User cancellled');
        } else if (res.errorCode) {
          console.log('Error', res.errorMessage);
        } else {
          const image = res.assets[0];
          console.log(res.assets.length);
          let changeImage = res.assets.map(x => {
            return {uri: x.uri, base64: x.base64};
          });
          let arrayImage;

          if (pickedImage) {
            arrayImage = [...pickedImage, ...changeImage];
          } else {
            arrayImage = changeImage;
          }
          console.log('arrayImage', arrayImage.length);

          setPickedImage(arrayImage);
        }
      },
    );
  };
  const openGallerySpread = () => {
    launchImageLibrary(
      {mediaType: mixed, includeBase64: true, selectionLimit: multi},
      res => {
        if (res.didCancel) {
          console.log('User cancellled');
        } else if (res.errorCode) {
          console.log('Error', res.errorMessage);
        } else {
          const image = res.assets[0];
          console.log(res.assets.length);
          let arrayImage = res.assets.map(x => {
            return {uri: x.uri, base64: x.base64};
          });
          setPickedImage([...arrayImage, {uri: 'x.uri', base64: ''}]);
        }
      },
    );
  };
  const openCameraSpread = () => {
    launchImageLibrary(
      {mediaType: mixed, includeBase64: true, selectionLimit: multi},
      res => {
        if (res.didCancel) {
          console.log('User cancellled');
        } else if (res.errorCode) {
          console.log('Error', res.errorMessage);
        } else {
          console.log('res.', res);
          // let changeImage = res.assets.map(x => {
          //   return {uri: x.uri, base64: x.base64};
          // });
          // let arrayImage;

          // if (pickedImage) {
          //   arrayImage = [...pickedImage, ...changeImage];
          // } else {
          //   arrayImage = changeImage;
          // }
          // console.log('arrayImage', arrayImage.length);

          // setPickedImage(arrayImage);
        }
      },
    );
  };
  const openCamera = () => {
    launchCamera({mediaType: mixed, includeBase64: true}, res => {
      if (res.didCancel) {
        console.log('User cancellled');
      } else if (res.errorCode) {
        console.log('Error', res.errorMessage);
      } else {
        const image = res.assets[0];
        const push = [];
        push.push({uri: image.uri, base64: image.base64});
        let arrayImage;

        if (pickedImage) {
          arrayImage = [...pickedImage, ...push];
        } else {
          arrayImage = push;
        }
        setPickedImage(arrayImage);
      }
    });
  };
  const setPickedImageRemove = index => {
    let map = pickedImage.filter((x, i) => index != i);
    setPickedImage(map);
  };
  return (
    <View>
      {pickedImage ? (
        <View
          style={{
            width: '100%',
          }}>
          <FlatList
            data={[...pickedImage, {uri: 'x.uri', base64: ''}]}
            numColumns={3}
            renderItem={(uri, index) => {
              console.log(uri?.item?.uri);
              return (
                <View
                  style={{
                    width: 100,
                    height: 100,
                    marginLeft: 5,
                    marginTop: 5,
                  }}>
                  {uri?.item?.uri != 'x.uri' ? (
                    <>
                      <Image
                        style={{
                          width: 100,
                          height: 100,
                          backgroundColor: '#000',
                        }}
                        source={{uri: uri?.item?.uri}}
                      />
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#fff',
                          position: 'absolute',
                          top: 5,
                          right: 5,
                          width: 30,
                          height: 30,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 15,
                        }}
                        onPress={() => setPickedImageRemove(uri?.index)}>
                        <Icon
                          style={{
                            backgroundColor: '#fff',
                            borderRadius: 25,
                            padding: 3,
                          }}
                          name="close"
                          type="FontAwesome"
                          color="black"
                        />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <ButtonsImage
                      style={{
                        width: 100,
                        height: 100,
                        marginLeft: 0,
                        marginTop: 0,
                      }}
                      openGallery={openGallery}
                      openCamera={openCamera}
                    />
                  )}
                </View>
              );
            }}
          />
        </View>
      ) : (
        <ButtonsImage openGallery={openGallery} openCamera={openCamera} />
      )}
    </View>
  );
};
const ChoosePhoto = ({
  pickedImage,
  setPickedImage = () => {},
  multi = 1,
  mixed = 'photo',
}) => {
  const openGallery = () => {
    launchImageLibrary(
      {mediaType: mixed, includeBase64: true, selectionLimit: multi},
      res => {
        if (res.didCancel) {
          console.log('User cancellled');
        } else if (res.errorCode) {
          console.log('Error', res.errorMessage);
        } else {
          const image = res.assets[0];
          console.log(image);
          setPickedImage({uri: image.uri, base64: image.base64});
        }
      },
    );
  };

  const openCamera = () => {
    launchCamera({mediaType: mixed, includeBase64: true}, res => {
      if (res.didCancel) {
        console.log('User cancellled');
      } else if (res.errorCode) {
        console.log('Error', res.errorMessage);
      } else {
        const image = res.assets[0];
        setPickedImage({uri: image.uri, base64: image.base64});
      }
    });
  };

  return (
    <View>
      {pickedImage ? (
        <ImageView
          pickedImage={{uri: pickedImage?.uri}}
          setPickedImage={setPickedImage}
        />
      ) : (
        <ButtonsImage openGallery={openGallery} openCamera={openCamera} />
      )}
    </View>
  );
};

export default ChoosePhoto;
