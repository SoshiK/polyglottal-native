import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";

import DetailItem from "./DetailItem";

export default function Detail(props) {
  const [data, setData] = useState([]);
  const { button } = styles;
  useEffect(() => {
    fetch(`http://localhost:3000/api/items/${props.listId}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => console.error(error));
  },[])
  const lists = data;
  const list = [];
  for (let i = 0; i < lists.length; i++) {
    list.push(
      <DetailItem 
        title={lists[i].Title}
        description={lists[i].Description}
        url={lists[i].Url}
        key={lists[i].ID}
        id={lists[i].ID}
        listId={props.listId}
        setData={setData}
      />
    );
  }
  return (
  <View>
    <View style={button}>
      <Button 
        title="更新"
        onPress={() => {
          fetch(`http://localhost:3000/api/items/${props.listId}`)
            .then((res) => res.json())
            .then((json) => {
              setData(json);
            })
        }}
      />
    </View>
    {list}
  </View>)
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    paddingTop: 13
  }
})