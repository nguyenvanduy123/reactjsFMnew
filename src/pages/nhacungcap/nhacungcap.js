import React from "react";
import Table from "shared/components/Table/Table";
import Search from "shared/components/search/Search";
import Listsupplier from "shared/containers/home/listsupplier/listsupplier";
import './nhacungcap.scss';
function Nhacungcap(props){
    return(
        <div className="nhacungcap">
            <Search/>
            <Listsupplier />
        </div>
    )
}
export default Nhacungcap