import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems:'center'  
    },
    display:{
      marginBottom: 20,
      paddingEnd: 10,
      backgroundColor: 'silver',
      marginTop: 50,
      alignItems: 'flex-end',
      width: '90%',
      height: 150,
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 5,
    },
    numberContainer:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center' 
    },
    numberButtom:{
      flex: 1, 
      backgroundColor: 'dimgray',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      borderColor: 'black',
      borderWidth: 3,
    },
    resetButtom:{
      flex: 1,
      backgroundColor: 'dimgray',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      borderColor: 'black',
      borderWidth: 3,
    },
    text:{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'lightgreen',
    },
    keyboard:{
      flex: 3,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',   
    },
    operationButton:{
      flex: 1,
      backgroundColor: 'tomato',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      borderColor: 'black',
      borderWidth: 3,
    },
    operationText:{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
    },
    displayText:{
      fontSize: 35,
      fontWeight: 'bold',
      color: 'black',
    },
});

export default styles;