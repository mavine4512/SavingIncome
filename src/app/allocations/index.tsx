import AllocationList from '@/src/components/AllocationList';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:'Allocations'}}/>

      <Link href={'/allocations/new'} style={styles.button}>
        <Text>Create Allocation</Text>
      </Link>
      
      <AllocationList/>

      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  button:{
    margin:10,
    color: 'white',
    backgroundColor:'blue',
    padding:10,
    textAlign:'center',
    borderRadius:8,
    fontWeight:'bold',
    fontSize:14,
    overflow:'hidden',
  }
});
