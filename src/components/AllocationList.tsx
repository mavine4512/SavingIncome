import { Q } from '@nozbe/watermelondb'
import { withObservables } from '@nozbe/watermelondb/react'
import React from 'react'
import { FlatList } from 'react-native'
import { allocationsCollection } from '../db'
import Allocation from '../model/Allocation'
import AllocationListItem from './AllocationListItem'

 function AllocationList({allocations}:{allocations: Allocation[]}) {
  return (
    <FlatList
        data={allocations}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{gap:5, padding:10}}
        renderItem={({item})=> (<AllocationListItem allocation={item}/>)}
    />
  )
}

const enhance = withObservables([], () => ({
    // fetch and update data of account on ui
  allocations: allocationsCollection.query(Q.sortBy('created_at', Q.desc)),
}));

export default enhance(AllocationList);