import React, { useState, useEffect, useRef } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import "./Calendar.css"

const Calendar=({showCalendar,handleShowCalendar,handleDueDate,itemid})=>{

    const Days=['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    const [currentDate,setCurrentDate]=useState(new Date());
    const calendarRef = useRef(null); 
    const years = ()=>{
        let year = 2010;
        let yearArr = [];
        for(let i =2010;i<2030;i++){
            yearArr.push(i);
        }
        return yearArr;
    }

    const Dates=[];
    for(let i =1;i<32;i++){
        Dates.push(i);
    }
    const changeMonth=(e)=>{
        const newDate = new Date(currentDate.setMonth(e));
        setCurrentDate(new Date(newDate));
    }
    const changeYear=(e)=>{
        const newDate = new Date(currentDate.setFullYear(e));
        setCurrentDate(new Date(newDate));
    }
    const changePreviousMonth=()=>{
        changeMonth(currentDate.getMonth() -1 );
    }
    const changeNextMonth=()=>{
        changeMonth(currentDate.getMonth() + 1 );
    }

    const updateCurrentDate=(e)=>{
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), e);
        setCurrentDate(newDate);
        console.log(currentDate);
        handleDueDate(itemid,newDate.toDateString());
        handleShowCalendar(!showCalendar);
    }

    // useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                handleShowCalendar(false);  
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     }
    // }, [handleShowCalendar]); 

    const renderCalendar=()=>{
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        const firstDay = firstDayOfMonth.getDay();
        const totalDays = lastDayOfMonth.getDate();
        const today = new Date();
        const calendarRows=[];
        let daycounter =1;
        for(let i=0;i<6;i++){
            let weekDays=[];
            for(let j=0;j<7;j++){
                if(i==0 && j< firstDay){
                    weekDays.push(<td className="empty-day" key={j}></td>)
                }
                else if(daycounter <= totalDays){
                    if(currentDate.toDateString() === today.toDateString() && today.getDate() == daycounter){
                        weekDays.push(<td key={j} className="days current-date" onClick={(e)=>updateCurrentDate(e.target.innerText)}>{daycounter}</td>)
                    }
                    else{
                        weekDays.push(<td className="days" key={j} onClick={(e)=>updateCurrentDate(e.target.innerText)}>{daycounter}</td>)
                    }
                    daycounter++;
                }
                else {
                    weekDays.push(<td className="empty-day" key={j}></td>);
                }
            }     
            calendarRows.push(<tr key={i}>{weekDays}</tr>);
            if(daycounter == totalDays + 1){
                break;
            }
        }
        return(
            calendarRows
        )
    }
    return ((showCalendar == itemid) &&
        <div className="calendar-container" ref={calendarRef}>
            <div className="header-calendar">
                <FaCaretLeft onClick={()=>changePreviousMonth()}/>
                <div className="data-selector">
                    <select className="month dropdown" value={months[currentDate.getMonth()]} onChange={(e)=>changeMonth(months.indexOf(e.target.value))}>
                        {
                            months.map(month=>
                                (
                                    <option key={month}>{month}</option>
                                ))
                        }
                    </select>
                    <select className="year dropdown" value={currentDate.getFullYear()} onChange={(e)=>changeYear(e.target.value)}>
                        {
                            years().map(year=>(
                                <option key={year}>{year}</option>
                            ))
                        }
                    </select>
                </div>
                <FaCaretRight onClick={()=>changeNextMonth()}/>
            </div>
            <table cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        {
                            Days.map(day=>
                                <th scope="col" key={day}>{day}</th>
                            )
                        }
                    </tr>    
                </thead>
                <tbody>
                    {renderCalendar()}
                </tbody>
            </table>   
            <div className="task-no-due"> 
                <span onClick={()=>handleShowCalendar(!showCalendar)}>No due date</span>
            </div> 
        </div>
    )
};

export default Calendar;
