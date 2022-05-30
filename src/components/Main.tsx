import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Modal, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { globalStyle } from '../styles/globalStyle'
import { episodeStyle } from '../styles/episodeStyle'

export default function Main({ navigation }: any) {

  const [news, setNews] = useState([
    { name: 'Появление человека разумного. Наличие разума, прямохождение, адаптация.', lessonId: '193', key: '1', img: 'https://avatars.githubusercontent.com/u/33753111?v=4&s=40' },
    { name: 'Появление человека разумного. Добыча еды, земледелие, речь и творчество.', lessonId: '194', key: '2', img: 'https://avatars.githubusercontent.com/u/13367689?s=60&v=4' },
    { name: 'Викторина №1', lessonId: '399', key: '3', img: 'https://avatars0.githubusercontent.com/u/37979473?v=4&s=40' },
    { name: 'Возникновение городов. Причины возникновения и роста', lessonId: '195', key: '4', img: 'https://avatars0.githubusercontent.com/u/37979473?v=4&s=40' },
    { name: 'Возникновение городов. Древнейшие города: Иерихон, Кносс, Аркаим и другие', lessonId: '199', key: '5', img: 'https://avatars0.githubusercontent.com/u/37979473?v=4&s=40' },
  ]);

  return (
    <View style={[episodeStyle.main, globalStyle.main]} >
      <Image style={episodeStyle.logo} source={require('../img/kidverse-logo.png')} />
      <Text style={episodeStyle.title}>История человечества</Text>
      <Text style={episodeStyle.steps}>Этапы курса</Text>
      <FlatList data={news} renderItem={({item}) => (
        <TouchableOpacity style={episodeStyle.item} onPress={() => navigation.navigate('ContainerWebView', item)}>
          <Image style={episodeStyle.item_image} source={require('../img/video-lesson.png')} />
          <Text style={episodeStyle.name}>{ item.name }</Text>
        </TouchableOpacity>
      )} />
      {/* <View>
        {
          news.map(item => {
            return (
            <TouchableOpacity style={episodeStyle.item} onPress={() => navigation.navigate('ContainerWebView', item)} key={item.key} >
              <Image style={episodeStyle.item_image} source={require('../img/video-lesson.png')} />
              <Text style={episodeStyle.name}>{ item.name }</Text>
            </TouchableOpacity>
            )
          })
        }
      </View> */}
    </View>
  );
}

