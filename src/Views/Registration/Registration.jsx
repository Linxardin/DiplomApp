import { useState } from "react";
import { UserClient } from "../../API/User/UserApi";
import { Link } from "react-router-dom";
import "./Registration.css";

export const Registration = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");

    function callYourAPI() {
        UserClient.post("/register/", {
            name: name,
            password: password,
            email: email,
            phone: phone,
        }).then((res) => {
            setResponse(res.data);
            alert(email + " " + password + " " + name + " +" + phone + " RESPONSE: " + res.data);
        });
    }

    function callYourAPI1() {
        UserClient.post("/register/", {
            name: name,
            password: password,
            email: email,
            phone: phone,
        }).then((res) => {
            setResponse(res.data);
            alert(email + " " + password + " " + name + " +" + phone + " RESPONSE: " + res.data);
        });
    }

    return (<div className="container mt-4 mb-3">

        <div className="card p-4 mb-3 width m-auto">

            <div className="px-4 py-3">
                <h3 className="mb-3">Регистрация</h3>
                <div className="mb-3">
                    <label for="exampleDropdownFormEmail1" className="form-label">Имя</label>
                    <input onChange={(evt) => setName(evt.target.value)} type="text" className="form-control" id="exampleDropdownFormEmail1"
                        placeholder="Имя" />
                </div>
                <div className="mb-3">
                    <label for="exampleDropdownFormEmail1" className="form-label">Адрес электронной почты</label>
                    <input onChange={(evt) => setEmail(evt.target.value)} type="email" className="form-control" id="exampleDropdownFormEmail1"
                        placeholder="email@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleDropdownFormPassword1" className="form-label">Телефон</label>
                    <input onChange={(evt) => setPhone(evt.target.value)} type="phone" className="form-control" id="exampleDropdownFormPassword1"
                        placeholder="Телефон" />
                </div>
                <div className="mb-4">
                        <label for="exampleDropdownFormPassword1" className="form-label">Пароль</label>
                        <input onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="exampleDropdownFormPassword1"
                            placeholder="Пароль" />
                    </div>
                <div className="mb-4">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" for="dropdownCheck">
                            Даю свое согласие на обработку персональных данных
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button onClick={() => callYourAPI()} type="submit" className="btn btn-primary w-100 btn-cl">Зарегестрироваться</button>
                    </div>
                    <div className="col-6">
                    <Link class="btn btn-light w-100" to="/login">Войти</Link>
                    </div>
                </div>



            </div>


        </div>
    </div>);
}