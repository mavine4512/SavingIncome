import { FlatList } from 'react-native';
import { accountsCollection } from '../db';
import AccountListItem from './AccountListItem';

import { withObservables } from '@nozbe/watermelondb/react';
import Account from '../model/Account';

function AccountsList({accounts}:{accounts: Account[]}){
    return(
           <FlatList
           data={accounts}
           contentContainerStyle={{gap:5}}
           keyExtractor={(item) => item.id}
           renderItem={({item})=><AccountListItem account={item}/>}
           />
    )
}

const enhance = withObservables([], () => ({
    // fetch and update data of account on ui
  accounts:  accountsCollection.query(),
}));

export default enhance(AccountsList)

// this is also working
// export default withObservables([], () => ({
//     // fetch data of account
//   accounts:  accountsCollection.query(),
// }))(AccountsList);