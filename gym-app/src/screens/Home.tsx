import { HStack, VStack } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
       <Group name='Costas'/>
       <Group name='Pernas'/>
      </HStack>
    </VStack>
  );
}