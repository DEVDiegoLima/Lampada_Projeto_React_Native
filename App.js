import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [imagem, setImagem] = useState('https://i.stack.imgur.com/b983w.jpg');
  const [mensagem, setMensagem] = useState('Eita você quebrou a lâmpada');
  const [textoBotao, setTextoBotao] = useState('Acender');
  const [alternarImagem, setAlternarImagem] = useState(true);

  function trocarImagem() {
    if (alternarImagem) {
      if (imagem === 'https://i.stack.imgur.com/b983w.jpg') {
        setImagem('https://i.stack.imgur.com/ybxlO.jpg');
        setTextoBotao('Apagar');
      } else {
        setImagem('https://i.stack.imgur.com/b983w.jpg');
        setTextoBotao('Acender');
      }
    }
  }

  const onImagePress = () => {
    trocarImagem();
  };

  function longPress() {
    if (alternarImagem) {
      setImagem('https://i.stack.imgur.com/MRjsF.jpg');
      setMensagem(true);
      setAlternarImagem(false);
    }
  }

  function resetarImagem() {
    setImagem('https://i.stack.imgur.com/b983w.jpg');
    setTextoBotao('Acender');
    setAlternarImagem(true);
    setMensagem(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onImagePress} onLongPress={longPress}>
        <Image source={{uri: imagem}} style={styles.imagem} />
      </TouchableOpacity>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.botao}
          onPress={trocarImagem}
          onLongPress={longPress}>
          <Text style={styles.botaoTexto}>{textoBotao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={resetarImagem}>
          <Text style={styles.botaoTexto}>Resetar</Text>
        </TouchableOpacity>
      </View>
      {mensagem && (
        <Text style={styles.texto}>OPS... Você quebrou a lâmpada</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  texto: {
    fontSize: 25,
    marginTop: 5,
    color: 'red',
  },
  botao: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 18,
    marginRight: 10,
    marginLeft: 10,
    padding: 15,
    borderRadius: 10,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
  },
  containerButton: {
    flexDirection: 'row',
  },
});

export default App;
