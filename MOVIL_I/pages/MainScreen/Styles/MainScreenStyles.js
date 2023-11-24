import { StyleSheet } from "react-native";

const MainScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topContainer: {
    width: '100%',
    height: '17%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  positionCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationTitle: {
    width: '90%',
    marginTop: 30,
    fontSize: 20,
    color: 'white', // Color del texto en blanco
    borderColor: 'white', // Color del borde en blanco
    borderWidth: 1, // Ancho del borde
    backgroundColor: 'black', // Color de fondo en negro
    padding: 15, // Añade relleno para separar el texto del borde
    borderRadius: 20, // Agrega un borde redondeado con un radio de 10 unidades
    textAlign: 'center',
    borderColor: 'rgba(0, 145, 209, 0.4)',   // Agregar un borde de color negro
    borderWidth: 4,
    fontWeight:'bold',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingRight: 15,
  },
  middlePart: {
    flex: 0,
    //backgroundColor: 'black',
    height: '69%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingLeft: 35,
    alignContent: 'center',
  },
  column: {
    flex: 1,
    marginRight: 8,
    paddingBottom: 15,
    paddingTop:30,
    //backgroundColor: 'red',
  },
});
export default MainScreenStyles