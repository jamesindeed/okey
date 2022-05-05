import { View, Text, Image, TextInput } from 'react-native';

import { COLORS, FONTS, SIZES, assets, SHADOWS } from '../constants';

const HomeHeader = () => {
  return (
    <View style={{ padding: SIZES.font }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: SIZES.medium,
        }}
      >
        <Text
          style={{
            marginLeft: 4,
            fontFamily: FONTS.bold,
            fontSize: SIZES.font,
            color: COLORS.white,
            // marginTop: SIZES.base / 2,
          }}
        >
          32.3M+ NFTs in market.
        </Text>
        {/* <Image
          source={assets}
          resizeMode='contain'
          style={{ width: 100, height: 35, marginLeft: -8 }}
        /> */}

        <View style={{ width: 40, height: 40 }}>
          <Image
            source={assets.person04}
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
          />
          <Image
            source={assets.badge}
            resizeMode='contain'
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      {/* <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello James,
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's get started...
        </Text>
      </View> */}

      <View style={{ marginTop: SIZES.base }}>
        <View
          style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.searchBar,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            // borderWidth: 2,
            shadowColor: COLORS.primary,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.1,
            shadowRadius: 5,

            elevation: 5,
          }}
        >
          <Image
            source={assets.search}
            resizeMode='contain'
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder='Search NFTs'
            placeholderTextColor={COLORS.grey}
            style={{
              flex: 1,
              fontFamily: FONTS.light,
              fontSize: SIZES.medium,
            }}
            // onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
