import axios from "axios";

const commonAPI = async(httpMethod,url,reqBody) => {
    const reqConfig ={
        method: httpMethod,
        url,
        data: reqBody
    }

    // API cla  using axios

    return await axios(reqConfig).then(res =>{
        return res
    })
    .catch (err =>{
        return err
    })
}

export default commonAPI