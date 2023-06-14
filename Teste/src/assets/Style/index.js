/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        height: 50,
        width: '40%',
        margin: 5,
        marginStart: 25,
        padding: 5,
        backgroundColor: 'rgba(0, 200, 255, 0.2)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
      icon:{
        height:30,
        width:30,
        marginStart: 10,
      },
      text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      textAgent:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 4,
        textShadowColor: 'white',
        textShadowRadius: 10,
        marginStart:10,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      contentContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Define um fundo semi-transparente para o conteúdo
      },
      textDescription:{
        fontSize:16,
        color: 'white',
        margin:5,
      }
});