/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
    },
    text:{
        fontSize:20,
        color:'black',
        marginStart:'15%',
        marginTop:15,
    },
    textArea:{
        height:50,
        width:'80%',
        backgroundColor:'rgba(255,255,255,0.8)',
        marginStart:'10%',
        borderRadius:10,
    },
    buttom:{
        marginTop:20,
        marginStart:'35%',
        width:'30%',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    buttomLog:{
        marginTop:20,
        marginStart:'35%',
        width:'30%',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green',
        borderRadius:20
    },
    containerHome:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

export default styles;