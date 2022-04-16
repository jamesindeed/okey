import { View, Text, Image } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants';

export const Title = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export const Price = ({ price }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={assets.eth}
        resizeMode='contain'
        style={{ width: 23, height: 23, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    >
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{
          width: 34,
          height: 34,

          // marginLeft: index === 0 ? 0 : -SIZES.font,
        }}
      />
    </View>
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: 'row', marginTop: -20 }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        marginTop: -SIZES.extraLarge,
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        // marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
