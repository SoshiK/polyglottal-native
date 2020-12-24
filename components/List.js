import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import ListItem from "./ListItem";

export default function List(props) {
  const lists = props.data;
  const list = [];
  for(let i = 0; i < lists.length; i++) {
    list.push(
      <ListItem 
        title={lists[i].Title}
        description={lists[i].Description}
        key={lists[i].ID}
        id={lists[i].ID}
        nav={props.navigation}
      />
    );
  }
  return <ScrollView>{list}</ScrollView>
  
}