import "./about.styles.scss"

function About() {

    return (
        <div className="about-container">
            <div className="top-text-container">
           <div> <h2 style={{border: "1px solid yellow"}}>Hi,I'm Diyar. Nice to meet you </h2></div>
          <div className="p-about">  <p>Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p></div>
            </div>
            <div>
        <div className="bottom-card-container" >
            <div className="card-holder">
            <div className="card"><h1>Designer</h1><p>asdadasdasd</p></div>
            <div className="card"><h1>Front-End Dev </h1><p>asdadasdasd</p></div>
            <div className="card"><h1>Test Automation Engineer</h1><p>asdadasdasd</p></div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default About