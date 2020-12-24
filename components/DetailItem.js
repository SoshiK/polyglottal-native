import React from "react";
import { View, Text, StyleSheet, Button } from "react-native"


export default function ListItem(props) {
  const { list, title, description, url } = styles;

  return (
    <View style={list}>
      <Text style={title}>{props.title}</Text>
      <Text style={description}>{props.description}</Text>
      <Text style={url}>{props.url}</Text>
      <Button 
        title="delete"
        onPress={() => {
          fetch("http://localhost:3000/api/items",{
            method:"DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              id: props.id
            })
          }).then(() => {
            return fetch(`http://localhost:3000/api/items/${props.listId}`)
          }).then((res) => res.json())
          .then((json) => {
            props.setData(json)
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list : {
    height: 140,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    paddingTop: 20
  },
  title : {
    fontFamily: "Hiragino Mincho ProN",
    fontSize: 35,
    paddingLeft: 20,
  },
  description: {
    color: "#48484A",
    fontSize: 15,
    marginTop: 2,
    paddingLeft: 30,
  },
  url: {
    color: "#48484A",
    fontSize: 15,
    marginTop: 2,
    paddingLeft: 30,
  }

});