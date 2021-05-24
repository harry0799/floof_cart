import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Screen2 = () => {
        return (
          <SkeletonPlaceholder>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  height: 50,
                  width: 230,
                  borderRadius: 4,
                  marginTop: 30,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 80,
                }}></View>
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 80,
                }}
              />
              <View
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 75,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  width: 70,
                  height: 25,
                }}></View>
              <View
                style={{
                  width: 70,
                  height: 25,
                }}
              />
              <View
                style={{
                  width: 70,
                  height: 25,
                }}
              />
            </View>
            <View style={{alignItems:"center"}}>
              <View
                style={{
                  height: 60,
                  width: 300,
                  borderRadius: 70,
                  marginTop: 30,
                }}
              />
            </View>
          </SkeletonPlaceholder>
        );
}
export default Screen2