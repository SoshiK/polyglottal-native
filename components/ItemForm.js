import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import FormInput from "./FormInput";

export default function ItemForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const { container } = styles;
  return (
    <View style={container}>
      <FormInput 
        label="Title"
        value={title}
        placeholder="The title of Item"
        setValue={setTitle}
      />
      <FormInput 
        label="description"
        value={description}
        placeholder="Description about this item"
        setValue={setDescription}
      />
      <FormInput 
        label="URL"
        value={url}
        placeholder="related URL"
        setValue={setUrl}
      />
      <Button 
        title="登録"
        onPress={() => {
          fetch("http://localhost:3000/api/items",{
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              title: title,
              description: description,
              url: url,
              listid: props.listId
            })
          }).then(() => {
            props.nav.goBack();
          })
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
})