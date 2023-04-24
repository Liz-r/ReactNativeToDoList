import { useState } from 'react';

const useTask = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [task, setTask] = useState('');
  //Guardar tasks
  const [tasks, setTasks] = useState(['Tareas pendientes']);
  const [canUpdate, setCanUpdate] = useState(false);

  const addTask = () => {
    //agregar el task al arreglo
    setTasks(currentTasks => [...currentTasks, task]);
    //limpiar el task
    setTask('');
    //quitar input
    setShowAdd(false);
  };

  const deleteTask = index => {
    const temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  };

  const updateAdd = state => {
    setShowAdd(state);
  };

  const editTask = text => {
    setTask(text);
  };

  const editItem = (item) => {
    setShowAdd(true);
    setTask(item);
  };

  updateItem = index => {
    const updateTask = task
    const temp = tasks.map((value, i) => {
      if (i === index) {
        value = updateTask;
        return value;
      } else {
        return value
      }
    });
    setTasks(temp);
    setCanUpdate(false);
    setShowAdd(false);
    setTask('')
  };

  return {
    addTask,
    deleteTask,
    task,
    tasks,
    showAdd,
    updateAdd,
    editTask,
    editItem,
  };
};

export default useTask;