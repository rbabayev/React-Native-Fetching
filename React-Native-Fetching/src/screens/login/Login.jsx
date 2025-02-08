import { Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Input from './components/Input'

const Login = () => {
    const [formData, setFormData] = useState({})

    return (
        <View className='h-full p-5 gap-4 justify-center'>
            <Text className='text-4xl text-black text-center mb-3'>Login</Text>

            <Input name="email" setFormData={setFormData} value={formData?.email} placeholder="Enter your email" />

            <Input name="password" setFormData={setFormData} value={formData?.password} placeholder="Enter your password" />

            <TouchableOpacity onPress={() => {
                console.log(formData)
            }} className='bg-blue-700 py-6'>
                <Text className='text-center text-white text-xl'>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login