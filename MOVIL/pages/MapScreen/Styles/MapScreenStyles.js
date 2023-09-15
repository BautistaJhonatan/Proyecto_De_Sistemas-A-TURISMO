import { StyleSheet } from 'react-native';

const MapScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    topContainer: {
      position: 'relative',
      zIndex: 1,
      flexDirection: 'row',
      width: '100%', 
      height: '10%', 
      alignSelf: 'flex-start', 
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 15, 
      marginTop: 5,
      
    },
    backIcon: {
      width: '10%',
      height: '50%',
      backgroundColor: 'rgba(0, 145, 209, 1)',
      flexDirection: 'row',
      marginLeft: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
    },
    qIcon: {
      width: '10%',
      height: '50%',
      backgroundColor: 'rgba(0, 145, 209, 1)',
      flexDirection: 'row',
      marginRight: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
      right: 0,
    },
    map: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      marginTop: 70,
    },
    cobntainer2: { 
      backgroundColor: 'black',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    cobntainer3: { 
      backgroundColor: 'black',
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '10%',
      justifyContent: 'center',
      borderBottomRightRadius: 40,
      borderBottomLeftRadius: 40,
    },
    searchBarContainer: {
      marginTop: 10,
      width: '100%',
      backgroundColor: 'black',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      paddingHorizontal: 16,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    searchBarContainer2: {
      marginTop: 15,
      width: '100%',
      backgroundColor: 'black',
      paddingHorizontal: 16,
      
    },
    searchBarInputContainer: {
      backgroundColor: 'rgba(0, 145, 209, 0.4)',
      borderRadius: 50,
    },
    searchBarInputContainer2: {
      backgroundColor: '#0000',
      borderRadius: 50,
    },
    searchBarInput: {
      color: '#ABABAB',
    },
    carrouselContainer: {
      position: 'absolute',
      bottom: 0,
      marginBottom: 60,
      width: '100%',
      height: '25%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    locationTitle: {
      fontSize: 16,
      color: '#FFFFFF',
      marginLeft: 16, // Ajusta el espaciado según sea necesario
      marginTop: 10, // Ajusta el espaciado según sea necesario
    },
  });

export default MapScreenStyles;