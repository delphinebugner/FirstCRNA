import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const onPress = () => {
  // do something !
};

const styles = StyleSheet.create({
  inputText: { marginTop: 60, height: 50, padding: 10, textAlign: "center" },
});

interface Props {}

const Search = ({}: Props): JSX.Element => {
  return (
    <View>
      <TextInput placeholder="Artiste..." style={styles.inputText} />
      <Button title="Rechercher toujours" onPress={onPress} />
    </View>
  );
};

export default Search;
