import "./house.css";
import emailIcon from './email.png'
import Inquiry from "./inquiry";
import { useState } from "react";

const House = ({house}) => {
    const [inquiryClicked, setInquiryClick] = useState();
    const inquiryClick = () => {
        setInquiryClick(!inquiryClicked);
    };
    return ( 
        <div>
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row">
                <h3 className= "col-md-12">{house.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="House" />
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                    <img
                        src={emailIcon}
                        alt="inquiry"
                        height="50"
                        onClick={inquiryClick}
                    />
                    {inquiryClicked && <Inquiry house={house}/>}
                </div>
            </div>
        </div>
    );
}
 
export default House;