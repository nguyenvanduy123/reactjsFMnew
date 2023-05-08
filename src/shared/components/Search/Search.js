import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import InputSeach from '../InputSeach/InputSeach';
// import Notification from '../Notification/Notification';

import "./style.scss"
import Popover from '../Popover/Popover';
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

        setValueStatus(e)

    }
    const onchangeAddress = (e) =>
    {
        setValueAddress(e)

    }
    const onchangeSearch = (e) =>
    {
        setValueSearch(e)

    }
    if(titel_chitiet == undefined ){
    return (
        <div className={`Search stand_radius`} id='search' >
            <div className='inputs_'>
                <InputSeach className="search_input inputs_item"
                    placeholder={"Tìm kiếm mã NCC, tên NCC, email, "} id="s" name="s"
                    onChange={onchangeSearch}
                    value={ValueSearch}
                />
                <Dropdown className="_select_input inputs_item" placeholder={"Trạng thái "} id="status" name="status"
                    Options={Options}
                    onChange={onchangeStatus}
                    value={ValueStatus.text}
                    isHover={true}
                    icon={<img src='images/icon-statuscenter.svg' className='icon_' />}
                />

                <Dropdown className="_select_input inputs_item" placeholder={"Địa chỉ "} id="address" name="address"
                    Options={Options}
                    onChange={onchangeAddress}
                    value={ValueAddress.text}
                    isHover={true}
                    icon={<img src='images/icon-statuscenter.svg' className='icon_' />}
                />
            </div>

            <div className='action_btn '>
                <button className='btn-setup-reset'>Thiết lập lại</button>
                <button className='btn-setup-seach'>Tìm kiếm</button>
                <button className='btn-setting '>
                    <img src='images/icon-caidat.svg' className='icon_btn-setting' />
                </button>

                <button className='btn-seedetail '>
                    <img src='images/icon-xemchitiet.svg' className='icon_btn-seedetail ' />
                </button>
            </div>
        </div>
    )
}else{
    return <div className={`Search stand_radius`} id='search_chitiet' >
            <div className='inputs_chitiet'>
                <Popover
                title={""}
                body={
                    <div className='btn-chitiet' style={{display:"flex",flexDirection:"column"}}>
                        {Optionss && Optionss.map((item,idel)=>{
                            let textAlign = item.value===1?"text-success":"text-danger";
                            return <button className='btn-status-chitiet' onClick={() =>
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
                    <button className='btn-reset-chitiet'>
                        <img src='images/icon_change.svg' className='icon_' style={{ width: "24px", height: "24px" }} />
                        <span className=''>Trạng Thái</span>
                    </button>
                    
                </Popover>
            </div>
        </div>
}
}


export default Search;