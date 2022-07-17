import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from "./Todolist/Todolist";
import {Button} from "./Button/Button";
import {v1} from "uuid";
import {log} from "util";
import {Input} from "./Input/Input";


const stateTodolist = [
    {id: v1(), name: 'React', status: false},
    {id: v1(), name: 'JS', status: true},
    {id: v1(), name: 'CSS', status: true},
    {id: v1(), name: 'HTML', status: true},
    {id: v1(), name: 'Redux', status: false},
]

type StateTasksType = {
    id: string
    name: string
    status: boolean
}
export type StateTypeTodolist = Array<StateTasksType>
type FilterTypeTasks = 'All' | 'True' | 'False'

function App() {


    let [tasks, setTasks] = useState<StateTypeTodolist>(stateTodolist)
    let [inputText, setInputText] = useState('')
    let [filter, setFilter] = useState<FilterTypeTasks>('All')
    let [error,setError] = useState('')


    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
        setError('')
    }


    const AddNewTask = () => {
        if(inputText.trim() !== ''){
            let NewTask = {id: v1(), name: inputText.trim(), status: false}
            setTasks([NewTask, ...tasks])
            setInputText('')
        }else setError('Title is required')
    }

    const DeleteTask = (id: string) => {
        const FilterTasks = tasks.filter(t => t.id !== id)
        setTasks(FilterTasks)
    }
    const onChangeInputStatus = (s: boolean, id: string) => {

        let NewStatusTask = tasks.find(t => t.id === id)
        if (NewStatusTask) {
            NewStatusTask['status'] = s
            setTasks([...tasks])
        }
    }
    const changeFilterTask = (name:FilterTypeTasks) => {
        setFilter(name)
    }

    const FilteredTask = () => {
        if (filter === 'False') {
          return   tasks.filter(t => t.status === false)

        } else if (filter === 'True') {
         return    tasks.filter(t => t.status === true)


        } else if (filter === 'All') {
            return tasks
        }
        return tasks
    }
    const filteredTasks = FilteredTask()

    const onKeyDownHandler = (e:string) => {
        if(e === 'Enter') {
            AddNewTask()
        }
    }

    return (
        <div className="App">
            <Button onClick={AddNewTask}>
                add
            </Button>
            <Input error={error} value={inputText} onKeyDown={(e)=>onKeyDownHandler(e.key)} onChange={OnChangeHandler} />

            <Todolist tasks={filteredTasks} DeleteTask={DeleteTask} onChangeInputStatus={onChangeInputStatus}/>
            <Button onClick={() => changeFilterTask('All')}>All</Button>
            <Button onClick={() => changeFilterTask('True')}>True</Button>
            <Button onClick={() => changeFilterTask('False')}>False</Button>
        </div>
    );
}

export default App;
