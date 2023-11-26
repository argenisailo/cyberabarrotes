import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class ProductosCPro extends Component {
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
    xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/listaProductosPro.php', true);
    xhttp.send();
  }

  render() {
    const btnRegresar = () => {
        this.props.navigation.navigate('PrincipalCliente', {id_us: this.props.route.params.id_us, domicilio_us: this.props.route.params.domicilio_us});
    };

    const Detalle = (id, nombre, precio, imagen) => {
        this.props.navigation.navigate('InfoListaProdCliente', {id: id, nombre: nombre, precio: precio, imagen: imagen, id_us: this.props.route.params.id_us, domicilio_us: this.props.route.params.domicilio_us});
    }

    const Info = ({item}) => {
        return (
          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => Detalle(item.id, item.nombre, item.precio, item.imagen)
              }>
              <Text style={styles.box_content1}>{item.nombre}</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={styles.box_content2}>Precio: ${item.precio}</Text>
                <Image style={styles.info_img} source={{uri: item.imagen}}/>
              </View>

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
            <Text style={styles.title2}> NUESTROS PRODUCTOS </Text>
        </View>
        <Text style={styles.text}> ¡Haz click en cualquier producto para obtener más detalles! </Text>
        <FlatList
            data={this.state.serverData}
            renderItem={Info}
            keyExtractor={(item, index) => index.toString()}
        />
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
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        height: 60,
        marginTop: 20,
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
    box_content1: {
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },
    box_content2: {
        color: '#FFFFFF',
        fontSize: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    info_img: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});