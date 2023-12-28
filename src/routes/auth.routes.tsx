import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';
import { SignIn } from '../screen/Sign-in';
import { SignUp } from '../screen/Sign-up';


type AuthRoutes ={
    signIn : undefined;
    signUp: undefined;
}
export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;
const {Navigator,Screen} = createNativeStackNavigator();
export function AuthRoutes(){
    return(
    <Navigator initialRouteName='signIn' screenOptions={{headerShown: false}}>
        <Screen name='signIn' component={SignIn}/>
        <Screen name='signUp' component={SignUp}/>
    </Navigator>
    )
}