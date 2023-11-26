import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Variables
            user: '',
            pass: '',
            serverData: '',
      };
    }

    render() {
        const btnRegister = () => {
            this.props.navigation.navigate('Registro');
        };

        const btnLogin = () => {
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (xhttp.responseText == 'No hay datos en el sevidor[]') {
                        alert('No se encontró esta cuenta. Vuelve a intentarlo');
                    }
                    else {
                        var data = JSON.parse(xhttp.responseText);
                        console.log(data);
                        if(data[0].usuario == 'argenislo' && data[0].contraseña == 'numero10')
                        {
                            _this.props.navigation.navigate('PrincipalAdmin');
                        }
                        else
                        {
                            _this.props.navigation.navigate('PrincipalCliente', {id_us: data[0].id_us, domicilio_us: data[0].domicilio});
                        }
                    }
                }
            };
            xhttp.open('GET', 'http://appudeg.xp3.biz/Proyecto/loginPro.php?usuario=' + this.state.user + '&contraseña=' + this.state.pass, true);
            xhttp.send();
        };
    
        return (
            <View style={styles.container}>
                <Text style={styles.title}> CyberAbarrotes </Text>
                <Image
                    style={styles.logo}
                    source={require('./Images/logo.png')}></Image>
                <TextInput
                    style={styles.input}
                    placeholder="Introduce tu nombre de usuario"
                    placeholderTextColor="#8B8B8B"
                    onChangeText={user => this.setState({user})}></TextInput>
                <TextInput
                    style={styles.input}
                    placeholder="Introduce tu contraseña"
                    placeholderTextColor="#8B8B8B"
                    secureTextEntry={true}
                    onChangeText={pass => this.setState({pass})}></TextInput>
                <Pressable style={styles.btnLogin} onPress={btnLogin}>
                    <Text style={styles.txtBtn}>INICIAR SESIÓN</Text>
                </Pressable>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text}> ¿No tienes cuenta? </Text>
                    <Pressable style={styles.btnRegister} onPress={btnRegister}>
                        <Text style={styles.txtBtn2}>REGÍSTRATE</Text>
                    </Pressable>
                </View>
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
        fontSize: 60,
        color: 'black',
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        flexDirection:'row',
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 40,
    },
    txtBtn: {
        fontSize: 40,
        lineHeight: 60,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    txtBtn2: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    logo: {
        width: '55%',
        height: '35%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
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
    btnLogin: {
        height: 80,
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
    btnRegister: {
        height: 30,
        marginTop: 10,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    }
});
    