import { StyleSheet } from 'react-native';

const LandingScreenStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: '100%',
        height: '100%',
        marginTop:28,
       
        
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '100%',
        marginTop: 200,
        marginLeft: 20,
    },
    text: {
        fontSize: 50,
        color: 'white',
        textAlign: 'left',
        lineHeight: 80,
        marginTop: 100,
    },
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0091d1',
        borderRadius: 20,
        width: '50%',
        height: '7%',
        marginRight: 100,
        marginBottom: 100,
        borderWidth: 2, // Ancho del borde blanco
        borderColor: 'white', // Color del borde blanco
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default LandingScreenStyles;