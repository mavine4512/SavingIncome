import { StyleSheet, Text, View } from 'react-native';
import AccountsList from '../components/AccountsList';

export default function AccountsScreen(){

    return (
        <View style={{gap:5, padding:5}}>
            <View style={styles.header}>
                <Text  style={styles.name}>Name</Text>
                <Text style={styles.name}>CAP</Text>
                <Text style={styles.name}>TAP</Text>
            </View>
            <AccountsList/>
        </View>
    )
}

const styles = StyleSheet.create({
   header:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
   },
   name:{
    fontWeight:'bold',
    fontSize:15
   },
})