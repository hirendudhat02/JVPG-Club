import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const SCREEN_WIDTH = wp('100%');

export const SCREEN_HEIGHT = hp('100%');

export const showToast = (message) => Toast.show(message);

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    showToast(`Error while storing ${key} in async`);
  }
};

