import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../dropdown/Dropdown';
import InputSeach from '../inputseach/InputSeach';
// import Notification from '../Notification/Notification';

import seach from "./Search.module.scss"
import Popover from '../popover/Popover';
function Search(props)
{
    const {titel_chitiet} = props;
 
    const [Options, setOptions] = useState([
        { value: 1, text: "trạng thái 1" },
        { value: 2, text: "trạng thái 2" },
        { value: 3, text: "trạng thái 3" }
    ]);
    const [Optionss, setOptionss] = useState([
        {value:1,title:"Giao dịch"},
        {value:2,title:"Tạm dừng"}
    ])
    const [ValueStatus, setValueStatus] = useState(false);
    const [ValueAddress, setValueAddress] = useState(false);
    const [ValueSearch, setValueSearch] = useState(false);
    const [isChangeData, setisChangeData] = useState(false);
    const onchangeStatuss = (e) =>
    {


        dispatch({
            type: AppAction.FETCH_PUT_DATA,
            payload: {
                data: { ...record, status: e }
            }
        })
        setisChangeData(true);
    }
    // const popRef = useRef()
    useEffect(() =>
    {

    }, []);

    const onchangeStatus = (e) =>
    {
console.log(e);
        setValueStatus(e)

    }
    const onchangeAddress = (e) =>
    {
        setValueAddress(e)

    }
    const onchangeSearch = (e) =>
    {
        setValueSearch(e.target.value)

    }
    const resetitem = ()=>{
        setValueSearch("");
        setValueAddress("");
        setValueStatus("");
    }
    if(titel_chitiet == undefined ){
    return (
        <div className={`${seach["Search"]} ${seach["stand_radius"]}`} id={seach['search']} >
            <div className={seach['inputs_']}>
                <InputSeach className={`${seach["search_input"]} ${seach["inputs_item"]}`}
                    placeholder={"Tìm kiếm mã NCC, tên NCC, email, "} id="sa" name="sa"
                    onChange={onchangeSearch}
                    value={ValueSearch}
                />
                <Dropdown className={`${seach["_select_input"]} ${seach["inputs_item"]}`} placeholder={"Trạng thái "} id="status" name="status"
                    Options={Options}
                    onChange={onchangeStatus}
                    value={ValueStatus.text}
                    isHover={true}
                    icon={"images/icon-statuscenter.svg"}
                />

                <Dropdown className={`${seach["_select_input"]} ${seach["inputs_item"]}`} placeholder={"Địa chỉ "} id="address" name="address"
                    Options={Options}
                    onChange={onchangeAddress}
                    value={ValueAddress.text}
                    isHover={true}
                    icon={"images/icon-statuscenter.svg"}
                />
            </div>

            <div className={seach["action_btn"]}>
                <button className={seach['btn-setup-reset']}
                onClick={()=>{
                    resetitem();
                }}>
                    Thiết lập lại</button>
                <button className={seach['btn-setup-seach']}>Tìm kiếm</button>
                <button className={seach['btn-setting']}>
                    <img src='images/icon-caidat.svg' className={seach['icon_btn-setting']} />
                </button>

                <button className={seach["btn-seedetail"]}>
                    <img src='images/icon-xemchitiet.svg' className={seach["icon_btn-seedetail"]} />
                </button>
            </div>
        </div>
    )
}else{
    return <div className={`${seach["Search"]} ${seach["stand_radius"]}`}  id={seach["search_chitiet"]} >
            <div className={seach['inputs_chitiet']}>
                <Popover
                title={""}
                body={
                    <div className={seach['btn-chitiet']} style={{display:"flex",flexDirection:"column"}}>
                        {Optionss && Optionss.map((item,idel)=>{
                            let textAlign = item.value===1? seach["text-success"] : seach["text-danger"] ;
                            return <button className={seach['btn-status-chitiet']} onClick={() =>
                                {
                                    onchangeStatuss(item.value)
                                }}>
                                <span className={textAlign}>{item.title}</span>

                            </button>
                            
                        })}

                    </div>
                }
                style={{width: "95px",height: "auto",}}
                >
                    <button className={seach['btn-reset-chitiet']}>
                        <img src='images/icon_change.svg' className={seach['icon_']} style={{ width: "24px", height: "24px" }} />
                        <span className=''>Trạng Thái</span>
                    </button>
                    
                </Popover>
            </div>
        </div>
}
}


export default Search;