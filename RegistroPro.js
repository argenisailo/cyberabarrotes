import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class RegistroPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //Variables
        user: '',
        pass: '',
        name: '',
        address: '',
        tel: '',
    };
  }

  render() {
    const btnRegister = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (xhttp.responseText == '1') {
                    alert('Los datos del usuario se dieron de alta');
                    btnRegresar();
                } 
                else {
                    alert('ERROR: los datos no se dieron de alta. Asegúrate de haber llenado todos los espacios');
                }
            }
        };
        xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/regUsuariosPro.php?usuario=' + this.state.user + '&contraseña=' + this.state.pass + '&nombre=' + this.state.name + '&domicilio=' + this.state.address + '&telefono=' + this.state.tel, true);
        xhttp.send();
    };

    const btnRegresar = () => {
        this.props.navigation.navigate('Login');
    };

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.title}> CyberAbarrotes </Text>
            <Image style={styles.logo} source={require('./Images/logo.png')}></Image>
        </View>
        <View style={styles.container2}>
            <Text style={styles.title2}> Crea una nueva cuenta </Text>
        </View>
        <Text style={styles.text}> Llena los siguientes campos para poder darte de alta </Text>
        <TextInput
            style={styles.input}
            placeholder="Introduce un nombre de usuario"
            placeholderTextColor="#8B8B8B"
            onChangeText={user => this.setState({user})}></TextInput>
        <TextInput
            style={styles.input}
            placeholder="Introduce tu contraseña"
            placeholderTextColor="#8B8B8B"
            secureTextEntry={true}
            onChangeText={pass => this.setState({pass})}></TextInput>
        <TextInput
            style={styles.input}
            placeholder="Introduce tu nombre completo"
            placeholderTextColor="#8B8B8B"
            onChangeText={name => this.setState({name})}></TextInput>
        <TextInput
            style={styles.input}
            placeholder="Introduce tu domicilio"
            placeholderTextColor="#8B8B8B"
            onChangeText={address => this.setState({address})}></TextInput>
        <TextInput
            style={styles.input}
            placeholder="Introduce un tu número telefónico"
            placeholderTextColor="#8B8B8B"
            keyboardType='numeric'
            onChangeText={tel => this.setState({tel})}></TextInput>
        <Pressable style={styles.button} onPress={btnRegister}>
            <Text style={styles.txtBtn}>REGÍSTRATE</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={btnRegresar}>
            <Text style={styles.txtBtn}>REGRESAR</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontSize: 40,
        color: 'black',
        marginTop: 10,
        marginLeft: 35,
    },
    logo: {
        resizeMode: 'center',
        width: 80,
        height: 80,
        marginTop: 10,
        marginRight: 40,
        marginBottom: 10,
    },
    container2: {
        marginTop: 40,
        height: 80,
        backgroundColor: '#474747',
    },
    title2: {
        fontWeight: 'bold',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        fontSize: 26,
        color: 'black',
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#D9D9D9',
        padding: 10,
        fontSize: 20,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        color: "#000000",
    },
    button: {
        height: 60,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    txtBtn: {
        fontSize: 30,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});