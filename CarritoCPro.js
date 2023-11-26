import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class CarritoCPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //Variables
        serverData: '',
    };
  }

  componentDidMount() {
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
        var data = JSON.parse(xhttp.responseText);
        _this.setState({serverData: data});
      }
    };
    xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/listaCarritoPro.php?id_us=' + this.props.route.params.id_us, true);
    xhttp.send();
  }

  render() {
    const btnRegresar = () => {
        this.props.navigation.navigate('PrincipalCliente', {id_us: this.props.route.params.id_us, domicilio_us: this.props.route.params.domicilio_us});
    };

    const Eliminar = () => {
        if(this.state.serverData == '') {
            alert('No hay productos en el carrito');
        }
        else {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    if (xhttp.responseText == '1') {
                        alert('Los productos fueron eliminados del carrito con éxito');
                        btnRegresar();
                    } else {
                        alert('ERROR: no se eliminaron los productos del carrito');
                        btnRegresar();
                    }
                }
                };
            xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/eliminarCarritoPro.php?id_us=' + this.props.route.params.id_us, true);
            xhttp.send();
        }
    }

    const Comprar = () => {
        if(this.state.serverData == '') {
            alert('No hay productos en el carrito');
        }
        else {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    if (xhttp.responseText == '1') {
                        alert('El pedido se realizó con éxito');
                        eliminarDesp();
                        btnRegresar();
                    } else {
                        alert('ERROR: el pedido no se pudo realizar');
                        eliminarDesp();
                        btnRegresar();
                    }
                }
            };
            xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/comprarCarritoPro.php?id_us=' + this.props.route.params.id_us + '&domicilio=' + this.props.route.params.domicilio_us, true);
            xhttp.send();
        }
    }

    const eliminarDesp = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(xhttp.responseText);
                if (xhttp.responseText == '1') {
                    console.log('Se eliminó')
                } else {
                    console.log('No se eliminó')
                }
              }
            };
        xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/eliminarCarritoPro.php?id_us=' + this.props.route.params.id_us, true);
        xhttp.send();
    }

    const Info = ({item}) => {
        return (
          <View style={styles.box}>
            <TouchableOpacity>
              <Text style={styles.box_content}>Nombre: {item.nombre_prod}</Text>
              <Text style={styles.box_content}>Precio: ${item.precio_prod}</Text>
            </TouchableOpacity>
          </View>
        )
    }

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Text style={styles.title}> CyberAbarrotes </Text>
            <Image style={styles.logo} source={require('./Images/logo.png')}></Image>
        </View>
        <View style={styles.container2}>
            <Text style={styles.title2}> TU CARRITO </Text>
        </View>
        <Text style={styles.text}> ¡Aquí se muestran los productos que añadiste a tu carrito! </Text>
        <FlatList
            data={this.state.serverData}
            renderItem={Info}
            keyExtractor={(item, index) => index.toString()}
        />
        <Pressable style={styles.button} onPress={Comprar}>
            <Text style={styles.txtBtn}>COMPRAR CARRITO</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={Eliminar}>
            <Text style={styles.txtBtn}>ELIMINAR PRODUCTOS</Text>
        </Pressable>
        <Pressable style={styles.button1} onPress={btnRegresar}>
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
        marginBottom: 30,
        textAlign: 'center',
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
    button1: {
        height: 60,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 50,
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
    box: {
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderWidth: 5,
        borderColor: '#000000',
        backgroundColor: '#000000',
    },
    box_content: {
        color: '#FFFFFF',
    }
});