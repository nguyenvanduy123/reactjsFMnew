import React from 'react';
import Brearumb from '../breacrumb/Breacrumb';
import Popover from '../Popover/Popover';
 
import "./Topbar.scss"
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import RouterPath from 'router/RouterPath';

function Topbar(props)
{
    let history = useHistory();
    let location = useLocation();
    const { title_topbar} = props;

    const past = location.pathname ? location.pathname.split("/"):[];
   
    const pasts = past.filter(function(eleme){
        return eleme !=="";

    });
    let pathtile= ["Nhà Cung Cấp"];
    let pathps =[];
    let path_s="";

    pasts.map((item , indel)=>
    {
       path_s += "/"+item
       pathps.push(path_s)
       if(indel == (pasts.length -1)){
            return
       }
       if(title_topbar[path_s]){
        pathtile.push(title_topbar[path_s])
        }
      
    });
    
     pathtile.push(title_topbar[location.pathname]);

   

    return (
        <div className="Topbar" id='topbar'>
            <div className='left'>
                <Popover
                    title={""}
                    body={
                        <div className='pop_btn_addnew'>
                            <button onClick={()=>{history.push(RouterPath["addncc"])}} className='reset_btn-addnewncc'>Tạo nhà cung cấp</button>
                        </div>
                    }
                    style={{
                        width: "190px",
                        height: "60px",
                    }}
                    isHover={false}
                >
                    <button className='reset_btn-addnew'>  <img src='images/icon-themmoi.svg' className='icon_ logo' /></button>
                </Popover>

                <h4 className='title_text'>Bán hàng</h4>
                <div className='line_v'></div>
                <Brearumb  pathps={pathps} pathtile={pathtile} className={"title2_text"} />
            </div>
            <div className='right'>
                <div className='menu_top_right'>
                    <button className='reset_btn menu_top_right_item'> <img src='images/icon-menu1.svg' className='icon_' /></button>
                    <button className='reset_btn menu_top_right_item'> <img src='images/icon-menu2.svg' className='icon_' /></button>
                    <button className='reset_btn menu_top_right_item'> <img src='images/icon-menu3.svg' className='icon_' /></button>
                    <button className='reset_btn menu_top_right_item'> <img src='images/icon-menu4.svg' className='icon_' />
                        <span className='note'>12</span>
                    </button>
                    <button className='reset_btn menu_top_right_item'> <img src='images/icon-menu5.svg' className='icon_' /></button>

                </div>
                <div className='btn_user'>
                    <button className='reset_btn menu_top_right_item'> <img src='images/icon-user.svg' className='icon_' /></button>
                </div>
            </div>
        </div>
    )
}
export default Topbar;