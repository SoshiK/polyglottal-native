import React from "react";
import { View, Text, StyleSheet, Button } from "react-native"


export default function ListItem(props) {
  const { list, title, description } = styles;

  return (
    <View style={list}>
      <Text style={title}>{props.title}</Text>
      <Text style={description}>{props.description}</Text>
      <Button 
        title="Go to Detail"
        onPress={() => props.nav.navigate("Detail",{
          title: props.title,
          listId: props.id
        })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list : {
    height: 120,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    paddingTop: 20
  },
  title : {
    fontFamily: "Hiragino Mincho ProN",
    fontSize: 35,
  },
  description: {
    color: "#48484A",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 2
  }

});