import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SubInfo, Price, Title } from './SubInfo';
import { CircleButton, RectButton } from './Button';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: SIZES.large,
        paddingTop: SIZES.large,
        paddingBottom: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        marginBottom: SIZES.large,
        margin: SIZES.medium,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: '100%',
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 25,
          }}
        />

        {/* <CircleButton imgUrl={assets.like} right={10} top={10} /> */}
      </View>
      <SubInfo />
      <View style={{ width: '100%', padding: SIZES.font }}>
        <Title
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Price price={data.price} />
          <RectButton
            minWidth={100}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
