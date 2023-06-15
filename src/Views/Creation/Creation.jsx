import { useState } from "react";
import { ApartmentClient } from "../../API/Apartment/ApartmentApi";
import { Navigate, useNavigate } from "react-router-dom";
import "./Creation.css";

export const Creation = () => {

    const navigate = useNavigate();


    const [userId, setUserId] = useState("1");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [floor, setFloor] = useState("");
    const [rooms, setRooms] = useState("1");
    const [square, setSquare] = useState("");
    const [height, setHeight] = useState("");
    const [address, setAddress] = useState("");
    const [withBalcony, setWithBalcony] = useState("true");
    const [response, setResponse] = useState("");

    function callYourAPI() {
        ApartmentClient.post("/", {
            userId: 1,
  title: "Квартира 1 комнатная у моря",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 2000000,
            floor: 3,
            rooms: 1,
            square: 35,
            height: 3,
            haveBalcony: "1 балкон",
            address: "г. Таганрог, ул. Энгельса 32",
            totalyArea: 35,
            ceilingHeight: 3,
            renovationKind: "Косметический",
            apartmentStateType: "Buy",
            toiletsCount: 1,
            apartmentType: "Квартира",
            documents: [
                {
                    url: "3",
                    type: "string"
                }
            ],
            floors: 9,
            kitchenSquare: 9,
            postType: "string"

        }).then((res) => {
            setResponse(res.data);
        });

        navigate("/search");
    }

    return (<div className="container d-flex justify-content-center mt-4 mb-3">
        <div className="card p-3 pt-4 ps-5 mb-3  card-body">
            <p className="h2 mb-5">Создать объявление</p>

            <div className="row">
                <p className="h6 col-3 m-0 pt-2">Тип объявления</p>
                <div className="col-5">
                    <select className="form-select input-form">
                        <option hidden selected>Выберите тип объявления</option>
                        <option>Купить</option>
                        <option>Снять</option>
                    </select>
                </div>
            </div>

            <div className="row mt-4">
                <p className="h6 col-3 m-0 pt-2">Тип недвижимости</p>
                <div className="col-5">
                    <select className="form-select input-form">
                        <option hidden selected>Выберите тип недвижимости</option>
                        <option>Квартира</option>
                        <option>Дом</option>
                        <option>Участок</option>
                    </select>
                </div>
            </div>

            <div className="row mt-4">
                <p className="h6 col-3 m-0 pt-2">Колличество комнат</p>
                <div className="col-5">
                    <select className="form-select input-form">
                        <option hidden selected>Выберите колличесво комнат</option>
                        <option onChange={(evt) => setRooms("1")}>1</option>
                        <option onChange={(evt) => setRooms("2")}>2</option>
                        <option onChange={(evt) => setRooms("3")}>3</option>
                        <option onChange={(evt) => setRooms("4")}>4</option>
                        <option onChange={(evt) => setRooms("5")}>5</option>
                        <option onChange={(evt) => setRooms("6")}>6+</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Общая площадь</p>
                <div className="col-5 pt-2">
                    <input onChange={(evt) => setSquare(evt.target.value)} type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />

                </div>
                <p className="h5 col-1 mt-3 color-demigray" >м<sup>2</sup></p>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Жилая</p>
                <div className="col-5 pt-2">
                    <input type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />

                </div>
                <p className="h5 col-1 mt-3 color-demigray" >м<sup>2</sup></p>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Кухня</p>
                <div className="col-5 pt-2">
                    <input type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />


                </div>
                <p className="h5 col-1 mt-3 color-demigray" >м<sup>2</sup></p>
            </div>



            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Этаж</p>
                <div className="col-5 pt-2">
                    <input onChange={(evt) => setFloor(evt.target.value)} type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />


                </div>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Всего этажей в доме</p>
                <div className="col-5 pt-2">
                    <input type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />


                </div>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Высота потолков</p>
                <div className="col-5 pt-2">
                    <input onChange={(evt) => setHeight(evt.target.value)} type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />


                </div>
                <p className="h5 col-1 mt-3 color-demigray" >м</p>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Адрес</p>
                <div className="col-5 pt-2">
                    <input onChange={(evt) => setAddress(evt.target.value)} type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />


                </div>
            </div>



            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Цена</p>
                <div className="col-5 pt-2">
                    <div>
                        <input onChange={(evt) => setPrice(evt.target.value)} type="text" className="form-control input-form"
                            id="exampleDropdownFormEmail1" />
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Заголовок</p>
                <div className="col-5 pt-2">
                    <div className="mb-3">
                        <input onChange={(evt) => setTitle(evt.target.value)} type="text" className="form-control input-form"
                            id="exampleDropdownFormEmail1" />
                    </div>
                </div>
            </div>

            <p className="h6 col-3 m-0 mt-2 pt-2 mb-3">Описание</p>
            <textarea onChange={(evt) => setDescription(evt.target.value)} className="text-area text-box multi-line me-4 input-form"
                data-val="true" data-val-length="Maximum = 2045 characters" data-val-length-max="2045" id="info"
                name="info" cols="40" rows="3"></textarea>

            <p className="h6 col-3 m-0 mt-4 pt-2 mb-3">Выберите фотографии</p>
            <div className="me-4">
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>

            <p className="h6 col-3 m-0 mt-4 mb-3">Выберите файл планировки</p>
            <div className="me-4">
                <input className="form-control" type="file" id="formFile" multiple />
            </div>

            <button onClick={() => callYourAPI()} type="button" className="btn btn-primary mt-4  me-4 btn-cl">Опубликовать</button>
        </div>

    </div>);
}