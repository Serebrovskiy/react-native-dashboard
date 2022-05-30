import { StyleSheet } from 'react-native';


export const episodeStyle = StyleSheet.create({
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      width: 120,
      height: 25,
      padding: 20,
      margin: 20,
      marginBottom: 30,
      resizeMode: "contain",

    },
    title: {
      fontFamily: 'EuclidCircularA-Bold',
      fontSize: 31,
      fontWeight: '600',
      lineHeight: 28,
      textAlign: 'center',
      paddingBottom: 30
    },
    steps: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 22,
      textAlign: 'left',
      marginLeft: 20,
      marginBottom: 10,
      alignSelf: 'flex-start'
    },
    item: {
      margin: 20,
      marginBottom: 0,
      padding: 15,
      backgroundColor: '#F9F6F8',
      borderRadius: 20 
    },
    item_image: {
      maxWidth: '100%',
      height: 78,
      resizeMode: "contain",
    },
    heafer: {
      marginBottom: 0
    },
    name: {
      fontFamily: 'GrtskPeta-Medium',
      fontSize: 14,
      fontWeight: '600',
      lineHeight: 18,
      textAlign: 'left',
      marginTop: 8,
    },
})