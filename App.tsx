import { Text, View } from "react-native";
import { styles } from "./components/styles";

export default function App() {
  return (
    <View style={styles.container}>
      {/* where the task will go */}
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>To do Task</Text>
        <View style={styles.items}>
          <Text>Task 1</Text>
          
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
