import React, { useState } from "react";
import RouterPath from "router/RouterPath";
import Routes from "router/Routes";
import Detailsupplier from "shared/containers/home/detailsuppliercontainers/DetailSupplier";
import Search from "shared/components/search/Search";
import detail from './detailsupplier.module.scss'; 

function Detailsupplierr(props){
    const titel_chitiet = 1;
    
  
return<div className={detail["detailcontainer"]}>
    <Search titel_chitiet={titel_chitiet}/>
    <Detailsupplier></Detailsupplier>
    
</div>
}
export default Detailsupplierr