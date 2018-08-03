class LoginApi{
    static getUserData(){
        return fetch('userDetail.json')
        .then(data=>{
            return data.json();
        }).catch(err=>{
            return err;
        })
    }
}

export default LoginApi;