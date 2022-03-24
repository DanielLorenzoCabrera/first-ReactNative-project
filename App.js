import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView
  
} from "react-native";
import User from "./components/User";



export default function App() {
  const generateUsers = () => {
    const users = [];
    for(let i = 0; i < 10; i++){
      const randomAge = Math.round(Math.random() * 40) + 20;
      users.push(<User age={randomAge} name={`user ${i}`}/>)
    }
    return users;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.userContainer}>
      {generateUsers()}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexWrap : "wrap",
    flexDirection: 'row',
    alignContent : 'center',
  },
  userContainer : {
    flex : 1,
    flexWrap : "nowrap",
    flexDirection: 'column',
  }
});
