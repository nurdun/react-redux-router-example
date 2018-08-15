//login API
import {serverPath} from './const'

class LoginApi{
    static getUserData(){
        return fetch(`${serverPath}/test.json`)
        .then(data=>{
            return data.json();
        }).catch(err=>{
            return err;
        })
    }
}

export default LoginApi;