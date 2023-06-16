import { useState, useEffect } from "react";
import { ApartmentClient } from "../../API/Apartment/ApartmentApi";
import { FaHeart, FaRegHeart  } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Search.css";





export const Search = () => {



    const [lowerPrice, setLowerPrice] = useState("");
    const [uperPrice, setUperPrice] = useState("");
    const [response, setResponse] = useState([]);
    const [city, setCity] = useState("");
    const [rooms, setRooms] = useState("");
    const [apartmentType, setapartmentType] = useState("");


    function callYourAPI() {
        ApartmentClient.get("/search/", {
            params: {
                Address: city,
                PriceFrom: lowerPrice,
                PriceUntil: uperPrice,
                RoomsCount: rooms,
                ApartmentType: apartmentType,
            }
        }).then((res) => {
            setResponse(res.data);
            console.log(response);
        });
    }

    useEffect(() => {
        callYourAPI();
    }, []);

    return (<div>
        <div className="container mt-4 mb-3 container-main">
            <div className="card pt-4 pb-4">
                <div className="container container-sec">
                    <div className="row w-100">

                        <div className="col-sm-12 col-md-12 col-lg-3 pe-0">
                            <button type="button" className="btn btn-outline-light border w-100 filter1" id="dropdownMenuButton"
                                data-bs-toggle="dropdown" aria-expanded="true">Тип недвижимости</button>
                            <div className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton">

                                <div className="form-check">
                                    <input onChange={(evt) => setapartmentType("Квартира в новостройке")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        Квартира в новостройке
                                    </label>
                                </div>
                                <div className="form-check pt-1 pb-1">
                                    <input onChange={(evt) => setapartmentType("Квартира во вторичке")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        Квартира во вторичке
                                    </label>
                                </div>
                                <hr className="mt-1 mb-1" />
                                <div className="form-check pt-1">
                                    <input onChange={(evt) => setapartmentType("Комната")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        Комната
                                    </label>
                                </div>
                                <div className="form-check pt-1 pb-1">
                                    <input onChange={(evt) => setapartmentType("Доля")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        Доля
                                    </label>
                                </div>
                                <hr className="mt-1 mb-1" />
                                <div className="form-check pt-1">
                                    <input onChange={(evt) => setapartmentType("Дом")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        Дом
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(evt) => setapartmentType("Таунхаус")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        Таунхаус
                                    </label>
                                </div>
                                <div className="form-check pt-1 pb-1">
                                    <input onChange={(evt) => setapartmentType("Участок")} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        Участок
                                    </label>
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2 p-0">
                            <button type="button" className="btn btn-outline-light border border-start-0 w-100 filter2"
                                id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
                            >Колличество
                                комнат</button>
                            <div className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton2">

                                <div className="form-check">
                                    <input onChange={(evt) => setRooms(1)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input onChange={(evt) => setRooms(2)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        2
                                    </label>
                                </div>

                                <div className="form-check ">
                                    <input onChange={(evt) => setRooms(3)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        3
                                    </label>
                                </div>
                                <div className="form-check ">
                                    <input onChange={(evt) => setRooms(4)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        4
                                    </label>
                                </div>

                                <div className="form-check ">
                                    <input onChange={(evt) => setRooms(5)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        5
                                    </label>
                                </div>

                                <div className="form-check pb-1">
                                    <input onChange={(evt) => setRooms(6)} className="form-check-input text-color-demigray" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-color-demigray" for="flexCheckDefault" >
                                        6+
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-2 p-0">
                            <button type="button" className="btn btn-outline-light border border-start-0 w-100 filter3"
                                id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false"
                            >Цена</button>
                            <div className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton2">

                                <input onChange={(evt) => setLowerPrice(evt.target.value)} type="text" className="form-control text-color-demigray" id="exampleDropdownFormEmail1" placeholder="От" />
                                <input onChange={(evt) => setUperPrice(evt.target.value)} type="text" className="form-control mt-2 text-color-demigray" id="exampleDropdownFormEmail1" placeholder="До" />

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 p-0 pe-2">
                            <input onChange={(evt) => setCity(evt.target.value)} className="form-control border border-start-0 filter4"
                                placeholder="Выберите город" />

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-1 text-end p-0" >
                            <button onClick={() => callYourAPI()} type=" button" className=" bt-t btn btn-primary w-100 btn-cl">Найти</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {response.map((item, index) => (<div key={index}>
            <div className="container pt-2 container-main">
                <div className="card p-4">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                            <Link to={"/" + item.id + "/" + item.userId}>
                                <img className="rounded max-1 w-100 hnn" src={item.documents[1].url} /></Link>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                            <div className="row">
                                <div className="col-10">
                                    <p className="h4">{item.title}</p>
                                    <p className="h6 addres">{item.address}</p>
                                    <p className="h3 mt-2 mb-2">{item.price} ₽</p>
                                </div>
                                <div className="col-2">
                                  <FaRegHeart className="iSize mt-2 float-end"/>  
                                </div>
                                <div className="col-12 mb-5 mb-sm-3 mb-md-3 mb-lg-0 pt-2 crop-text-1 text-jus">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>))}
       
    </div>);
}