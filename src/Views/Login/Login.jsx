import { useState, useEffect } from "react";
import { UserClient } from "../../API/User/UserApi";
import { Link, Navigate , useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");
    const [user, setUser] = useState("");

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const navigate = useNavigate();

    const callYourAPI = async () => {
        const resp = await UserClient.post("/login/", {
            email: email,
            password: password,
        })
            
            console.log(resp.data);
            if (resp.data)
            {
                  getUser(); 
                  navigate("/search");
                  await delay(100);
                //window.location.reload();
            }
            else{
                console.log("false responce:" + response);
            }
        
       
    }

    const getUser = async () => {
        const us = await UserClient.get("/",{
            params: {
                email: email,
            }
        })
            localStorage.setItem("user", JSON.stringify(us.data));
            console.log(us.data);
         
    }

    // useEffect(() => {
    //     navigate("/search");
    // }, [user]);


    return (<div className="container d-flex justify-content-center mt-4 mb-3">

        <div className="card p-4 mb-3 width">

            <div className="px-4 py-3">
                <h3 className="mb-3">Вход</h3>
                <div className="mb-3">
                    <label for="exampleDropdownFormEmail1" className="form-label">Адрес электронной почты</label>
                    <input onChange={(evt) => setEmail(evt.target.value)} type="email" className="form-control" id="exampleDropdownFormEmail1"
                        placeholder="email@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleDropdownFormPassword1" className="form-label">Пароль</label>
                    <input onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="exampleDropdownFormPassword1"
                        placeholder="Пароль" />
                </div>

                <div className="row pt-4">
                    <div className="col-6">
                        <button onClick={() => callYourAPI()} type="submit" className="btn btn-primary w-100 btn-cl">Войти</button>
                    </div>
                    <div className="col-6">
                    <Link class="btn btn-light w-100" to="/registration">Зарегестрироваться</Link>
                    </div>
                </div>



            </div>


        </div>
    </div>);
}