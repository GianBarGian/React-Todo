import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);

    this.state = {
      todoList: [
        {
          task: 'Organize Garage',
          id: 123333333333,
          completed: false,
        }
      ],
    }
  }

  addTodoItem = todoItem => {
    this.setState(st => ({
      todoList: st.todoList.concat(todoItem)
    }))
  }

  

  clickedTodo = (id) => {  
    let newVar = this.state.todoList.map(item => {
      if (item.id === id) {
        item.completed = true
      } 
      return item;
    })
    
    this.setState({
      todoList: [...newVar] ,
    })
  }

  render() {
    const { task, id, completed } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList clickedTodo={this.clickedTodo} todoList={this.state.todoList}/>
        <TodoForm addTodoItem={this.addTodoItem}/>
      </div>
    );
  }
}

export default App;
