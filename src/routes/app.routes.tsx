import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screen/Home";
import { Product } from "../screen/Product";

const {Navigator,Screen} = createNativeStackNavigator();

export function AppRoute(){
    return(
        <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>
            <Screen 
        name='product'
        component={Product}
      />
        </Navigator>
    )
}