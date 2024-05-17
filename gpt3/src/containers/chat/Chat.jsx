import "./chat.css"
import Navbar from "../../components/navbar/Navbar";
import logo from "../../assets/logo.png";
import add from "../../assets/add-30.png";
import message from "../../assets/message.svg";
import home from "../../assets/home.svg";
import bookmark from "../../assets/bookmark.svg";
import rocket from "../../assets/rocket.svg";
import send from "../../assets/send.svg";
import user from "../../assets/user-icon.png";
import { FaRegUserCircle } from "react-icons/fa";
// import { sendMsgToOpenAI } from "./openai.js";
import { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from 'axios';


const Chat = () => {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [button, setButton] = useState(false)

    function sendToChatGPT() {


        let body = {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
            tempreture: "1",
        };

        let headers = {
            Authorization: "Bearer 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",
        };

        axios
            .post("https://api.openai.com/v1/chat/completions", body, {
                headers: headers,
            })
            .then((response) => {
                let reply = response.data.choices[0].message.content;
                setOutput(reply);
            });



    }
    



    async function handleSend() {
        // const res = await sendMsgToOpenAI(input);
        // console.log(res)

    }


    return (
        <div >
            <Navbar />
            <div className="chat">

                <div className="sidebar">
                    <div className="sidebar_top">

                        <div className="new_chat_container">
                            <img src={add} alt="" className="add" />
                            <p className="new_chat">New Chat</p>

                        </div>

                        <div className="black_button_container">
                            <img src={message} alt="" />
                            <p className="black_button"> What's Programming</p>
                        </div>

                        <div className="black_button_container">
                            <img src={message} alt="" />
                            <p className="black_button">How to use API?</p>
                        </div>



                    </div>


                    <div className="sidebar_bottom">
                        <div className="list_container">
                            <img src={home} alt="" />
                            <span>Home</span>
                        </div>

                        <div className="list_container">
                            <img src={bookmark} alt="" />
                            <span>Saved</span>
                        </div>

                        <div className="list_container">
                            <img src={rocket} alt="" />
                            <span>Upgrade to Pro</span>
                        </div>

                    </div>

                </div>


                <div className="main_chat section__padding">

                    <div className="chats">
                        <div className="user">
                            <FaRegUserCircle fill="black" color="white" size={50} />
                            <p>{input}</p>
                        </div>

                        <div className="chat_left">
                            <img src={logo} alt="" />
                            <p>{output}</p>
                        </div>

                    </div>


                    <div className=" input_container">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Send a message" />
                        <img src={send} alt="" onClick={sendToChatGPT} />


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chat

