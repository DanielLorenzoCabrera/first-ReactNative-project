import React from "react";
import { Text,View , Image, StyleSheet} from "react-native";

const User = (props) => {
    const randomGenre = () => Math.random() < 0.5 ? 'female' : 'male';
    const randomPic = () => { return Math.round(Math.random() * 100);};
    const picture = `https://minimaltoolkit.com/images/randomdata/${randomGenre()}/${randomPic()}.jpg`;
    return(
        <View style={styles.user}>
            <Image 
                source= {{ uri : picture }}
                style={{ width: 100, height: 100 }}/>
                
            <Text style={styles.fonts}>Name: {props.name}</Text>
            <Text style={styles.fonts}>Age: {props.age}</Text>
        </View>
           
        
    )
}


const styles = StyleSheet.create({
    user: {
      backgroundColor: "blue",
      margin: 5,
      padding: 10,
      flexDirection: 'row',
    
    },
    fonts: {
        fontSize : 30
    }
  });

export default User;