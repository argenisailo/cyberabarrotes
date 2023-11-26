import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class PrincipalCPro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const btnRegresar = () => {
        this.props.navigation.navigate('Login');
    };

    const btnProductos = () => {
        this.props.navigation.navigate('ProductosCliente', {id_us: this.props.route.params.id_us, domicilio_us: this.props.route.params.domicilio_us});
    }

    const btnPedidos = () => {
        this.props.navigation.navigate('PedidosCliente', {id_us: this.props.route.params.id_us, domicilio_us: this.props.route.params.domicilio_us});
    }
    const btnCarrito = () => {
        this.props.navigation.navigate('CarritoCliente', {id_us: this.props.route.params.id_us, domicilio_us: this.props.route.params.domicilio_us});
    }

    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={styles.title}> CyberAbarrotes </Text>
                <Image style={styles.logo} source={require('./Images/logo.png')}></Image>
            </View>
        </View>
        <Text style={styles.text}> ¡Bienvenido a Nuestra Tienda! </Text>
        <View style={styles.container2}>
            <Text style={styles.title2}> Productos </Text>
        </View>
        <Pressable style={styles.button} onPress={btnProductos}>
            <Text style={styles.txtBtn}>IR A ESTA SECCIÓN</Text>
        </Pressable>
        <View style={styles.container2}>
            <Text style={styles.title2}> Pedidos </Text>
        </View>
        <Pressable style={styles.button} onPress={btnPedidos}>
            <Text style={styles.txtBtn}>IR A ESTA SECCIÓN</Text>
        </Pressable>
        <View style={styles.container2}>
            <Text style={styles.title2}> Carrito de compras </Text>
        </View>
        <Pressable style={styles.button} onPress={btnCarrito}>
            <Text style={styles.txtBtn}>IR A ESTA SECCIÓN</Text>
        </Pressable>
        <Pressable style={styles.btnExit} onPress={btnRegresar}>
            <Text style={styles.txtBtnExit}>SALIR</Text>
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
    containerTop: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontSize: 40,
        color: 'black',
        marginTop: 10,
        marginLeft: 15,
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
        height: 50,
        backgroundColor: '#474747',
    },
    title2: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5,
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
    button: {
        height: 60,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 10,
        backgroundColor: 'white',
    },
    txtBtn: {
        fontSize: 30,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    btnExit: {
        height: 60,
        marginTop: 30,
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
    txtBtnExit: {
        fontSize: 30,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});