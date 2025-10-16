import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";

// Add resume to the server(/resume) - POST - reqBody
// Its called by steps component

export const addResumeAPI = async (resumeData) =>{
    return await commonAPI('POST', `${serverURL}/resumes`, resumeData)
}

// Add resume to the server(/history) - POST - reqBody
// Its called by steps component

export const addHistoryAPI = async (resumeData) =>{
    return await commonAPI('POST', `${serverURL}/history`, resumeData)
}

// get resume from the server(/history) - GET - 
// Its called by steps component

export const getHistoryAPI = async () =>{
    return await commonAPI('GET', `${serverURL}/history`, {})
}

// delete resume from the server(/history) - DELETE - 
// Its called by steps component

export const deleteHistoryAPI = async (id) =>{
    return await commonAPI('DELETE', `${serverURL}/history/${id}`, {})
}

// get a pirticular resume from the server(/history) - GET - 
// Its called by steps component

export const getAResumeHistoryAPI = async (id) =>{
    return await commonAPI('GET', `${serverURL}/history/${id}`, {})
}

// Update resume

export const updateResumeAPI = async(id,editData) =>{
    return await commonAPI('PUT', `${serverURL}/resumes/${id}`,editData)
}