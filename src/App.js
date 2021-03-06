import React from 'react';
import './components/TodoComponents/Todo.css'
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

  saveState = () => {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  getStatefromLS = () => {
    for (let key in this.state) {
      this.value = localStorage.getItem(key);
      this.value = JSON.parse(this.value);
      
      this.setState({
        [key]: this.value
      })
    }
  }

  componentDidMount() {
    this.getStatefromLS();

    window.addEventListener(
      "beforeunload",
      this.saveState.bind(this)
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveState.bind(this)
    );
    this.saveState();
  }

  updateTodoList = (id) => {  
    let updatedTodo = this.state.todoList.map(item => {
      if (item.id === id) {
        item.completed = true
      } 
      return item;
    })
    
    this.setState({
      todoList: [...updatedTodo] ,
    })
  }

  clearCompleted = () => {
    const clearArray = this.state.todoList.filter(item => item.completed === false);
    this.setState({
      todoList: clearArray,
    })
  }

  addTodoItem = todoItem => {
    this.setState(st => ({
      todoList: st.todoList.concat(todoItem)
    })
    )
  }

  searchItem = (task) => {
    const searchArray = this.state.todoList.filter(item => item.task === task);

    this.setState({
      todoList: searchArray,
    })
  }
  

  render() {
    const { task, id, completed } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList completed={completed} updateTodoList={this.updateTodoList} todoList={this.state.todoList}/>
        <TodoForm searchItem={this.searchItem} addTodoItem={this.addTodoItem} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
