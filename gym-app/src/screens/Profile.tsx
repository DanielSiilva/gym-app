import { VStack, ScrollView, Center } from 'native-base';

import {ScreenHeader} from '@components/ScreenHeader'
import {UserPhoto} from '@components/UserPhoto'

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />

      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{uri: "https://avatars.githubusercontent.com/u/94769388?v=4"}}
            alt='Foto do Usuario'
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}