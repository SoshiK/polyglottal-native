/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import { ScrollView, Button, StyleSheet} from "react-native";
import List from "./components/List"
import Detail from "./components/Detail"
import ListForm from "./components/ListForm";
import ItemForm from "./components/ItemForm";
import 'react-native-gesture-handler';
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App () {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/lists")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => console.error(error))
  },[])
  const { btn } = styles;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen 
        name="List" 
        options={({navigation}) => ({
          headerRight: () => <Button 
            title="+  "
            color="#48484A"
            onPress={() => navigation.navigate("Form")}
          />
        })}
        >
        {props => <List {...props} data={data}/>}
        </Stack.Screen>
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={({route, navigation}) => ({
            title: route.params.title,
            headerRight: () => <Button 
            title="+  "
            color="#48484A"
            onPress={() => navigation.navigate("ItemForm",{
              listId: route.params.listId,
            })}
            />
          })}
        />
        <Stack.Screen 
          name="Form"
        >
        {props => <ListForm {...props} setData={setData}/>}
        </Stack.Screen>
        <Stack.Screen
          name="ItemForm"
          component={ItemFormScreen}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function DetailScreen({route, navigation}) {
  const { listId } = route.params;
  return(
    <ScrollView>
      <Detail listId={listId}/>
      <Button 
        title="Back to List"
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  )
}

function ItemFormScreen({route, navigation}){
  const { listId } = route.params;
  return(
    <ItemForm listId={listId} nav={navigation}/>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginRight: 5
  }
});



