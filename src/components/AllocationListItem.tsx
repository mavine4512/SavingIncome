import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Allocation from '../model/Allocation';

function AllocationListItem({allocation}: {allocation: Allocation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.date}>{allocation.createdAt.toLocaleDateString()}</Text>
            <Text style={styles.income}>Kshs {allocation.income}</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        overflow:'hidden',
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'gainsboro',
        padding:10,
    },
    date:{},
    income:{
        fontSize:16,
        fontWeight:'bold',
        color:'green'
    }
})

export default AllocationListItem;
