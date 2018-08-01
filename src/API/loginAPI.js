//login API

class LoginApi{
    static getUserData(){
        return fetch('test.json')
        .then(data=>{
            return data.json();
        }).catch(err=>{
            return err;
        })
    }
}

export default LoginApi;