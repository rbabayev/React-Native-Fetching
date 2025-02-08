import { Text, View } from 'react-native'
import React from 'react'


const UserCard = ({user}) => {
  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.username}</Text>
      <Text>{user.email}</Text>
    </View>
  )
}

export default UserCard