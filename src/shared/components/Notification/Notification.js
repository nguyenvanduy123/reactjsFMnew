import React, { useState,useEffect } from "react";
import notifiscss from "./Notification.module.scss";

function Notification(props){
    const {showbt,setShowbt} = props
    const [type,setType] = useState(true)
    const [show,setShow] = useState(showbt)

    useEffect(()=>{
        setShow(showbt)
    },[showbt])


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowbt(false)
            setType(true)
            setShow(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [show]);
    return (
        type?<Notifidetele />:<NotifiSuccess />
    )
///thông báo xóa
function Notifidetele(){
    return show && <div className={`${notifiscss["notification"]} ${props.classNameBody ?? ""} 
    ${show ? notifiscss["show"] : ""}`} 
    style={{width:'274px',borderBottom:'4px solid #3078F1',opacity:'1'}}>
        <div className={notifiscss["delete"]}>
        <img src="images/Iconxacnhan.svg" alt="" />
        <span>Đang xóa nhà cung cấp</span>
        <button onClick={()=>{setType(false);setShow(true);}}>Hoàn tác</button>
    </div></div>
}
function NotifiSuccess(){
    return show &&  <div className={`${notifiscss["notification"]} ${props.classNameBody ?? ""} 
    ${show ? notifiscss["show"] : ""}`} style={{width:'240px',borderBottom:'4px solid #138300',opacity:'1'}}>
        <div className={notifiscss["success"]}>
    <div className={notifiscss["success-contain"]}>
        <img src="images/iconluuthanhcong.svg" alt="" />
        <span>Hoàn tác</span>
    </div>
    <div className={notifiscss["success-iconclose"]}>
        <img src="images/Iconclosemini.svg" alt="" onClick={()=>{ setShowbt(false);setType(true);setShow(false)}}/>
    </div>
</div></div>
}

}
export default Notification