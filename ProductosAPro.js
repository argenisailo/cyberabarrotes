import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class ProductosAPro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const btnRegresar= () => {
        this.props.navigation.navigate('PrincipalAdmin');
    };

    const btnAlta = () => {
        this.props.navigation.navigate('AltaProdAdmin');
    };

    const btnBaja = () => {
        this.props.navigation.navigate('BajaProdAdmin');
    }

    const btnCambio = () => {
        this.props.navigation.navigate('CambioProdAdmin');
    }

    const btnLista = () => {
        this.props.navigation.navigate('ListaProdAdmin');
    }

    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={styles.title}> CyberAbarrotes </Text>
                <Image style={styles.logo} source={require('./Images/logo.png')}></Image>
            </View>
        </View>
        <Text style={styles.text}> ¡Menú de Productos! </Text>
        <View style={styles.container2}>
            <Text style={styles.title2}> Acciones </Text>
        </View>
        <Pressable style={styles.button} onPress={btnAlta}>
            <Text style={styles.txtBtn}>ALTA DE PRODUCTOS</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={btnBaja}>
            <Text style={styles.txtBtn}>BAJA DE PRODUCTOS</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={btnCambio}>
            <Text style={styles.txtBtn}>CAMBIO DE INFORMACIÓN</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={btnLista}>
            <Text style={styles.txtBtn}>LISTA DE PRODUCTOS</Text>
        </Pressable>
        <Pressable style={styles.btnExit} onPress={btnRegresar}>
            <Text style={styles.txtBtnExit}>REGRESAR</Text>
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
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        height: 60,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 10,
        backgroundColor: '#474747',
    },
    txtBtn: {
        fontSize: 30,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    btnExit: {
        height: 60,
        marginTop: 80,
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