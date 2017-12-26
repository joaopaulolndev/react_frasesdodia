import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    
    return (
      
      <View style={estilos.principal}>

        <Image source={require('./imgs/logo.png')} />
        
        <TouchableOpacity 
          onPress={gerarNovaFrase}
          style={estilos.botao} >
          <Text style={estilos.textoBotao}>Nova Frase</Text>
        </TouchableOpacity>  
      
      </View>
    );
  }
}

const gerarNovaFrase = () => {
  
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = 'Comece sua manhã pensando em todas as coisas boas à sua volta. Seu dia já vai ficar melhor!';
  frases[1] = 'Lembre-se de dizer obrigado a Deus por cada coisa boa que você se lembra.';
  frases[2] = 'Se você está preocupado ou desanimado com alguma coisa, conte para Deus! Ele vai lhe ajudar.';
  frases[3] = 'Gastar alguns minutos organizando suas prioridades para o dia é um investimento.';
  frases[4] = 'Fazer um bom trabalho é uma forma de louvar a Deus. Decida fazer seu melhor hoje, para dar glória a Deus.';

  var fraseEscolhida = frases[ numeroAleatorio ];

  Alert.alert(fraseEscolhida);
}

//Formatações
const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
