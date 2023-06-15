import { useState, useEffect } from "react";
import { useParams, Link, Navigate , useNavigate } from 'react-router-dom';
import { ApartmentClient } from "../../API/Apartment/ApartmentApi";
import { FavoritePostsClient } from "../../API/FavoritePosts/FavoritePostsAPI";
import { UserClient } from "../../API/User/UserApi";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import axios from "axios";
import { Collapse } from "bootstrap";
import "./UserProfile.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";


export const UserProfile = () => {

    const [user, setUser] = useState("");
    const [apartmentDataArray, setDataArray] = useState([]);
    const [fav, setFav] = useState([]);
    const [response, setResponse] = useState([]);
    const params = useParams();
    const apartmentId = params.apartmentId;
    const userId = params.userId;
    const [state, setState] = useState(false);
    const [favApartment, setFavApartment] = useState("");

    const [isModified, setIsModified] = useState(true);

    const navigate = useNavigate();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

      useState(() => {console.log("1" + fav)},[fav]);
      
    const callYourAPI = async () => {
        const resp = await UserClient.get("/" + userId);
        setUser(resp.data);

        const apResp = await ApartmentClient.get("/all", {
            params: {
                userId: userId,
            }
        });
        // console.log(apResp.data);
        setResponse(apResp.data);
        const favResp = await FavoritePostsClient.get("/by-user/" + userId);
        const data = JSON.stringify(favResp.data);
        const array = JSON.parse(data);
        let a = [];
        array.map((el) => 
            ApartmentClient.get("/" + el.apartmentId).then(((resp) => a.push(resp.data))
        ))
        setDataArray(a);
        setFav(array);
    }

    const exit = async () => {
        localStorage.removeItem("user");
        navigate("/search");
        await delay(10);
        window.location.reload();
    }

    function getApartment(data) {
       
        return (
            <div className="container pt-2 container-main ps-0 pe-0">
                <div className="card p-4">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                            <Link to={"/" + data.id + "/" + data.userId}>
                                <img className="rounded max-1 w-100" src={"../images/img_test" + data.documents[0].url + ".jpg"} /></Link>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                            <div className="row">
                                <div className="col-10">
                                    <p className="h4">{data.title}</p>
                                    <p className="h6 addres">{data.address}</p>
                                    <p className="h4 mt-2 mb-2">{data.price} ₽</p>
                                </div>
                                <div className="col-2">
                                    <FaRegHeart className="iSize mt-1 float-end" />
                                </div>
                                <div className="col-12 mb-5 mb-sm-3 mb-md-3 mb-lg-0 pt-2 crop-text-2 text-jus">
                                    {data.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        callYourAPI();
        // const result = localStorage.getItem("user");
        // // console.log(result);
        // //  console.log(state);
        // if (result) {
        //     setUser(result);
        //     setState(true);
        //     //  console.log(user);
        // }
        // else {
        //     setState(false);
        // }
    }, []);




    return (<div className="container mt-4 mb-3 container-main ">
        <div className="row">
            <div className="col-9 pe-0">
                <button onClick={() => setIsModified(true)}  type="submit" className="btn mb-2 btn-primary btn-cl col-3">Мои обьявления</button>
                <button onClick={() => setIsModified(false)}  type="submit" className="ms-3 mb-2 btn btn-primary btn-cl col-3">Избранные обьявления</button>
                
                {isModified ? (<> {response.map((item, index) => (<div key={index}>
                    <div className="container pt-2 container-main ps-0 pe-0">
                        <div className="card p-4">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                    <Link to={"/" + item.id + "/" + item.userId}>
                                        <img className="rounded max-1 w-100 hss" src={"../images/img_test" + item.documents[0].url + ".jpg"} /></Link>
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                    <div className="row">
                                        <div className="col-10">
                                            <p className="h4">{item.title}</p>
                                            <p className="h6 addres">{item.address}</p>
                                            <p className="h3 mt-2 mb-2">{item.price} ₽</p>
                                        </div>
                                        <div className="col-2">
                                            <FaRegHeart className="iSize mt-1 float-end" />
                                        </div>
                                        <div className="col-12 mb-5 mb-sm-3 mb-md-3 mb-lg-0 pt-2 crop-text-1 text-jus">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}</>) : (<>
                    {fav === undefined || null ?(<></>):fav.map((item, index) => { return(<div key={index}>
                    {apartmentDataArray.map((el) => getApartment(el))}
                </div>)})} 
                {/* <div className="container pt-2 container-main ps-0 pe-0">
                <div className="card p-4">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                           
                                <img className="rounded max-1 w-100" src="../images/img_test1.jpg" />
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                            <div className="row">
                                <div className="col-10">
                                    <p className="h4">Продажа 2-х комнатной квартиры</p>
                                    <p className="h6 addres">г. Москва, ул. Ленина 25, кв. 4</p>
                                    <p className="h4 mt-2 mb-2">6000000 ₽</p>
                                </div>
                                <div className="col-2">
                                    <FaHeart className="iSize mt-1 float-end" />
                                </div>
                                <div className="col-12 mb-5 mb-sm-3 mb-md-3 mb-lg-0 pt-2 crop-text-2 text-jus">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. jgbcfybt
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </>)}
                
               

                {/* {getApartment(1)} */}

                 {/* {fav.map((item, index) => (<div key={index}>
                    {getApartment(item.apartmentId)}
                </div>))}  */}
            </div>
            <div className="col-3">
                <div className="card pt-3 pb-1 px-3 sticky-top sticky">
                    <div className="row mt-2">
                        <div className="col-4">
                            <img src="../images/img_man_profile.jpg" alt="" className="rounded-circle w-100 h-100" />
                        </div>
                        <div className="col-8">
                            <p className="m-0 text-color-demigray" >Частное лицо</p>
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
                    <button onClick={() => exit()} type="submit" className="btn mb-2 btn-danger">Выйти</button>
                </div>
            </div>

        </div>
    </div>);
}