import "./section.scss"
import YoungMan from "../../assets/youngman-avataricon.webp"
import BottomPhoto from "../../assets/my-img-fornow.png"
import About from "../about/about.component"
const Section = () => {
    
    return (
        <div className="section-container">
            <div className="text-container">
            <div className="text-show-container">
            <h1 className="my-h1">Designer,Frontend Developer & Test Automation Engineer</h1>
            <p className="my-p">I design and code beautifully simple things, and I love what I do.</p>
            </div>
            <div className="img-container">
                <div className="avatar-icon-container">
                    <img src={YoungMan} alt="" className="my-image" />
                </div>
            </div>
            <div>
                <img src={BottomPhoto} className="penguin-settings" alt="" />
            </div>
            </div>
        <About />
        </div>
    )
}

export default Section