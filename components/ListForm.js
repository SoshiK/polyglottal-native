import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import FormInput from "./FormInput";

export default function ListForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { container } = styles;
  return (
    <View style={container}>
      <FormInput 
        label="Title"
        value={title}
        placeholder="The title of List"
        setValue={setTitle}
      />
      <FormInput 
        label="Description"
        value={description}
        placeholder="Description about this list"
        setValue={setDescription}
      />
      <Button 
        title="登録"
        onPress={() => {
          fetch("http://localhost:3000/api/lists", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              title: title,
              description: description
            })
          }).then(() => {
            return fetch("http://localhost:3000/api/lists")
          }).then((res) => res.json())
          .then((json) => {
            props.setData(json)
            props.navigation.goBack();
          })
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
})