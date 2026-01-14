import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { withObservables } from '@nozbe/watermelondb/react';
import { StyleSheet, Text, View } from 'react-native';
import database from '../db';
import Account from '../model/Account';

type AccountLitItem ={
    account: Account;
}
 function AccountListItem({account}: AccountLitItem){

    const onDelete = async ()=>{
        await database.write( async() => { 
            await account.markAsDeleted();
        })
    };
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{account.name}</Text>
            <Text style={styles.percentage}>{account.cap}</Text> 
            <Text style={styles.percentage}>{account.tap}</Text>
            <MaterialCommunityIcons 
            name="delete-empty-outline" 
            size={18} 
            color="red"
            onPress={onDelete}
            />
        </View>
    )
}

const enhance = withObservables(['account'],({account}: AccountLitItem)=>({
    account,
}))

export default enhance(AccountListItem);

const styles = StyleSheet.create({
container:{
    backgroundColor:'white',
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:5,
},
name:{
    fontWeight:'bold',
    flex:1
},
percentage:{
    flex:1
}
})