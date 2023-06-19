import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      flex:1,
    },
    timer: {
      fontSize: 24,
      fontWeight: "bold",
    },
    areaButtom:{
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      paddingHorizontal: 80,
      backgroundColor:'white',
      marginTop:20
    },
    areaText:{
      width:'100%',
      height:'40%',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    buttom:{
      width:100,
      height:40,
      alignItems:'center',
      justifyContent:'center'
    }, 
  });

  export default styles;