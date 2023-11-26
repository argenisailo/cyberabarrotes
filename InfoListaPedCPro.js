import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Platform } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import MapView, { Marker, AnimatedRegion, MarkerAnimated } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

Geocoder.init("AIzaSyA91n4mZhVNX3XNqXhSEQm38yQ-VQayMqA");

export default class InfoListaPedCPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //Variables
        distancia: 0,
        duracion: 0,
        destino: {
            latitude: 0,
            longitude: 0,
        },
        origen: {
            latitude: 20.655188114115532,
            longitude: -103.3255185789238,
        },
    };
  }

  render() {
    Geocoder.from(this.props.route.params.domicilio).then(json => {
		    let location = json.results[0].geometry.location;
            this.setState({
                destino: {
                    latitude: location.lat,
                    longitude: location.lng,
                }
            })
        })
	    .catch(error => console.warn(error));

    const btnRegresar = () => {
        this.props.navigation.navigate('PedidosCliente', {id_us: this.props.route.params.id_us, domicilio_us: this.props.route.params.domicilio_us});
    };

    const regresarMenu = () => {
        this.props.navigation.navigate('PrincipalCliente', {id_us: this.props.route.params.id_us, domicilio_us: this.props.route.params.domicilio_us});
    }

    const Confirmar = () => {
        if(this.props.route.params.estado == 'Recibido') {
            alert('El pedido ya fue recibido');
        }
        else {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    if (xhttp.responseText == '1') {
                        alert('Se confirmó que el pedido fue recibido');
                        regresarMenu();
                    } else {
                        alert('ERROR: no se pudo confirmar la recepción del pedido');
                        btnRegresar();
                    }
                }
            };
            xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/pedidoRecibidoPro.php?id=' + this.props.route.params.id, true);
            xhttp.send();
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
        <Text style={styles.info}> Número de productos: {this.props.route.params.num_productos} </Text>
        <Text style={styles.info}> Total: ${this.props.route.params.total} </Text>
        <Text style={styles.info}> Estado: {this.props.route.params.estado} </Text>
        <Text style={styles.info}> Repartidor: {this.props.route.params.nom_repartidor} </Text>
        <Text style={styles.info}> Domicilio: {this.props.route.params.domicilio} </Text>
        <View style={styles.containerMap}>
            <MapView style={styles.map}
                ref={map => {this.map = map}}
                region={{
                    ...this.state.destino,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.20
                }}
                onMapReady={() => {this.map.fitToSuppliedMarkers(['mk1','mk2'],{ edgePadding: 
                    {top: 50,
                      right: 50,
                      bottom: 50,
                      left: 50}})}} 
            >
                <Marker
                    coordinate={this.state.origen}
                    identifier={'mk1'}
                    title={'Punto de partida'}
                >
                    <Image source={require('./Images/car2.png')} style={{height: 30, width:30}}/>
                </Marker>
                <Marker
                    coordinate={this.state.destino}
                    identifier={'mk2'}
                    title={'Punto de destino'}
                />
                <MapViewDirections
                    origin={this.state.origen}
                    destination={this.state.destino}
                    apikey={'AIzaSyA91n4mZhVNX3XNqXhSEQm38yQ-VQayMqA'}
                    strokeWidth={5}
                    onReady={result => {
                        this.setState({distancia: result.distance})
                        this.setState({duracion: result.duration})
                    }}
                />
            </MapView>
        </View>
        <View style={styles.row}>
            <Text style={styles.info2}> La distancia es de: {this.state.distancia} km </Text>
            <Text style={styles.info2}> El recorrido es de: {this.state.duracion} min </Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text2}> ¿Recibiste tu pedido? </Text>
            <Pressable style={styles.btnRecibido} onPress={Confirmar}>
                <Text style={styles.txtBtn2}>CONFIRMAR</Text>
            </Pressable>
        </View>
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
        marginBottom: 20,
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
        //marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        height: 60,
        //marginTop: 10,
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
    menu: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        //marginTop: 10,
        marginBottom: 10,
    },
    info: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    containerMap: {
        //flex: 1
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 250,
        width : 330,
        //backgroundColor: '#C5C5C5',
    },
    map: {
        flex: 1
    },
    info2: {
        fontSize: 10,
        color: 'black',
        textAlign: 'center',
        marginBottom: 5,
        marginLeft: 45,
        //marginRight: 10,
    },
    row: {
        //marginTop: 5,
        flexDirection:'row',
        marginBottom: 10
    },
    text2: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        flexDirection:'row',
        marginTop: 10,
        //marginBottom: 20,
        marginLeft: 40,
    },
    txtBtn2: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    btnRecibido: {
        height: 30,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    }
});