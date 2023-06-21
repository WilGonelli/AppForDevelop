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
        backgroundColor:'aquamarine'
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
})
export default styles;