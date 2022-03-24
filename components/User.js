import React from "react";
import { Text,View , Image} from "react-native";

const User = (props) => {
    const randomGenre = () => Math.random() < 0.5 ? 'female' : 'male';
    const randomPic = () => { return Math.round(Math.random() * 100);};
    const picture = `https://minimaltoolkit.com/images/randomdata/${randomGenre()}/${randomPic()}.jpg`;
    return(
        <View>
            <Image 
                source= {{ uri : picture }}
                style={{ width: 100, height: 100 }}/>
            <Text>Name: {props.name}</Text>
            <Text>Age: {props.age}</Text>
        </View>
           
        
    )
}

export default User;