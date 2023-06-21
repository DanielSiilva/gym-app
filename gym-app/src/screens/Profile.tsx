import {useState} from 'react'
import { VStack, ScrollView, Center, Skeleton } from 'native-base';

import {ScreenHeader} from '@components/ScreenHeader'
import {UserPhoto} from '@components/UserPhoto'

const PHOTO_SIZE = 33;  

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />

      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ?
            <Skeleton  
              w={PHOTO_SIZE} 
              h={PHOTO_SIZE} 
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
            :
            <UserPhoto
              source={{uri: "https://avatars.githubusercontent.com/u/94769388?v=4"}}
              alt='Foto do Usuario'
              size={PHOTO_SIZE}
            />
          }
        </Center>
      </ScrollView>
    </VStack>
  );
}