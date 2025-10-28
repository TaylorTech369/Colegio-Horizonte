
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.tituloLogin}>Login</Text>
      <hr style={styles.hrs}></hr>
      
      <View>

      <View style={styles.inputs}>

      <Text style={styles.texto}>Nome ou CPF</Text>
      <TextInput style={styles.input1} placeholder='Digite seu nome completo'></TextInput>

      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input1 } placeholder='Digite sua senha'></TextInput>
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
    // height: 500
  },

  botao1: {
    backgroundColor: "gray",
  },

  tituloLogin: {
    marginTop: 250,
    fontSize: 55,
  },

  hrs: {
    width: 100,
  },

  input1: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10, 
    width: 350,
    margin: 5,
  },

  inputs: {
    padding: 10,
    borderColor: "black",
  },
  texto: {
    
  }
});
