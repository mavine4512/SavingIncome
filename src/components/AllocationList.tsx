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
        renderItem={({item})=> (<AllocationListItem allocation={item}/>)}
    />
  )
}

const enhance = withObservables([], () => ({
    // fetch and update data of account on ui
  allocations: allocationsCollection.query(),
}));

export default enhance(AllocationList);