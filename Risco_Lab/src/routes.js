import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Produtos from './pages/Produtos'
import Guias from './pages/Guias'
import Rotulos from './pages/Rotulos'
import Search from './pages/Search'

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#171626',
                    borderTopWidth:0,

                    bottom: 14,
                    left:14,
                    right: 14,
                    elevation:0,
                    borderRadius:4,
                    height: 60,
                }
             }}
        >

            <Tab.Screen
            name='Produtos'
            component={Produtos}
            options={{
                tabBarIcon:({color,size, focused}) =>{
                    if(focused){
                        return <Ionicons name='flask' size={size} color={color}/>
                    }
                    return <Ionicons name='flask-outline' size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen
            name='Guias'
            component={Guias}
            options={{
                tabBarIcon:({color,size, focused}) =>{
                    if(focused){
                        return <Ionicons name='file-tray-full' size={size} color={color}/>
                    }
                    return <Ionicons name='file-tray-full-outline' size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen
            name='Rotulos'
            component={Rotulos}
            options={{
                tabBarIcon:({color,size, focused}) =>{
                    if(focused){
                        return <Ionicons name='clipboard' size={size} color={color}/>
                    }
                    return <Ionicons name='clipboard-outline' size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen
            name='Search'
            component={Search}
            options={{
                tabBarIcon:({color,size, focused}) =>{
                    if(focused){
                        return <Ionicons name='search' size={size} color={color}/>
                    }
                    return <Ionicons name='search-outline' size={size} color={color}/>
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default Routes;