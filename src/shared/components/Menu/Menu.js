import React, { useState } from 'react';
import "./Menu.scss"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Menu(props)
{
    let history = useHistory();
    const dispatch = useDispatch()
    const { data, loading } = useSelector(state => state.App.sampleData)
    const [Options,setOptions] = useState([
        {id:1,text:"Tổng quan",link:"/tongquan" , icon:"images/Icon-tongquan.svg"},
        {id:2,text:"Danh mục NCC",link:"/danhmucncc",icon:"images/Icon-danhmuc.svg"},
        {id:3,text:"Danh sách NCC",link:"/nhacungcap",icon:"images/icon-dscungcap.svg"},
        {id:4,text:"Lịch sử đặt hàng",link:"/lichsudathang",icon:"images/Icon-lsdh.svg"},
        {id:5,text:"Bảng báo giá",link:"/bangbaogia",icon:"images/Icon-banggia.svg"},
        {id:6,text:"Lịch sử theo dõi",link:"/lichsutheodoi",icon:"images/Icon-lstd.svg"},
    ]);
    const [path,SetPath] = useState(history.location.pathname)

    
    return (
        <div className="Menu-bar" id='menu-bar'>
            <div className='top-menu'>
                <button className='reset-btn'>
                    <img src='images/Icon-menu.svg' className='icon_btn ' />
                </button>
                <a className='logo-fm'>
                    <img src='images/Logo-fm.svg' className='icon_logo' />
                </a>
            </div>
            <ul className='menu-con'>
                {Options && Options.map((item,el)=>{
                    let active = "";
                    if (item.link == path || path.includes(item.link)) {
                        active = "active"
                    }
                    return<li key={item.id} className={`liitem ${active}`}>
                        <a href={item.link}>
                        <img src={item.icon} className='icon_ds ' />
                            <span>{item.text}</span>
                        </a>
                    </li>


                })}
                
            </ul>

        </div>
    )
}
export default Menu;