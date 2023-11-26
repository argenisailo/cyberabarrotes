import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class AltaProductosAPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //Variables
        name: '',
        price: '',
        url: '',
    };
  }

  render() {
    const btnAlta = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (xhttp.responseText == '1') {
                    alert('Los datos del producto se dieron de alta');
                    btnRegresar();
                } 
                else {
                    alert('ERROR: los datos no se dieron de alta');
                }
            }
        };
        xhttp.open('GET', 'http://appudeg.xp3.biz@appudeg.xp3.biz/Proyecto/altaProductosPro.php?nombre=' + this.state.name + '&precio=' + this.state.price + '&imagen=' + this.state.url, true);
        xhttp.send();
    };

    const btnRegresar = () => {
        this.props.navigation.navigate('ProductosAdmin');
    };

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.title}> CyberAbarrotes </Text>
            <Image style={styles.logo} source={require('./Images/logo.png')}></Image>
        </View>
        <View style={styles.container2}>
            <Text style={styles.title2}> ALTA DE PRODUCTOS </Text>
        </View>
        <Text style={styles.text}> Llena los siguientes campos para dar de alta un producto </Text>
        <TextInput
            style={styles.input}
            placeholder="Introduce el nombre del producto"
            placeholderTextColor="#8B8B8B"
            onChangeText={name => this.setState({name})}></TextInput>
        <TextInput
            style={styles.input}
            placeholder="Introduce el precio del producto"
            placeholderTextColor="#8B8B8B"
            keyboardType='numeric'
            onChangeText={price => this.setState({price})}></TextInput>
        <TextInput
            style={styles.input}
            placeholder="Introduce el URL de la imagen"
            placeholderTextColor="#8B8B8B"
            onChangeText={url => this.setState({url})}></TextInput>
        <Pressable style={styles.button} onPress={btnAlta}>
            <Text style={styles.txtBtn}>DAR DE ALTA</Text>
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
        marginTop: 20,
        marginBottom: 30,
        height: 50,
        backgroundColor: '#C5C5C5',
    },
    title2: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    text: {
        fontSize: 26,
        color: 'black',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
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
        marginBottom: 150,
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