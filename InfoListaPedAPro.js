import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class InfoListaPedAPro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const btnRegresar = () => {
        this.props.navigation.navigate('ListaPedAdmin');
    };

    const regresarMenu = () => {
        this.props.navigation.navigate('PedidosAdmin');
    }

    const Enviar = () => {
        if(this.props.route.params.estado == 'Enviado') {
            alert("El pedido ya fue enviado");
        } else if(this.props.route.params.estado == 'Recibido') {
            alert("El pedido ya fue recibido");
        } else {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    if (xhttp.responseText == '1') {
                        alert('El pedido inicio su recorrido de envío');
                        regresarMenu();
                    } else {
                        alert('ERROR: no se pudo enviar el pedido');
                        btnRegresar();
                    }
                }
            };
            xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/enviarPedidoPro.php?id=' + this.props.route.params.id, true);
            xhttp.send();
        }
    }

    const asignarRep = () => {
        if(this.props.route.params.nom_repartidor != 'Por asignar') {
            alert("Ya fue asignado un repartidor al pedido");
        } else {
            this.props.navigation.navigate('AsignarRepAdmin', {id_ped: this.props.route.params.id});
        }
    }

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.title}> CyberAbarrotes </Text>
            <Image style={styles.logo} source={require('./Images/logo.png')}></Image>
        </View>
        <View style={styles.container2}>
            <Text style={styles.title2}> INFORMACIÓN DEL PEDIDO </Text>
        </View>
        <Text style={styles.text}> A continuación se muestran los detalles del pedido seleccionado </Text>
        <Text style={styles.menu}> Pedido #{this.props.route.params.id} </Text>
        <Text style={styles.info}> ID del usuario: {this.props.route.params.id_usuario} </Text>
        <Text style={styles.info}> Número de productos: {this.props.route.params.num_productos} </Text>
        <Text style={styles.info}> Total: ${this.props.route.params.total} </Text>
        <Text style={styles.info}> Estado: {this.props.route.params.estado} </Text>
        <Text style={styles.info}> Repartidor: {this.props.route.params.nom_repartidor} </Text>
        <Text style={styles.info}> Domicilio: {this.props.route.params.domicilio} </Text>
        <Pressable style={styles.buttonR} onPress={Enviar}>
            <Text style={styles.txtBtn}>ENVIAR PEDIDO</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={asignarRep}>
            <Text style={styles.txtBtn}>ASIGNAR REPARTIDOR</Text>
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
    buttonR: {
        height: 60,
        marginTop: 50,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    button: {
        height: 60,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
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
        marginTop: 10,
        marginBottom: 10,
    },
    info: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
});