import React, {useState} from "react";
import { Text, View, Image, StyleSheet ,Pressable} from "react-native";

const User = (props) => {
  const randomGenre = () => (Math.random() < 0.5 ? "female" : "male");
  const randomPic = () => {
    return Math.round(Math.random() * 100);
  };
  const picture = `https://minimaltoolkit.com/images/randomdata/${randomGenre()}/${randomPic()}.jpg`;
  const [state, changeState] = useState(false);
  const changeStyle = () => changeState(state => !state);
 
  return (

    <Pressable onPress={()=> {
            changeStyle()}}>
      <View style={state === false ? styles.user : styles.activeUser}>
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
    </Pressable>
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
  },
  activeUser : {
      backgroundColor : '#9B97B2',
      height : '100%',
      flex : 1,
      justifyContent : 'center',
      flexDirection : 'column',
      alignItems : 'center',
      padding : 10,
      marginVertical : 10,
      borderRadius: 10,
  }
});

export default User;
