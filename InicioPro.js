import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const btnIniciar = () => {
            this.props.navigation.navigate('Login');
        };
    
        return (
            <View style={styles.container}>
                <Text style={styles.title}> CyberAbarrotes </Text>
                <Image
                    style={styles.logo}
                    source={require('./Images/logo.png')}></Image>
                <Pressable style={styles.btnInicio} onPress={btnIniciar}>
                    <Text style={styles.txtBtn}>ENTRAR</Text>
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
        fontSize: 60,
        color: 'black',
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 40,
    },
    txtBtn: {
        fontSize: 50,
        lineHeight: 60,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    logo: {
        width: '70%',
        height: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 40,
    },
    btnInicio: {
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
    }
    });
    