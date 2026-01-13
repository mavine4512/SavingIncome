import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { accountsCollection } from '../db';
import Account from '../model/Account';
import AccountListItem from './AccountListItem';

export default function AccountsList(){
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(()=> {
        const fetchAccounts = async ()=>{
            const accountsData: Account[] = await accountsCollection.query().fetch()
            setAccounts(accountsData)
        }
        fetchAccounts()
    },[]);

    console.log('accounts',accounts)

    return(
           <FlatList
           data={accounts}
           contentContainerStyle={{gap:5}}
           renderItem={({item})=><AccountListItem account={item}/>}
           />
    )
}
