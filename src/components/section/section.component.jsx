import "./section.scss"

import AvatarIcon from "../../assets/avatar-icon.png"
import InterestPhoto from "../../assets/mysvgimg.png"

const Section = () => {
    
    return (
        <div className="section-container">
            <div className="text-container">
            <div className="text-show-container">
          
            <div>
            <h1 className="my-h1">Designer,Frontend Developer & Test Automation Engineer</h1>
            <p className="my-p">I design and code beautifully simple things, and I love what I do.</p>
            </div>
            <div>
                <div className="box box-1">
                    box1
                </div>
                <div className="box box-2">
                    box2
                </div>
                <div className="box box-3">
                    box3
                </div>
            </div>

            </div>
            <div className="img-container">
                <div className="avatar-icon-container">
                    <img src={AvatarIcon} alt="" className="my-image" />
                </div>
            </div>
            <div>
                <img src={InterestPhoto} className="penguin-settings" alt="" />
            </div>
            </div>
        </div>
    )
}

export default Section