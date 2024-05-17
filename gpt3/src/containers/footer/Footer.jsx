import "./footer.css"
import logo from "../../assets/logo.svg";
function Footer() {
    return (
        // <footer className="footer section__padding section__margin">
        //     <div className="footer_heading">

        //         <h1>Do you want to step in to the future before others</h1>
        //     </div>

        //     <div className="footer_btn">
        //         <span> Request Early Access</span>
        //     </div>

        //     <div className="footer_links">
        //         <div className="footer_links_logo">
        //             <img src={logo} alt="" />
        //             <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        //         </div>

        //         <div className="footer-links_div">
        //             <h4>Links</h4>
        //             <p>Overons</p>
        //             <p>Social Media</p>
        //             <p>Counters</p>
        //             <p>Contact</p>
        //         </div>
        //         <div className="footer-links_div">
        //             <h4>Company</h4>
        //             <p>Terms & Conditions </p>
        //             <p>Privacy Policy</p>
        //             <p>Contact</p>
        //         </div>
        //         <div className="footer-links_div">
        //             <h4>Get in touch</h4>
        //             <p>Crechterwoord K12 182 DK Alknjkcb</p>
        //             <p>085-132567</p>
        //             <p>info@payme.net</p>
        //         </div>
        //     </div>

        //     <div className="footer-copyright">
        //         <center>@2021 GPT-3. All rights reserved.</center>
        //     </div>
        // </footer>



        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={logo} alt="gpt3_logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <center>@2021 GPT-3. All rights reserved.</center>
            </div>
        </div>
    )
}

export default Footer