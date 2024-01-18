import axios from "axios"
import swal from 'sweetalert'

export function addNewUser(data) {
    return dispatch => {
        axios.post("http://localhost:8080/api/user/sighin", data)
            .then(x => {
                dispatch({ type: 'SET_USER', payload: x.data })
                swal("ברוך הבא",x.data.Name,"success")
            })
            .catch(err => swal("החיבור נכשל"," המידע שנשלח אינו תקין","error")).finally()


    }
}