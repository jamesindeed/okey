import { ImageBackground, View, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';

import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

import { COLORS, NFTData, assets } from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <FocusedStatusBar background={COLORS.primary} />
      {/* <ImageBackground
        source={assets.blurGradient}
        resizeMode='cover'
        style={{ flex: 1 }}
      > */}
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {/*  */}
        </View>
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default Home;
