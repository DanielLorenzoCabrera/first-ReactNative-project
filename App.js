import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  
} from "react-native";
import User from "./components/User";



export default function App() {
  const generateUsers = () => {
    const users = [];
    for(let i = 0; i < 10; i++){
      const randomAge = Math.round(Math.random() * 40) + 20;
      users.push(<User age={randomAge} name={`user ${i}`} style={styles.user}/>)
    }
    return users;
  }
  return (
    <SafeAreaView style={styles.container}>
      {generateUsers()}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "space-around",
    flexWrap : "wrap",
    flexDirection: 'row',
    alignContent : 'center'
  },
  user : {
    margin : '1'
  }
});
