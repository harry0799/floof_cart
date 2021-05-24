import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Screen4 = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{width: '100%', height: 200}}></View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{width: 200, height: 35, marginTop: 30, borderRadius: 4}}
        />
        <View
          style={{marginTop: 30, width: 100, height: 20, borderRadius: 4}}
        />
        <View style={{marginTop: 10, height: 20, width: 80, borderRadius: 4}} />
        <View
          style={{width: 350, height: 50, marginVertical: 25, borderRadius: 30}}
        />
        <View style={{width: 120, height: 25, borderRadius: 4}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          marginHorizontal: 30,
          left: 10,
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
          }}
        />
        <View style={{width: 100, height: 25, borderRadius: 4, left: 25}} />
      </View>

      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View style={{height: 40, width: 50, marginHorizontal: 45}} />
        <View style={{height: 35, width: 50, left: 40}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View style={{height: 40, width: 50, marginHorizontal: 45}} />
        <View style={{height: 35, width: 50, left: 40}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          marginHorizontal: 30,
          left: 10,
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
          }}
        />
        <View style={{width: 100, height: 25, borderRadius: 4, left: 25}} />
      </View>

      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View style={{height: 40, width: 50, marginHorizontal: 45}} />
        <View style={{height: 35, width: 50, left: 40}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View style={{height: 40, width: 50, marginHorizontal: 45}} />
        <View style={{height: 35, width: 50, left: 40}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 40,
        }}>
        <View style={{height: 35, width: 100}} />
        <View style={{height: 35, width: 50}} />
      </View>
    </SkeletonPlaceholder>
  );
};
export default Screen4;
