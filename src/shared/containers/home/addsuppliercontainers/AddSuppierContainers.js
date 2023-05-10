import React, { useEffect, useState } from "react";
import addfromcontai from "./AddSuppierContainers.module.scss";
import FormAdd from "shared/components/formadd/FromAdd";
import ItemInput from "shared/components/Iteminput/ItemInput";
import Dropdown from "shared/components/dropdown/Dropdown";
import DropdownItem from "shared/components/fromitemdropdown/FromItemDropdown";
import Footer from "shared/components/footer/Footer";
import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AppAction from "redux/supplier/action";
function AddsupplierContainer(props){
    let history = useHistory();
    let location =useLocation();
    const [Options ,setOptionsDM] =useState([
        {value:"Danh mục 1",text:"Danh mục 1"},
        {value:"Danh mục 2",text:"Danh mục 2"},
        {value:"Danh mục 3",text:"Danh mục 3"},
        {value:"Danh mục 4",text:"Danh mục 4"},
        {value:"Danh mục 5",text:"Danh mục 5"},
    ])
  
    // const { data , detail , loading } =useSelector(state=>state.App.supplierData);

    const dispatch = useDispatch();
    let { id } = useParams();
     const [recotdata , setrecotdata ] = useState({});
    let recotda = history.location.state
    
    
    useEffect(()=>{
       
        if(recotda){
            setrecotdata(recotda);
        }
    },[]);
    const chaneChangeText = (e,tyle = "" )=>{
       console.log(e.target);
        if(e.target){
            let name = e.target.name;
           let value = e.target.value;
            setrecotdata({...recotdata, [name]: value})
        }else{
            if(tyle){
                setrecotdata({...recotdata, [tyle]: e})
            }
        }
    }
   
    
return <div className={addfromcontai["addsupplier-containers"]}>
        <FormAdd title={<span>Thông Tin Nhà Cung Cấp</span>}>
            <div className={addfromcontai["fromaddsupplier"]}>
                <ItemInput
                title="Tên nhà cung cấp"
                valide ="*"
                name="Name"
                className="item-tenncc"
                placeholder="Nhập tên nhà cung cấp"
                value={recotdata.Name}
                onChange={(e) => chaneChangeText(e, "Name")}
                ></ItemInput>
                <DropdownItem placeholder={"Danh mục"} id="danhmuc" name="danhmuc"
                Options = {Options}
                title="Danh Mục"
                valide="*"
                top="199px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                value={recotdata.cate}
                onChange={(e) => chaneChangeText(e, "danhmuc")}
                >
                    <span>{recotdata.cate ?? "Danh Mục"}</span>
                </DropdownItem>
                <ItemInput
                title="Số điện thoại"
                valide ="*"
                name="phone"
                className="item-tenncc"
                placeholder="Nhập số điện thoại"
                value={recotdata.phone}
                 onChange={(e) => chaneChangeText(e, "phone")}
                ></ItemInput>
            </div>
            <div className={addfromcontai["fromaddsupplier"]}>
                <ItemInput
                title="Mã code"
                valide ="*"
                name="code"
                className="item-tenncc"
                placeholder="abc@gmail.com"
                value={recotdata.code}
                onChange={(e) => chaneChangeText(e, "code")}
                ></ItemInput>
                <DropdownItem placeholder={"Nhập mã công nợ"} id="congno" name="congno"
                Options = {Options}
                title="Công nợ"
                valide="*"
                top="278px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                value={recotdata.codeCN}
                ></DropdownItem>
                <ItemInput
                title="Email"
                valide ="*"
                name="email"
                className="item-tenncc"
                placeholder="abc@gmail.com"
                value={recotdata.email}
                onChange={(e) => chaneChangeText(e, "email")}
                ></ItemInput>
            </div>
            <div className={addfromcontai["fromaddsupplier"]}>
            <DropdownItem placeholder={"Phường/ Xã"} id="congno" name="congno"
                Options = {Options}
                title="Tỉnh/ Thành phố"
                valide="*"
                top="359px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                value={recotdata.provin}
                ></DropdownItem>
                <DropdownItem placeholder={"Tỉnh/ Thành phố"} id="congno" name="congno"
                Options = {Options}
                title="Quận/ Huyện"
                valide="*"
                top="359px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                value={recotdata.distri}
                ></DropdownItem>
                <DropdownItem placeholder={"Quận/ Huyện"} id="congno" name="congno"
                Options = {Options}
                title="Phường/ Xã"
                valide="*"
                top="359px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                value={recotdata.war}
                ></DropdownItem>
            </div>
            <div className={addfromcontai["fromaddsupplier"]}>
                <ItemInput
                title="Địa chỉ cụ thể"
                name="address"
                className="item-tenncc"     
                placeholder="Nhập địa chỉ cụ thể"
                value={recotdata.address}
                onChange={(e) => chaneChangeText(e, "address")}
                ></ItemInput>
                <DropdownItem placeholder={"Giao Dịch"} id="congno" name="congno"
                Options = {Options}
                title="Trạng thái"
                
                top="438px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                value={recotdata.status==2 ? "Tạm Dừng":"Giao dịch"}
                ></DropdownItem>
                
            </div>
            
        </FormAdd>
        <Footer>
                <div className={addfromcontai["footer-left"]}>
                    <button className={addfromcontai["reset_btn"]} onClick={() =>
                    {
                        history.goBack()
                    }}>
                <img src='images/icon-exit.svg' className='icon_ ' style={{ width: "24px", height: "24px" }} />
                <span className='footer-left-text' >Quay lại</span></button>

                </div>
                <div className={addfromcontai["footer-right"]}> 
                    
                        <button className={addfromcontai["footer-right-btn-detele"]}> 
                            <span className={addfromcontai["footer-right-text-detele"]}> Hủy Bỏ</span>
                        </button>
                        <button className={addfromcontai["footer-right-btn-update"]}> 
                        <span className={addfromcontai["footer-right-text-update"]}>Lưu</span>
                        </button>
                    

                </div>



            </Footer>
        
</div>
        

}
export default AddsupplierContainer