const { CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAIL } = require("./bookActions")
const axios=require('axios')
const createBookAction=(bookData)=>{
    return async dispatch=>{
       try {
        dispatch({
            type:CREATE_BOOK_REQUEST,
        })

        const config={
            'Content-type':'application/json',
        }
        const {data}=await axios.post('/api/books',bookData,config);
dispatch({
    type:CREATE_BOOK_SUCCESS,
    payload:data,
})

       } catch (error) {
        dispatch({
            type:CREATE_BOOK_FAIL,
            payload:error.response && error.response.data,
            
        })
       }
    }
}
export {createBookAction };