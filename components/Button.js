import { View, Text, Image, TouchableOpacity } from 'react-native';

import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <TouchableOpacity>
        <Image
          source={imgUrl}
          resizeMode='contain'
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.secondary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
