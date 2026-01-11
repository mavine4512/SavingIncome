import { StyleSheet, Text, View } from 'react-native';

export default function AccountListItem(){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>Profile</Text>
            <Text style={styles.percentage}>10%</Text> 
            <Text style={styles.percentage}>20%</Text>
        </View>
    )
}

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
},
percentage:{}
})