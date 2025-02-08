import {Text, View, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import Input from '../login/components/Input';

const Todo = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  const login = async () => {
    try {
      const response = await fetch('http://192.168.100.8:5001/cards', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(todo),
      });

      const data = await response.json();

      if (response.ok) {
        getTodos();
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async id => {
    try {
      const response = await fetch(`http://192.168.100.8:5001/cards/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        getTodos();
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch('http://192.168.100.8:5001/cards');
      const data = await response.json();

      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <View className="h-full p-5 gap-4 justify-center">
      <Text className="text-4xl text-black text-center mb-3">Todo</Text>

      <Input
        name="title"
        setFormData={setTodo}
        value={todo?.title}
        placeholder="Enter your title"
      />

      <Input
        name="description"
        setFormData={setTodo}
        value={todo?.description}
        placeholder="Enter your description"
      />

      <TouchableOpacity onPress={login} className="bg-blue-700 py-6">
        <Text className="text-center text-white text-xl">Add</Text>
      </TouchableOpacity>

      <FlatList
        ListHeaderComponent={() => <Text>Todos</Text>}
        ListFooterComponent={() => <Text>End Of Todos List</Text>}
        data={todos}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity className='absoulute right-3 top-2 bg-red-600' onPress={() => deleteTodo(item._id)}>
                <Text className='text-center text-white'>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Todo;
