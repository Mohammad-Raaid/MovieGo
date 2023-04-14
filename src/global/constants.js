import { Dimensions } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const ENCRYPTED_TYPE = { TEXT: 'text', OBJECT: 'object' };

export const STORAGE_KEYS = {
    USER_DATA: '@user_data',
    USER_PIN: '@user_pin'
}
export const MOCKUP_WIDTH = 375;
export const CHANGE_BY_MOBILE_DPI = (temp) => (SCREEN_WIDTH / (MOCKUP_WIDTH / temp));

// export const HEADER_HEIGHT = 60;

// export const BUTTON_OPACITY = 1;
