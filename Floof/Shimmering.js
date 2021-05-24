import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Shimmering = () => {
        return (
          <SkeletonPlaceholder>
            <View style={{width: '100%', height: 200}}></View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{width: 120, height: 20, marginTop: 35, borderRadius: 4}}
              />
              <View
                style={{margin: 20, width: 210, height: 45, borderRadius: 10}}
              />
              <View style={{height: 20, width: 80, borderRadius: 4}} />
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                }}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    marginHorizontal: 10,
                  }}
                />
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    marginHorizontal: 10,
                  }}
                />
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    marginHorizontal: 10,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{height: 20, width: 120, marginLeft: 35}} />
            </View>
            <View
              style={{
                marginVertical: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 35,
              }}>
              <View style={{height: 40, width: 150}} />
              <View style={{height: 35, width: 50}} />
            </View>
            <View
              style={{
                marginVertical: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 35,
              }}>
              <View style={{height: 40, width: 150}} />
              <View style={{height: 35, width: 50}} />
            </View>
            <View
              style={{
                marginVertical: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{height: 20, width: 120, marginLeft: 35}} />
            </View>
          </SkeletonPlaceholder>
        );
    }
export default Shimmering
