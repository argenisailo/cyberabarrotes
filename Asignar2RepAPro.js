import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class Asignar2RepAPro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const btnRegresar = () => {
        this.props.navigation.navigate('PedidosAdmin');
    };

    const Asignar = () => {
        var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                  console.log(xhttp.responseText);
                  if (xhttp.responseText == '1') {
                      alert('Se asignó un repartidor al pedido');
                      btnRegresar();
                  } else {
                      alert('ERROR: no se pudo asignar el repartidor al pedido');
                      btnRegresar();
                  }
              }
          };
          xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/asignarRepartidorPro.php?id=' + this.props.route.params.id_ped + '&repartidor=' + this.props.route.params.nombre, true);
          xhttp.send();
      }

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.title}> CyberAbarrotes </Text>
            <Image style={styles.logo} source={require('./Images/logo.png')}></Image>
        </View>
        <View style={styles.container2}>
            <Text style={styles.title2}> INFORMACIÓN DEL REPARTIDOR </Text>
        </View>
        <Text style={styles.text}> A continuación se muestran los detalles del producto seleccionado </Text>
        <Text style={styles.menu}> Repartidor con ID {this.props.route.params.id} </Text>
        <Text style={styles.info}> Nombre: {this.props.route.params.nombre} </Text>
        <Image style={styles.info_img} source={{uri: this.props.route.params.imagen}}/>
        <Pressable style={styles.button} onPress={Asignar}>
            <Text style={styles.txtBtn}>ASIGNAR</Text>
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
        marginBottom: 50,
        textAlign: 'center',
    },
    button: {
        height: 60,
        marginTop: 20,
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
    info_img: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginBottom: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});