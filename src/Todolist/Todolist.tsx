import React from 'react';
import s from './Todolist.module.css'
import {StateTypeTodolist} from "../App";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";


type TodolistTypeProps ={
    tasks:StateTypeTodolist
    DeleteTask:(id:string)=>void
    onChangeInputStatus:(e:boolean,id:string)=> void
}


export const Todolist:React.FC<TodolistTypeProps> = ({tasks,DeleteTask,onChangeInputStatus}) => {
    return (
        <div>
            {tasks.map(t  => {
                return(<div className={s.content} key={t.id}>
                    <span className={s.input}><Input type='checkbox' checked={t.status} onChange={(e)=> onChangeInputStatus(e.currentTarget.checked,t.id)}/></span>
                    <span>{t.name}</span>
                    <span className={s.button}><Button onClick={() => DeleteTask(t.id)}>X</Button></span>
                </div>)
            })}
        </div>
    );
};

