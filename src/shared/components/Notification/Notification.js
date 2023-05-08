import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';

import "./style.scss"
function Notification(props)
{

   
    const Notifis = { amount: 0, top: 55 };
    
    const checkAmountNoti = () =>
    {
        Notifis.amount++;
        Notifis.top = Notifis.amount * Notifis.top;
        return Notifis
    }
    const AnimateProcess = () =>
    {

        console.log('====================================');
        console.log(Notifis);
        console.log('====================================');
    }
    const SetTimeoutNoti = (item) =>
    {

        setTimeout(() =>
        {
            item.classList.add("hide")
            setTimeout(() =>
            {
                item.remove()
            }, 50000)

        }, 150000);
    }
    return {
        Notifis: Notifis,
        warnning: (props) =>
        {
            const i = checkAmountNoti();
            document.body.insertAdjacentHTML("beforeend", `<div class='notification_' id="notification_${i.amount}" style="top:${i.top}px"></div>`)
            const myDiv = document.getElementById(`notification_${i.amount}`);
            myDiv.classList.add("show");
            ReactDOM.render(<Warnning  {...props} color={"#FFCD29"} />, myDiv);


        },
        primary: (props) =>
        {
            const i = checkAmountNoti();
            document.body.insertAdjacentHTML("beforeend", `<div class='notification_' id="notification_${i.amount}"></div>`)
            const myDiv = document.getElementById(`notification_${i.amount}`);
            myDiv.classList.add("show");
            ReactDOM.render(<Primary  {...props} color={"#3078F1"} />, myDiv);

            SetTimeoutNoti(myDiv)

        },
        success: (props) =>
        {
            checkAmountNoti();
            const i = checkAmountNoti();
            document.body.insertAdjacentHTML("beforeend", `<div class='notification_' id="notification_${i}"></div>`)
            const myDiv = document.getElementById(`notification_${i}`);
            myDiv.classList.add("show");
            ReactDOM.render(<Primary  {...props} color={"#138300"} />, myDiv);
            SetTimeoutNoti(myDiv)
        }
    }
}
function NotificationWrrap(props)
{
    return (<div className={`notification`} id='notification' style={{ borderBottom: `4px solid ${props?.color}` }}>
        {props.children}
    </div>)
}
function Warnning(props)
{
    return (
        <NotificationWrrap {...props}>
            <div className={`notification-warning notification_item`} id='notification-warning' >
                {props.icon && <div className='icon_no'>{props.icon}</div>}
                {!props.icon && <div className='icon_no'><img src='images/ic_question.svg' className='icon_' /> </div>}
                {props.content && <div className='content_no'>{props.content}</div>}
                {props.action && <div className='action_no'>{props.action}</div>}
            </div>
        </NotificationWrrap >
    )
}

function Primary(props)
{
    return (
        <NotificationWrrap {...props}>
            <div className={`notification-warning notification_item`} id='notification-warning'>
                {props.icon && <div className='icon_no'>{props.icon}</div>}
                {!props.icon && <div className='icon_no'><img src='images/ic_question.svg' className='icon_' /> </div>}
                {props.content && <div className='content_no'>{props.content}</div>}
                {props.action && <div className='action_no'>{props.action}</div>}
            </div>
        </NotificationWrrap >
    )
}
// const Notification = () => { return Notification() };
export default Notification();