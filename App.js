// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductInfoScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
                <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
                <Stack.Screen name="Screen3" component={Screen3} options={{ title: 'Quay Lại' }}/>
                <Stack.Screen name="Screen4" component={Screen4} options={{ title: 'Shop-Secondhand-UTH' }}  />
                <Stack.Screen name="Screen5" component={Screen5} options={{ title: 'My Reviews' }}  />
                <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Quay Lại' }} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Chi Tiết Sản Phẩm' }} />
                <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Xác nhận thanh toán' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;