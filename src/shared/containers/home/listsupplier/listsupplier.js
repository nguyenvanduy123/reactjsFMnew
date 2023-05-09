import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import AppAction from 'redux/supplier/action';
import App from 'App';
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import "./listsupplier.scss";
import Table from 'shared/components/Table/Table';
import ButtonDropdown from 'shared/components/buttondropdown/ButtonDropdown';
import Popover from 'shared/components/Popover/Popover';
import Pagination from 'shared/components/Pagination/Pagination';
import Notification from 'shared/components/Notificationtest/Notificationtest';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import RouterPath from 'router/RouterPath';
function Listsupplier(props)
{
    let location = useLocation();
    let history = useHistory();
    const dispatch = useDispatch()
  
    const { data , loading } = useSelector(state => state.App.supplierData)
   
    let path = history.location
    
    const [Options, setOptions] = useState([
        { value: 1, text: "Giao dịch" },
        { value: 2, text: "Tạm dừng" },

    ]);
    const [OptionsPagi, setOptionsPagi] = useState([]);
   
    const [ValueSelectLimit, setValueSelectPage] = useState({});
    const [ValueStatus, setValueStatus] = useState({ value: "", text: "chọn trạng thái" },);
    const [CurrentPage, setCurrentPage] = useState(1);
  
    const [TotalRecord, setTotalRecord] = useState(0);
    const [isChangeData, setisChangeData] = useState(false);
    const [isChangeIndex, setisChangeIndex] = useState("");
    
    const [Colums, setColums] = useState([
        {
            title: 'Mã NCC',
            dataIndex: 'codeNCC',
            style: {
                textAlign: "center"
            },
            render: (text, record) =>
            {
                return <span style={{ color: "#0054E1" }}>{text}</span>
            }
        },
        {
            title: 'Tên nhà cung cấp',
            dataIndex: 'Name',
            style: {
                textAlign: "left"
            },
            render:(text,reid)=>{
               
                // return <Link to={RouterPath["detail"].replace("/:id","/")+`${reid.id}`}>{text}</Link>
                return <span onClick={()=>{history.push(RouterPath["detail"].replace("/:id","/")+reid.id,reid)}} style={{cursor: "pointer"}}>{text}</span>
            }

        },
        {
            title: 'Danh mục',
            dataIndex: 'cate',
            style: {
                textAlign: "left"
            }
        },
        {
            title: 'Mã code',
            dataIndex: 'code',
            style: {
                textAlign: "center"
            }
        },
        {
            title: 'Mã công nợ',
            dataIndex: 'codeCN',
            style: {
                textAlign: "left"
            },
            render: (text, record) =>
            {
                return <span style={{ color: "#0054E1" }}>{text}</span>
            }
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',
            style: {
                textAlign: "left"
            }
        },

        {
            title: 'Email',
            dataIndex: 'email',
            style: {
                textAlign: "left"
            }
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            style: {
                textAlign: "left"
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            style: {
                textAlign: "center"
            },
            render: (text, record, index) =>
            {
                return <ButtonDropdown className="_select_input inputs_item" placeholder={"Trạng thái "} id="status" name="status"
                    Options={Options}
                    onChange={(e) => { onchangeStatus(e, record, index) }}
                    value={text}
                    style={{
                        backgroundColor: text === 1 ? "#008A5A" : "#F85555",
                    }}
                    icon={"images/icon-status.svg"}
                    isHover={false}
                >
                    <button className='reset_btn text-white font-weigth-600'>{getStatusText(text)}</button>
                </ButtonDropdown>
            }
        },
        {
            title: 'Tác vụ',
            dataIndex: '',
            style: {
                textAlign: "center"
            },
            render: (text, record, index) =>
            {
                return <Popover
                    title={""}
                    body={
                        <div className='btn_action_table' style={{ display: "flex", flexDirection: "column" }}>
                            <button className='reset_btn'>
                                <img src='images/icon-edit.svg' className='icon_' style={{ width: "16px", height: "16px" }} />
                                <span className='text-success'>Sửa</span>
                            </button>
                            <button className='reset_btn' >
                                <img src='images/icon-delete.svg' className='icon_' style={{ width: "16px", height: "16px" }} />
                                <span className='text-danger'>Xóa</span>
                            </button>
                        </div>
                    }
                    style={{
                        width: "130px",
                        height: "auto",
                    }}
                    // isHover={true}
                    left={"-320%"}
                    top={"-30px"}
                >
                    <button className='reset_btn' style={{ cursor: "pointer" }}><img src='images/iconpopeve.svg' className='icon_' style={{ width: "24px", height: "24px" }} /></button>
                </Popover>
            }
        }
    ]);
    const [Data,setdata]=useState([]);
    const [DataRow, setDataRow] = useState([]);
    const [DataRowShow, setDataRowShow] = useState([]);
    useEffect(() =>
    {

        dispatch({
            type: AppAction.FETCH_GET_DATA,
            payload: {
                data: {}
            }
        })
       

       
          setDataRow(data);
       

    }, [])
    
    useEffect(() =>
    {
        setTotalRecord(DataRow.length)

        renderOptionlimit();

    }, [DataRow])
    useEffect(() =>
    {
        const indexOfLastData = CurrentPage * ValueSelectLimit.value;
        const indexOfFirstData = indexOfLastData - ValueSelectLimit.value;
        const currentData = DataRow.slice(indexOfFirstData, indexOfLastData);
        setDataRowShow(currentData)
    }, [ValueSelectLimit, CurrentPage])
    useEffect(() =>
    {
        if (DataRowShow[isChangeIndex]) {
            DataRowShow[isChangeIndex].status = ValueStatus
            setDataRowShow(DataRowShow)
            setisChangeData(!isChangeData)
        }


    }, [isChangeIndex, ValueStatus])

    const renderOptionlimit = () =>
    {
        const result = [];

        const dataLen = DataRow.length;

        for (let i = 1; i <= 10; i++) {

            const dataPerpage = Math.ceil(((dataLen) / 10)) * i

            result.push({ value: dataPerpage, text: dataPerpage });

        }
        setValueSelectPage(result[0]);
        setOptionsPagi(result);
    }
    const getStatusText = (e) =>
    {
        return (Options.filter(item =>
        {
            return e === item.value
        }))[0].text
    }
    const onchangeStatus = (e, item, index) =>
    {

        setisChangeIndex(index)
        setValueStatus(e)
        setisChangeData(!isChangeData)

    }
    const onChangeCheck = (e) =>
    {
       
    }
    const onChangeSelectNumPages = (e) =>
    {
        setValueSelectPage(e)

    }
    const OnchangePage = (e, i) =>
    {
        setCurrentPage(i)

    }
    const OnchangePageNext = (e, i) =>
    {
        setCurrentPage(i)

       

    }
    const OnchangePagePre = (e, i) =>
    {
       
        setCurrentPage(i)

    }


    return (
        <div className="HomeContainer">
            
            <Table
                Colums={Colums}
                DataRow={DataRowShow}
                ischeckbox={true}
                isboder={false}
                onChangeCheck={onChangeCheck}
                WrapperStyle={{
                    // minHeight: "528px"
                }}
            />
        
            <Pagination style={{ marginTop: "5px" }}
                Options={OptionsPagi}
                OnChangeSelectNumPages={onChangeSelectNumPages}

                ValueSelectLimit={ValueSelectLimit}
                CurrentPage={CurrentPage}
                ShowStatus={true}
                LimitButton={10}
                OnclickButtonChangePage={OnchangePage}
                ShowNextPre={true}
                OnclickButtonNext={OnchangePageNext}
                OnclickButtonPre={OnchangePagePre}
                TotalRecord={TotalRecord}
            />
        </div>
    )
}
export default Listsupplier;