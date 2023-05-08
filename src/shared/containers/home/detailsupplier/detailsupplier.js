import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppAction from "redux/app/action";
import FormDetail from "shared/components/formdetail/FormDetail";
import Footer from "shared/components/footer/Footer";
import detailscss from "./detailsupplier.module.scss";
function Detailsupplier(props){
    let location = useLocation();
    let history = useHistory();
    let { id } = useParams();
    
    const dispatch = useDispatch()
   
    let ncc = history.location.state
   
    const [isChangeData, setisChangeData] = useState(false);
    const [showdetail,setshowdetail] = useState([]);
    const [record, setRecord] = useState([]);
    
    
    useEffect(()=>{
        if(ncc){
            setRecord(ncc);
            setshowdetail([
                {lable:"Tên nhà cung cấp ",text:ncc.Name},
                {lable:"Trạng thái ",text:ncc.status == 2 ? <span style={{ color: "rgba(255, 52, 52, 1)" }}>Tạm dừng</span> : <span style={{ color: "#138300" }}>Giao dịch</span> },
                {lable:"Danh mục ",text:ncc.cate},
                {lable:"Tỉnh/ Thành phố ",text:ncc.provin},
                {lable:"Điện thoại ",text:ncc.phone},
                {lable:"Quận/Huyện ",text:ncc.distri},
                {lable:"Email ",text:ncc.email},
                {lable:"Phường/Xã ",text:ncc.war},
                {lable:"Công nợ ",text:ncc.codeCN},
               {lable:"Địa chỉ cụ thể ",text:ncc.address},
                {lable:"Mã code ",text:ncc.code},
            ])
            setisChangeData(false)

        }
    },[ncc])
    const reset = ()=>{
        setshowdetail([]);
        setRecord([]);
    }

    return<div className={`${detailscss["FormDetail-content-container"]}`}>
            <FormDetail 
                title="Thông tin nhà cung cấp"
                data={showdetail}

            ></FormDetail>
            <Footer>
                <div className={detailscss["footer-left"]}>
                    <button className={detailscss["reset_btn"]} onClick={() =>
                    {
                        history.goBack()
                    }}>
                <img src='images/icon-exit.svg' className='icon_ ' style={{ width: "24px", height: "24px" }} />
                <span className='footer-left-text' >Quay lại</span></button>

                </div>
                <div className={detailscss["footer-right"]}> 
                    
                        <button className={detailscss["footer-right-btn-detele"]}> 
                            <span className={detailscss["footer-right-text-detele"]}> Xóa</span>
                        </button>
                        <button className={detailscss["footer-right-btn-update"]}> 
                        <span className={detailscss["footer-right-text-update"]}>Sửa</span>
                        </button>
                    

                </div>



            </Footer>
        

    </div>
}
export default Detailsupplier