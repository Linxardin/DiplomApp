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
    const [totalyArea, settotalyArea] = useState("");
    const [ceilingHeight, setceilingHeight]= useState("1");
    const [renovationKind, setrenovationKind]= useState("");
    const [apartmentStateType, setapartmentStateType]= useState("");
    const [toiletsCount, settoiletsCount]= useState("");
    const [apartmentType, setapartmentType]= useState("");
    const [floors, setfloors]= useState("");
    const [kitchenSquare, setkitchenSquare]= useState("");
    const [haveBalcony, sethaveBalcony] = useState("true");
    const [response, setResponse] = useState("");

    function callYourAPI() {
        ApartmentClient.post("/", {
            userId: 1,
            title: title,
            description: description,
            price: price,
            floor: floor,
            rooms: rooms,
            square: square,
            height: height,
            haveBalcony: haveBalcony,
            address: address,
            totalyArea: totalyArea,
            ceilingHeight: "1",
            renovationKind: renovationKind,
            apartmentStateType: apartmentStateType,
            toiletsCount: toiletsCount,
            apartmentType: apartmentType,
            documents: [
                {
                    url: "3",
                    type: "string"
                }
            ],
            floors: floors,
            kitchenSquare: kitchenSquare,
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
                        <option onChange={(evt) => setapartmentStateType("Buy")}>Продажа</option>
                        <option onChange={(evt) => setapartmentStateType("Rent")}>Аренда</option>
                    </select>
                </div>
            </div>

            <div className="row mt-4">
                <p className="h6 col-3 m-0 pt-2">Тип недвижимости</p>
                <div className="col-5">
                    <select className="form-select input-form">
                        <option hidden selected>Выберите тип недвижимости</option>
                        <option onChange={(evt) => setapartmentType("Квартира")}>Квартира</option>
                        <option onChange={(evt) => setapartmentType("Дом")}>Дом</option>
                        <option onChange={(evt) => setapartmentType("Участок")}>Участок</option>
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
                    <input onChange={(evt) => settotalyArea(evt.target.value)} type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />

                </div>
                <p className="h5 col-1 mt-3 color-demigray" >м<sup>2</sup></p>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Жилая</p>
                <div className="col-5 pt-2">
                    <input onChange={(evt) => setSquare(evt.target.value)} type="text" className="form-control input-form"
                        id="exampleDropdownFormEmail1" />

                </div>
                <p className="h5 col-1 mt-3 color-demigray" >м<sup>2</sup></p>
            </div>

            <div className="row mt-3">
                <p className="h6 col-3 m-0 pt-3">Кухня</p>
                <div className="col-5 pt-2">
                    <input onChange={(evt) => setkitchenSquare(evt.target.value)} type="text" className="form-control input-form"
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
                    <input onChange={(evt) => setfloors(evt.target.value)} type="text" className="form-control input-form"
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