import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ApartmentClient } from "../../API/Apartment/ApartmentApi";
import { UserClient } from "../../API/User/UserApi";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import axios from "axios";
import { Collapse } from "bootstrap";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import "./Item.css";

export const Item = () => {

    const params = useParams();
    const apartmentId = params.apartmentId;
    const userId = params.userId;
    const [response, setResponse] = useState("");
    const [user, setUser] = useState("");
    const [cord, setCord] = useState("");


    function callYourAPI() {
        ApartmentClient.get("/" + apartmentId, {
        }).then((res) => {
            setResponse(res.data);
            setCord(res.data.addres);
        });
        UserClient.get("/" + userId, {
        }).then((res) => {
            setUser(res.data);
        });
    }


    const notify = () => {
        toast.success('Жалоба отправлена', {
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


        {
            callYourAPI();
            console.log(cord);
            let addres = "Таганрог Энгельса";
            // axios.get("https://geocode-maps.yandex.ru/1.x", {
            //     params: {
            //         geocode: {addres},
            //         apikey: "04268b56-cecc-43fc-b834-c08c2b3d8ebb",
            //         format: "json",
            //     }
            // })
            //     .then(res => {
            //         const str = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
            //         const point = str.split(' ');
            //         console.log(point);
            //     })
        }

    },
        []);

    return (<div className="container mt-4 mb-3 container-main">
        <div className="row">
            <div className="col-9 pe-0">
                <div className="card p-4 mb-3">

                    <div className="row mx-0">
                        <div className="col-10">
                            <h4 className=" mx-2 mb-2 text-w-600">{response.title}, {response.square}
                                м<sup>2</sup></h4>
                            <h6 className=" mx-2 mb-4 font-monospace text-color-demigray" >{response.address}</h6>
                        </div>

                    </div>


                    <div id="carouselMDExample" className="carousel slide carousel-fade align-self-center mw"
                        data-bs-ride="carousel carousel-w">

                        <div className="carousel-inner mb-4 shadow-1-strong rounded-1 mw">
                            <div className="carousel-item active">
                                <img src="../images/img_test5.jpg" className="d-block object-fit-cover w-100 h-100" alt="123" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/img_test1.jpg" className="d-block object-fit-cover w-100 h-100" alt="12" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/img_test3.jpg" className="d-block object-fit-cover w-100 h-100" alt="12" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/img_test4.jpg" className="d-block object-fit-cover w-100 h-100" alt="12" />
                            </div>
                        </div>



                        <button className="carousel-control-prev " type="button" data-bs-target="#carouselMDExample"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselMDExample"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>



                    </div>

                    <hr className="" />

                    <div className="row text-center">
                        <div className="col-3">
                            <h5>{response.square} м<sup>2</sup></h5>
                            <h6 className="text-color-demigray" >Площадь</h6>
                        </div>
                        <div className="col-3">
                            <h5>30 м<sup>2</sup></h5>
                            <h6 className="text-color-demigray" >Жилая</h6>
                        </div>
                        <div className="col-3">
                            <h5>9 м<sup>2</sup></h5>
                            <h6 className="text-color-demigray" >Кухня</h6>
                        </div>
                        <div className="col-3">
                            <h5>3 из 9</h5>
                            <h6 className="text-color-demigray" >Этаж</h6>
                        </div>
                    </div>

                </div>
                <div className="card p-4 mb-3">
                    <h5 className="text-w-600">Описание</h5>
                    <p className="mb-1 text-main"> {response.description}</p>
                </div>
                <div className="card p-4 mb-3">
                    <h5 className="text-w-600">Общая информация</h5>
                    <div className="row">
                        <div className="col-4">
                            <p className="mt-2 text-color-demigray" >Тип жилья</p>
                            <p className="text-color-demigray" >Высота потолков</p>
                            <p className="text-color-demigray" >Санузел</p>
                            <p className="text-color-demigray" >Балкон/лоджия</p>
                            <p className="text-color-demigray" >Ремонт</p>
                        </div>
                        <div className="col-6">
                            <p className="mt-2">Вторичка</p>
                            <p>3 м</p>
                            <p>1</p>
                            <p>1 балкон</p>
                            <p>Косметический</p>
                        </div>
                    </div>
                </div>
                <div className="card p-4 mb-3">
                    <h5 className="mb-3 text-w-600">Планировка</h5>
                    <iframe src="https://planner5d.com/v?key=a07270a1e4f2217c8896adbde13eadb4&viewMode=3d" className="dView" allowfullscreen></iframe>
                </div>

                <div className="card p-4 mh">
                    <h5 className="mb-3 text-w-600">Местоположение</h5>
                    <YMaps>
                        <Map
                            defaultState={{ center: [47.2020012, 38.921136], zoom: 16 }} width="100%" height="100%"
                        >
                            <Placemark geometry={[47.2020012, 38.921136]} />
                        </Map>
                    </YMaps>
                </div>

                <div className="card p-4 mt-3">
                    <div className="d-flex justify-content-between">
                        <p className="h6 col-3 mt-1 m-0 mb-3">Оставить жалобу</p>
                        <button onClick={notify} type="submit" className="btn mb-2 btn-primary btn-cl col-2">Отправить</button>
                    </div>
                    <textarea className="text-area text-box multi-line input-form"
                        data-val="true" data-val-length="Maximum = 2045 characters" data-val-length-max="2045" id="info"
                        name="info" cols="40" rows="3"></textarea>
                </div>

                <ToastContainer></ToastContainer>
            </div>
            <div className="col-3">
                <div className="card pt-3 pb-1 px-3 sticky-top sticky">
                    <h3 className="mb-0">{response.price} ₽</h3>
                    <h6 className="text-color-demigray" >{response.price / 12} ₽/м<sup>2</sup></h6>
                    <hr className="mt-1 mb-1" />
                    <div className="row mt-2">
                        <div className="col-4">
                            <img src="../images/img_man_profile.jpg" alt="" className="rounded-circle w-100 h-100" />
                        </div>
                        <div className="col-8">
                            <p className="m-0 text-color-demigray" >Риелтор</p>
                            <h5>{user.name}</h5>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-3 mb-0 btn-cl" type="button" data-bs-toggle="collapse"
                        data-bs-target="#Number" aria-expanded="false" aria-controls="Number">
                        Показать номер
                    </button>
                    <div className="collapse" id="Number">
                        <div className="card card-body py-2 border-0">
                            +{user.phone}
                        </div>
                    </div>
                    <div className="mb-2"></div>

                </div>
            </div>

        </div>
    </div>);
}