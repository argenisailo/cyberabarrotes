import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class CambioRepartidoresAPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //Variables
        
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
    xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/listaRepartidoresPro.php', true);
    xhttp.send();
    }

  render() {
    const btnRegresar = () => {
        this.props.navigation.navigate('RepartidoresAdmin');
    };

    const Detalle = (id, nombre, imagen) => {
        this.props.navigation.navigate('Cambio2RepAdmin', {id: id, nombre: nombre, imagen: imagen});
    }

    const Info = ({item}) => {
        return (
          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => Detalle(item.id, item.nombre, item.imagen)
              }>
              <Text style={styles.box_content}>ID: {item.id}</Text>
              <Text style={styles.box_content}>Nombre: {item.nombre}</Text>
              <Text style={styles.box_content}>Imagen: {item.imagen}</Text>
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
            <Text style={styles.title2}> CAMBIO DE INFORMACIÓN </Text>
        </View>
        <Text style={styles.text}> Selecciona al repartidor que deseas modificar </Text>
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
    box_content: {
        color: '#FFFFFF',
    }
});