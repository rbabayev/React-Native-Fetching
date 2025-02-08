import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import "./global.css"
import Login from './src/screens/login/Login'
import Home from './src/screens/home/Home'
import Todo from './src/screens/Todo/Todo'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <Login/> */}
        {/* <Home/> */}

        <Todo />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})