import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    btArea:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        height: 50,
        width: '100%',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    btOptions:{
        backgroundColor:'cornflowerblue',
        height:40,
        width:140,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    textBt:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    },
    keyboard:{
        flexDirection:'row',
        height:50,
        width:'100%',
        justifyContent:'center', 
        alignItems:'center'
    },
    keyboardBt:{
        height:40,
        width:30,
        backgroundColor:'darkcyan',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        margin:6
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
      },
})
export default styles;