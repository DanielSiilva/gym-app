import {useState} from 'react'

import { HStack, VStack } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  const [groupSelected, setGroupSelected] = useState('costa')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
       <Group 
        name='Costas'
        isActive={groupSelected === 'costa'}
        onPress={()=> setGroupSelected('costa')}
       />

       <Group 
        name='pernas'
        isActive={groupSelected === 'pernas'}
        onPress={()=> setGroupSelected('pernas')}
       />
      </HStack>
    </VStack>
  );
}