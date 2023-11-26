import * as React from 'react';
import {View, Text, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import INICIO from './InicioPro';
import LOGIN from './LoginPro';
import REGISTRO from './RegistroPro';
import PRINCIPALA from './PrincipalAPro';
import PRINCIPALC from './PrincipalCPro';
import PRODUCTOSA from './ProductosAPro';
import REPARTIDORESA from './RepartidoresAPro';
import PEDIDOSA from './PedidosAPro';
import ALTAPRODA from './AltaPoductosAPro';
import BAJAPRODA from './BajaProductosAPro';
import CAMBIOPRODA from './CambioProdAPro';
import CAMBIO2PRODA from './Cambio2ProdAPro';
import LISTAPRODA from './ListaProdAPro';
import INFOLPRODA from './InfoListaProdAPro';
import ALTAREPA from './AltaRepartidoresAPro';
import BAJAREPA from './BajaRepartidoresAPro';
import CAMBIOREPA from './CambioRepAPro';
import CAMBIO2REPA from './Cambio2RepAPro';
import LISTAREPA from './ListaRepApro';
import INFOLREPA from './InfoListaRepAPro';
import LISTAPEDA from './ListaPedAPro';
import INFOLPEDA from './InfoListaPedAPro';
import PRODUCTOSC from './ProductosCPro';
import INFOLPRODC from './InfoListaProdCPro';
import PEDIDOSC from './PedidosCPro';
import INFOLPEDC from './InfoListaPedCPro';
import CARRITOPRO from './CarritoCPro';
import ASIGNARREPPRO from './AsignarRepAPro';
import ASIGNAR2REPPRO from './Asignar2RepAPro';

const Stack = createNativeStackNavigator();

BackHandler.addEventListener('hardwareBackPress', function () {
    return true;
});

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerBackVisible: false}}>
                <Stack.Screen
                    name="Inicio"
                    component={INICIO}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={LOGIN}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Registro"
                    component={REGISTRO}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="PrincipalAdmin"
                    component={PRINCIPALA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="PrincipalCliente"
                    component={PRINCIPALC}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ProductosAdmin"
                    component={PRODUCTOSA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="RepartidoresAdmin"
                    component={REPARTIDORESA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="PedidosAdmin"
                    component={PEDIDOSA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="AltaProdAdmin"
                    component={ALTAPRODA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="BajaProdAdmin"
                    component={BAJAPRODA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="CambioProdAdmin"
                    component={CAMBIOPRODA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Cambio2ProdAdmin"
                    component={CAMBIO2PRODA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ListaProdAdmin"
                    component={LISTAPRODA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="InfoListaProdAdmin"
                    component={INFOLPRODA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="AltaRepAdmin"
                    component={ALTAREPA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="BajaRepAdmin"
                    component={BAJAREPA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="CambioRepAdmin"
                    component={CAMBIOREPA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Cambio2RepAdmin"
                    component={CAMBIO2REPA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ListaRepAdmin"
                    component={LISTAREPA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="InfoListaRepAdmin"
                    component={INFOLREPA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ListaPedAdmin"
                    component={LISTAPEDA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="InfoListaPedAdmin"
                    component={INFOLPEDA}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="ProductosCliente"
                    component={PRODUCTOSC}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="InfoListaProdCliente"
                    component={INFOLPRODC}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="PedidosCliente"
                    component={PEDIDOSC}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="InfoListaPedCliente"
                    component={INFOLPEDC}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="CarritoCliente"
                    component={CARRITOPRO}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="AsignarRepAdmin"
                    component={ASIGNARREPPRO}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Asignar2RepAdmin"
                    component={ASIGNAR2REPPRO}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
