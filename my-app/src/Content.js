import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import "./Content.css";
import Calendar from "./Calendar";

const Content = ()=>{
    const [CalendarOpen, setCalendarOpen] = useState(0);
    const [items, setItems] = useState(
        [
            {
                id:1,
                checked:false,
                text:"Create react app",
                duedate: "No due date"
            },
            {
                id:2,
                checked:false,
                text:"Componet flow",
                duedate: "No due date"
            },
            {
                id:3,
                checked:false,
                text:"React Functional Components",
                duedate: "No due date"
            },
            {
                id:4,
                checked:false,
                text:"React Click Events",
                duedate: "No due date"
            },
            {
                id:5,
                checked:false,
                text:"Use State",
                duedate: "No due date"
            },
            {
                id:6,
                checked:false,
                text:"List and keys",
                duedate: "No due date"
            }
        ]
    );
    const handleCheckbox=(id)=>{
        setItems(
            items.map((item)=>
                item.id===id ? {...item,checked:!item.checked}:item
            )
        );
    };

    const handleDelete=(id)=>{
        setItems(items.filter(item=>item.id!==id).map((item,index)=>({...item,id:index+1})));
    };

    const handleDueDateValue=(id,date)=>{
        setItems(items.map((item)=>
                item.id == id ?{...item,duedate : date}: item
            )
        );
    }
    const handleKeyDown=(e)=>{
        if(e.key === "Enter"){
            const newItem = {
                id: items.length + 1,
                checked: false,
                text: e.target.value,
                duedate: "No due date"
            };
            setItems([...items, newItem]);
            e.target.value = "";
        }
    }
    return (
        <main>
            <input className="get-task-item" placeholder="Write your task here..." onKeyDown={(e)=>handleKeyDown(e)}></input>
            <ul className="list-container">
                {items.map(item=>
                    <li className="list-item" key={item.id}>
                        <input className="input-item" type="checkbox" checked={item.checked} onChange={()=>handleCheckbox(item.id)}></input> 
                        <label className="label-item">{item.text}</label>
                        <span className="due-date" onClick={()=>setCalendarOpen(item.id)}>{item.duedate}</span>
                        <Calendar showCalendar ={CalendarOpen} handleShowCalendar={setCalendarOpen} handleDueDate={handleDueDateValue} itemid={item.id}></Calendar>
                        <FaWindowClose className="close-icon" role="button" onClick={()=>handleDelete(item.id)}/>
                    </li>
                )}
            </ul>
        </main>
        
    )
}

export default Content;