import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import ChevronLeft from '../assets/chevron-left.svg';
import data from './carouselData';

const GetStartedScreen = () => {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Swiper autoplay={true} autoPlayInterval={5000}>
        {data.map((info, index) => {
          return (
            <View key={index}>
              <Image
                style={styles.image}
                source={info.image}
              />
              <View style={styles.textBox}>
                <View>
                  <Text style={styles.headerContent}>{info.title}</Text>
                  <Text style={styles.content}>{info.content}</Text>
                </View>

                <View style={styles.button}>
                  <Text style={styles.btnText}>Get started</Text>
                  <ChevronLeft />
                </View>
              </View>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '65%',
  },
  textBox: {
    paddingTop: 17,
    paddingBottom: 32,
    paddingLeft:16,
    paddingRight: 16,
    height: '35%',
    boxSizing: 'border-box',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerContent: {
    maxWidth: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    fontSize: 24,
    color: '#233539',
  },

  content: {
    textAlign: 'center',
    maxWidth: 270,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14,
  },

  button: {
    height: 48,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#1A73E8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    boxSizing: 'border-box',
  },

  btnText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default GetStartedScreen;
