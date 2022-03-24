import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const User = (props) => {
  const randomGenre = () => (Math.random() < 0.5 ? "female" : "male");
  const randomPic = () => {
    return Math.round(Math.random() * 100);
  };
  const picture = `https://minimaltoolkit.com/images/randomdata/${randomGenre()}/${randomPic()}.jpg`;
  return (
    <View style={styles.user}>
      <Image source={{ uri: picture }} style={styles.userPhoto} />
      <View style={styles.fontContainer}>
        <Text style={styles.fonts}>
          <Text style={styles.textTag}>Name:</Text> {props.name}
        </Text>
        <Text style={styles.fonts}>
            <Text style={styles.textTag}>Age:</Text> {props.age}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userPhoto: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  user: {
    backgroundColor: "#F6F7EB",
    margin: 5,
    padding: 10,
    flexDirection: "row",
    flex: 1,
    borderRadius: 10,
  },
  fontContainer: {
    padding: 10,
  },
  fonts: {
    fontSize: 24,
    margin: 5,
  },
  textTag : {
      fontWeight : 'bold'
  }
});

export default User;
