import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    fetchSample: (data) =>
    {
        console.log(data)
        return {
            Data: {}
        };
     
        // // return ApiOperation.request({
        // //     url: ApiConstants.LOGIN_,
        // //     method: 'POST',
        // //     data: data.payload
        // // });
        // return ApiOperation.request({
        //     url: ApiConstants.CREATE_CATEGORY,
        //     method: 'GET',
        //     // data: data.payload
        // });
    },
    updateSample: (data) =>
    {
        return {
            Data: {}
        };
        // return ApiOperation.request({
        //     url: ApiConstants.CREATE_CATEGORY,
        //     method: 'POST',
        //     data: data
        // });
    },
}

export default AppFactory