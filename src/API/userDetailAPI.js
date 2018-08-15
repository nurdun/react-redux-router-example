
import {serverPath} from './const'
class UserDetail{
    static getUserDetail(){
        return fetch(`${serverPath}/userDetail.json`)
        .then(data=>{
            return data.json();
        }).catch(err=>{
            return err;
        })
    }
}

export default UserDetail;