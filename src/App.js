import React from 'react';
import AddTask from './components/AddTask';
import ListeTask from './components/ListeTask';
import TotalTodo from './components/TotalTodo';
import Header from './components/Header'



const App = () => {
  return (
   
    <div className="container mt-5 mb-5">
       <Header />
       <h4>MY TODO LIST</h4>
       <AddTask />
       <TotalTodo />
       <ListeTask />
    </div>
  );
};

export default App;