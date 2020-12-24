import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function FormInput(props) {
  const { form, formLabel, formControl } = styles;
  return(
    <View style={form}>
      <Text style={formLabel}>{props.label}</Text>
      <TextInput 
        style={formControl}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={v => props.setValue(v)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16
  }, 
  formLabel: {
    paddingRight: 16
  },
  formControl: {
    height: 40,
    width: 160,
    padding: 8,
    borderColor: "gray",
    borderWidth: 1
  }
});