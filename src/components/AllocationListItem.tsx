import React from 'react';
import { Text, View } from 'react-native';
import Allocation from '../model/Allocation';

function AllocationListItem({allocation}: {allocation: Allocation}) {
  return (
    <View>
        <Text>{allocation.createdAt.toString()}</Text>
        <Text>{allocation.income}</Text>
    </View>
  )
}

// const enhance = withObservables(['allocation'],({allocation}: Allocation)=>({
//     allocation,
// }))

// export default enhance(AllocationListItem);

export default AllocationListItem;
