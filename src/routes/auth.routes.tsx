import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SignIn } from '../screen/Sign-in';
import { SignUp } from '../screen/Sign-up';


const {Navigator,Screen} = createNativeStackNavigator();
export function AuthRoutes(){
    return(
    <Navigator initialRouteName='signup' screenOptions={{headerShown: false}}>
        <Screen name='login' component={SignIn}/>
        <Screen name='signup' component={SignUp}/>
    </Navigator>
    )
}