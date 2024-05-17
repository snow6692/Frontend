import "./header.css"
import ai from "../../assets/ai.png"
import people from "../../assets/people.png"
function Header() {
    return (

        <div className="header" id="home">
            <div className="left">
                <h1>
                    Let's Build Something
                    amazing with GPT-3
                    OpenAI
                </h1>
                <p className="text-top">
                    Yet bed any for travelling assistance
                    indulgence unpleasing. Not thoughts
                    all exercise blessing. Indulgence way everything joy  alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className="subscribe">
                    <input type="text" placeholder=" Your Email Address" />
                    <button type="button">Get Started</button>

                </div>

                <div className="request">
                    <img className="people" src={people} alt="" />
                    <p className="text-bottom">1,600 people requested access a visit in last 24 hours</p>
                </div>

            </div>
            <div className="right">
                <img src={ai} alt="" />
            </div>
        </div>
    )
}

export default Header