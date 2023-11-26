import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class Cambio2ProdAPro extends Component {
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
    const btnRegresar = () => {
        this.props.navigation.navigate('ProductosAdmin');
    };

    const btnModificar = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            if (xhttp.responseText == '1') {
              alert('Se actualizó la información del producto de manera correcta');
              btnRegresar();
            } else {
              alert('ERROR: no se actualizó la información del producto');
              btnRegresar();
            }
          }
        };
        xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/cambioProductosPro.php?id=' + this.props.route.params.id + '&nombre=' + this.state.name + '&precio=' + this.state.price + '&imagen=' + this.state.url, true);
        xhttp.send();
      };

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.title}> CyberAbarrotes </Text>
            <Image style={styles.logo} source={require('./Images/logo.png')}></Image>
        </View>
        <View style={styles.container2}>
            <Text style={styles.title2}> CAMBIO DE INFORMACIÓN </Text>
        </View>
        <Text style={styles.text}> Introduce la información que deseas modificar del producto </Text>
        <Text style={styles.menu}> Información del producto con ID {this.props.route.params.id} </Text>
        <Text style={styles.info}> Nombre: {this.props.route.params.nombre} </Text>
        <Text style={styles.info}> Precio: ${this.props.route.params.precio} </Text>
        <Text style={styles.info}> URL de la imagen: {this.props.route.params.imagen} </Text>
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
        <Pressable style={styles.button} onPress={btnModificar}>
            <Text style={styles.txtBtn}>MODIFICAR</Text>
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
        //marginBottom: 10,
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
    menu: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    info: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});