import AllocationList from '@/src/components/AllocationList';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:'Allocations'}}/>

      <Link href={'/allocations/new'}>Go to newAllocation</Link>
      
      <AllocationList/>

      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
});
