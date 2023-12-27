import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { AuthRoutes } from './auth.routes';
import { AppRoute } from './app.routes';

const isAuth = false;
export function RoutesIndex(){
    return(
        <NavigationContainer>
              {isAuth ? <AppRoute/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}