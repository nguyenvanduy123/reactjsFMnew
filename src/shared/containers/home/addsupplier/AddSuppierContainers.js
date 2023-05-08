import React, { useState } from "react";
import addfromcontai from "./AddSuppierContainers.module.scss";
import FormAdd from "shared/components/formadd/FromAdd";
import ItemInput from "shared/components/Iteminput/ItemInput";
import Dropdown from "shared/components/Dropdown/Dropdown";
import DropdownItem from "shared/components/fromitemdropdown/FromItemDropdown";
import Footer from "shared/components/footer/Footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function AddsupplierContainer(props){
    let history = useHistory();
    const [Options ,setOptionsDM] =useState([
        {id:1,text:"Danh mục 1"},
        {id:2,text:"Danh mục 2"},
        {id:3,text:"Danh mục 3"},
        {id:4,text:"Danh mục 4"},
        {id:5,text:"Danh mục 5"},
    ])

return <div className={addfromcontai["addsupplier-containers"]}>
        <FormAdd title={<span>Thông Tin Nhà Cung Cấp</span>}>
            <div className={addfromcontai["fromaddsupplier"]}>
                <ItemInput
                title="Tên nhà cung cấp"
                valide ="*"
                className="item-tenncc"
                placeholder="Nhập tên nhà cung cấp"
                ></ItemInput>
                <DropdownItem placeholder={"Danh mục"} id="danhmuc" name="danhmuc"
                Options = {Options}
                title="Danh Mục"
                valide="*"
                top="199px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                ></DropdownItem>
                <ItemInput
                title="Số điện thoại"
                valide ="*"
                className="item-tenncc"
                placeholder="Nhập số điện thoại"
                ></ItemInput>
            </div>
            <div className={addfromcontai["fromaddsupplier"]}>
                <ItemInput
                title="Mã code"
                valide ="*"
                className="item-tenncc"
                placeholder="abc@gmail.com"
                ></ItemInput>
                <DropdownItem placeholder={"Nhập mã công nợ"} id="congno" name="congno"
                Options = {Options}
                title="Công nợ"
                valide="*"
                top="278px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                ></DropdownItem>
                <ItemInput
                title="Email"
                valide ="*"
                className="item-tenncc"
                placeholder="abc@gmail.com"
                ></ItemInput>
            </div>
            <div className={addfromcontai["fromaddsupplier"]}>
            <DropdownItem placeholder={"Phường/ Xã"} id="congno" name="congno"
                Options = {Options}
                title="Tỉnh/ Thành phố"
                valide="*"
                top="359px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                ></DropdownItem>
                <DropdownItem placeholder={"Tỉnh/ Thành phố"} id="congno" name="congno"
                Options = {Options}
                title="Quận/ Huyện"
                valide="*"
                top="359px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                ></DropdownItem>
                <DropdownItem placeholder={"Quận/ Huyện"} id="congno" name="congno"
                Options = {Options}
                title="Phường/ Xã"
                valide="*"
                top="359px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
                ></DropdownItem>
            </div>
            <div className={addfromcontai["fromaddsupplier"]}>
                <ItemInput
                title="Địa chỉ cụ thể"
              
                className="item-tenncc"
                placeholder="Nhập địa chỉ cụ thể"
                ></ItemInput>
                <DropdownItem placeholder={"Giao Dịch"} id="congno" name="congno"
                Options = {Options}
                title="Trạng thái"
                
                top="438px"
                icon={<img src='images/icon-statuscenter.svg' className='icon_danhmuc' />}
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