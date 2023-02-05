import "./section.scss"
import Pikachu from "../../assets/pikachu.png"
import Penguin from "../../assets/penguinofmadagaskar.png"

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
                    <img src={Pikachu} alt="" className="my-image" />
                </div>
            </div>
            <div>
                <img src={Penguin} className="penguin-settings" alt="" />
            </div>
            </div>
        </div>
    )
}

export default Section