import { useState, useEffect } from "react";
import { UserClient } from "../../API/User/UserApi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { toast, ToastContainer } from 'react-toastify'
import "./Navbar.css";
import "react-toastify/dist/ReactToastify.css"


export const Navbar = () => {

    const [user, setUser] = useState("");
    const [state, setState] = useState();

    const navigate = useNavigate();

    const notify = () => {
        toast.error('Для создания объявления необходимо авторизоваться', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem("user"));
        console.log(result);
        console.log(state);
        if (result) {
            setUser(result);
            if (result.type === 0) {
                setState(1);
                console.log("header check");
                console.log(user);
                console.log(user.id);
            }
            if (result.type === 1) {
                setState(2);
                console.log("header check");
                console.log(user);
                console.log(user.id);
            }
        }
        else {
            setState(0);
        }
    }, []);

    useEffect(() => {
        const reloadCount = sessionStorage.getItem('reloadCount');
        if (reloadCount < 2) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            //  window.location.reload();
        } else {
            sessionStorage.removeItem('reloadCount');
        }
    }, [state]);

    const nav = () => {
        if (state === 1) {
            return (
                <>
                    <div class="col-3 text-end pe-0 d-flex justify-content-end"><IoIosAddCircleOutline className="ico" /><Link class="nav-link text-color-demigray" to="/creation">Создать
                        объявление</Link></div>
                    <div class="col-2 text-end pe-0 d-flex justify-content-end"><BiLogIn className="ico" /><Link
                        class="nav-link text-color-demigray" to={"/user/" + user.id}>Личный кабинет</Link></div>
                </>
            );
        }
        if (state === 2) {
            return (
                <>
                    <div class="col-3 text-end pe-0 d-flex justify-content-end"><IoIosAddCircleOutline className="ico" /><Link class="nav-link text-color-demigray" to="/creation">Создать
                        объявление</Link></div>
                    <div class="col-3 text-end pe-0 d-flex justify-content-end"><BiLogIn className="ico" /><Link
                        class="nav-link text-color-demigray" to={"/admin"}>Панель администратора</Link></div>
                </>
            );
        }
        if (state === 0) {
            return (
                <>
                    <div class="col-3 text-end pe-0 d-flex justify-content-end"><IoIosAddCircleOutline className="ico" /><Link class="nav-link text-color-demigray" onClick={notify}>Создать
                        объявление</Link></div>
                    <div class="col-3 text-end pe-0 d-flex justify-content-end"><BiLogIn className="ico" /><Link
                        class="nav-link text-color-demigray" to="/login">Войти или зарегестрирваться</Link></div>
                </>
            );
        }
    };



    return (<div>

        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light p-1 d-none d-sm-none d-md-none d-lg-block">
            <div class="container container-main mt-2 mb-2">
                <div class="row w-100">
                    <div class="col-6"><i class="fa-solid fa-location-arrow pe-1 text-color-demigray"></i>Москва</div>
                    <div class="col-3 text-end pe-0 d-flex justify-content-end"><i class="fa-solid fa-circle-plus pe-2 pt-1 text-color-demigray"></i><Link class="nav-link text-color-demigray" to="/creation">Создать
                        объявление</Link></div>
                    <div class="col-3 text-end pe-0 d-flex justify-content-end"><i
                        class="fa-solid fa-arrow-right-to-bracket pe-2 pt-1 text-color-demigray"></i><Link
                            class="nav-link text-color-demigray" to="/login">Войти или зарегестрирваться</Link></div>
                </div>
            </div>
        </nav>

        <hr className="m-0" /> */}

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container container-main">
                <Link class="navbar-brand" to="/search">Home Finder</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars text-color-demigray"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">

                            <Link class="nav-link ms-2" to="/search">Купить</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ms-2" to="/search">Снять</Link>
                        </li>
                    </ul>
                </div>
                {/* <button onClick={() =>  window.location.reload()} type="submit" className="btn btn-primary w-100 btn-cl">Войти</button> */}
                {nav()}
                <ToastContainer></ToastContainer>
                <hr className="" />
            </div>

        </nav>
    </div>);
}