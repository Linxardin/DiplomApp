import { useState, useEffect } from "react";
import { ApartmentClient } from "../../API/Apartment/ApartmentApi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, Navigate , useNavigate } from "react-router-dom";

import "./Admin.css";





export const Admin = () => {

    const navigate = useNavigate();

    const [lowerPrice, setLowerPrice] = useState("");
    const [uperPrice, setUperPrice] = useState("");
    const [response, setResponse] = useState([]);
    const [city, setCity] = useState("");

    const [isModified, setIsModified] = useState(true);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const exit = async () => {
        localStorage.removeItem("user");
        navigate("/search");
        await delay(10);
        window.location.reload();
    }

    return (<div>

        <div className="container pt-2 container-main mb-2">

            <div className="row container mt-4 mb-4 w-100">
                <div className="col-1 ps-0"><button type="button" onClick={() => setIsModified(true)}  class="btn btn-outline-success ms-0">Жалобы</button></div>
                <div className="col-2"><button type="button" onClick={() => setIsModified(false)} class="btn btn-outline-success">3D визуализации</button></div>
                <div className="col pe-0"><button type="button" onClick={() => exit()} class="btn btn-outline-danger float-end">Выйти</button></div>
            </div>

        </div>
        {isModified ? (<><div className="container pt-2 container-main mb-2">
        <div className="card p-4">
                <div className="row">
                    <p className="h4 col-8">Жалоба от пользователя Иван</p>
                    <div className="col-4"><button type="button" class="btn btn-outline-danger float-end">Заблокировать объявление</button></div>
                    <div className="col-12 mb-5 mb-sm-3 mb-md-3 mb-lg-3 pt-2 crop-text-1 text-jus">
                        Жалоба
                    </div>
                    <hr className="" />
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">

                        <img className="rounded max-1 w-100" src="images/img_test1.jpg" />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                        <div className="row">
                            <div className="col-10">
                                <p className="h4">Продам</p>
                                <p className="h6 addres">г. Таганрог ул. Энгельса</p>
                                <p className="h3 mt-2 mb-2">4500000 ₽</p>
                            </div>

                            <div className="col-12 mb-5 mb-sm-3 mb-md-3 mb-lg-0 pt-2 crop-text-1 text-jus">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. jgbcfybt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card p-4">
                <div className="row">
                    <p className="h4 col-8">Жалоба от пользователя Владимир</p>
                    <div className="col-4"><button type="button" class="btn btn-outline-danger float-end">Заблокировать объявление</button></div>
                    <div className="col-12 mb-5 mb-sm-3 mb-md-3 mb-lg-3 pt-2 crop-text-1 text-jus">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <hr className="" />
                    <div className="col-12 col-sm-12 col-md-12 col-lg-5">

                        <img className="rounded max-1 w-100" src="images/img_test1.jpg" />
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                        <div className="row">
                            <div className="col-10">
                                <p className="h4">Продам</p>
                                <p className="h6 addres">г. Таганрог ул. Энгельса</p>
                                <p className="h3 mt-2 mb-2">4500000 ₽</p>
                            </div>

                            <div className="col-12 mb-5 mb-sm-3 mb-md-3 mb-lg-0 pt-2 crop-text-1 text-jus">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. jgbcfybt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>) : (<><div className="container pt-2 container-main mb-2">
            <div className="card p-4">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                        <div className="row">
                            <div className="col-8 ">
                                <p className="h4">Объявление № 11</p>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-8 p-0 pe-2 ps-1 ">
                                <input className="form-control border"
                                    placeholder="Вставьте ссылку..." />

                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 text-end p-0" >
                                <button type=" button" className=" bt-t btn btn-primary w-100 btn-cl">Добавить</button>
                            </div>
                            <div className="col text-end p-2 ps-1" >
                                <button type=" button" className=" bt-t btn btn-primary w-100 btn-cl">Скачать планировку</button>
                            </div>
                            <div className="col text-end p-2 ps-0" >
                                <button type=" button" className=" bt-t btn btn-primary w-100 btn-cl">Перейти к объявлению</button>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4 text-end p-0 pt-2" >
                                <button type=" button" className=" bt-t btn btn-primary w-100 btn-cl">Завершить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>)}
        


    </div >);
}