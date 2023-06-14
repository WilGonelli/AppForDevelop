import { Component } from 'react';
import {  Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './src/assets/Styles';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: '',
      operacao1: '',

    };
    this.addNumero = this.addNumero.bind(this);
    this.op = this.op.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  limpar(){
    this.setState({
      operacao1: '',
      numero1: '',
      numero2: '',
      resultado: ''
    })
  }
  op(operacao){
    var aux = false
    if(this.state.operacao1 != '' && operacao != '=' && this.state.numero2 != ''){
      aux = true
    }
    if(operacao === '=' || this.state.numero2 != '' ){

      if(this.state.operacao1 === '+'){
        this.setState({
          resultado: Number(this.state.numero1.replace(",",".")) + Number(this.state.numero2.replace(",","."))
        })
      }else if(this.state.operacao1 === '-'){
        this.setState({
          resultado: Number(this.state.numero1.replace(",",".")) - Number(this.state.numero2.replace(",","."))
        })
      }else if(this.state.operacao1 === '*'){
        this.setState({
          resultado: Number(this.state.numero1.replace(",",".")) * Number(this.state.numero2.replace(",","."))
        })
      }else if(this.state.operacao1 === '/'){
        this.setState({
          resultado: Number(this.state.numero1.replace(",",".")) / Number(this.state.numero2.replace(",","."))
        })
      }else{
        this.setState({
          resultado: 'ERROR'
        })
      }
        this.setState({
          operacao1: '',
          numero1: '',
          numero2: '',
        })
    }else{
      this.setState({
        operacao1: operacao,  
      })
      if(this.state.numero1 === '' && this.state.resultado != 0 ){
        this.setState({
        numero1: this.state.resultado.toString(),
        resultado: ''
      })
      }
    }
    if (aux){
      if(this.state.operacao1 === '+'){
        this.setState({
          numero1: (Number(this.state.numero1.replace(",",".")) + Number(this.state.numero2.replace(",","."))).toString()
        })
      }else if(this.state.operacao1 === '-'){
        this.setState({
          numero1: (Number(this.state.numero1.replace(",",".")) - Number(this.state.numero2.replace(",","."))).toString()
        })
      }else if(this.state.operacao1 === '*'){
        this.setState({ 
          numero1: (Number(this.state.numero1.replace(",",".")) * Number(this.state.numero2.replace(",","."))).toString()
        })
      }else if(this.state.operacao1 === '/'){
        this.setState({
          numero1: (Number(this.state.numero1.replace(",",".")) / Number(this.state.numero2.replace(",","."))).toString()
        })
      }else{
        this.setState({
          numero1: 'ERROR'
        })
      }
      this.setState({
        resultado: '',
        numero2: '',
        operacao1: operacao, 
      })
    }
  }
  addNumero(valor){
    this.setState({
      resultado: ''
    })
    if( valor === ','){
      if(this.state.numero1 === '0' || this.state.numero2 === '0'){
        valor = '0,'
      }
    }
    if (this.state.operacao1 != ''){
      if(this.state.numero2 === '' || this.state.numero2 === '0'){
        this.setState({
          numero2: valor,
        })
      }else{
        this.setState({
          numero2: this.state.numero2 + valor,
        })
      }
    }else{
      if(this.state.numero1 === '' || this.state.numero1 === '0'){
        this.setState({
          numero1: valor,
        })
      }else{
        this.setState({
          numero1: this.state.numero1 + valor,
        })
      }
    } 
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{this.state.numero1.toString().replace(".",",")} {this.state.operacao1} {this.state.numero2.toString().replace(".",",")}</Text>
          <Text style={styles.displayText}>{this.state.resultado.toString().replace(".",",")}</Text>
        </View>
        <View style={styles.keyboard}>
          <View style={styles.numberContainer}>
            <TouchableOpacity style={styles.resetButtom} onPress={ () => this.limpar()}> 
              <Text style={styles.operationText}>CE</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.numberContainer}>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('1')}> 
              <Text style={styles.text}>1</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('2')}> 
              <Text style={styles.text }>2</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('3')}> 
              <Text style={styles.text }>3</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationButton} onPress={ () => this.op('/')}> 
              <Text style={styles.operationText }>/</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.numberContainer}>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('4')}> 
              <Text style={styles.text}>4</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('5')}> 
              <Text style={styles.text }>5</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('6')}> 
              <Text style={styles.text}>6</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationButton} onPress={ () => this.op('*')}> 
              <Text style={styles.operationText }>*</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.numberContainer}>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('7')}> 
              <Text style={styles.text}>7</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('8')}> 
              <Text style={styles.text }>8</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('9')}> 
              <Text style={styles.text }>9</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationButton} onPress={ () => this.op('-')}> 
              <Text style={styles.operationText }>-</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.numberContainer}>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero(',')}> 
              <Text style={styles.text}>,</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButtom} onPress={ () => this.addNumero('0')}> 
              <Text style={styles.text }>0</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationButton} onPress={ () => this.op('=')}> 
              <Text style={styles.operationText }>=</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationButton} onPress={ () => this.op('+')}> 
              <Text style={styles.operationText }>+</Text> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default App;