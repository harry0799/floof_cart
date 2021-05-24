import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PetsShimmering = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <View style={{height: 30, width: 30, right: 120}} />
        <View style={{height: 30, width: 100}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 30,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View style={{height: 20, width: 50}} />
        <View style={{height: 20, width: 50}} />
        <View style={{height: 20, width: 50}} />
        <View style={{height: 20, width: 50}} />
        <View style={{height: 20, width: 50}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View style={{height: 50, width: 50, borderRadius: 50}} />
        <View style={{height: 50, width: 50, borderRadius: 50}} />
        <View style={{height: 50, width: 50, borderRadius: 50}} />
      </View>
    </SkeletonPlaceholder>
  );
};

export default PetsShimmering;
