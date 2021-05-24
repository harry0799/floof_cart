import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Screen5 = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{width: '100%', height: 70}}></View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{width: 200, height: 35, marginTop: 30, borderRadius: 4}}
        />
        <View
          style={{marginTop: 30, width: 100, height: 20, borderRadius: 4}}
        />
        <View style={{marginTop: 10, height: 20, width: 80, borderRadius: 4}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 30,
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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{height: 35, width: 45, marginHorizontal: 45}} />
        <View style={{height: 35, width: 50, left: 40}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{height: 35, width: 45, marginHorizontal: 45}} />
        <View style={{height: 35, width: 50, left: 40}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 30,
          marginBottom:30,
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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{height: 35, width: 45, marginHorizontal: 45}} />
        <View style={{height: 35, width: 50, left: 40}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginBottom: 20,
        }}>
        <View style={{height: 35, width: 45, marginHorizontal: 45}} />
        <View style={{height: 35, width: 50, left: 40}} />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 40,
        }}>
        <View style={{height: 35, width: 100}} />
        <View style={{height: 35, width: 50}} />
      </View>
      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 40,
        }}>
        <View style={{height: 35, width: 100}} />
        <View style={{height: 35, width: 50}} />
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
      <View
        style={{
          marginVertical: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 40,
        }}>
        <View style={{height: 40, width: 100}} />
        <View style={{height: 40, width: 50}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{height: 25, width: 50}} />
        <View style={{height: 25, width: 100, right: 50}} />
        <View style={{height: 20, width: 30, marginRight: 10}} />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{height: 25, width: 50}} />
        <View style={{height: 25, width: 100, right: 50}} />
        <View style={{height: 20, width: 30, marginRight: 10}} />
      </View>
    </SkeletonPlaceholder>
  );
};
export default Screen5;
