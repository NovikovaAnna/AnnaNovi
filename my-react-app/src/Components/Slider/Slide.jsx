import './Slider.css'
import {string} from "prop-types";
import ContactForm from "../contactForm/ContactForm.jsx";

export default function Slide({src, text}){
    return (
        <div className="slide">
            <img className="slide-img" src={src}></img>
            <h2 className="slide-desc">{text}</h2>
        </div>
    )
}

ContactForm.protoTypes = {
    src: string,
    text: string
}