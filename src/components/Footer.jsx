import { SocialIcon } from 'react-social-icons'
import { FiMapPin } from 'react-icons/fi'


const Footer = () => {
    return (
        <footer className="">
            <div style={{fontStyle:"italic",color:"black",fontWeight:"bold"}}>
                <p> LOCATE US HERE</p>
            </div>

            <div style={{ display: "flex", justifyContent:"space-between", width:"100%",textAlign:"center",color:"black", fontWeight:"bold"}}>
                <div style={{fontStyle:"italic"}}> <FiMapPin size={40} color="red" />&nbsp;<span>Visit us in our store and locaion</span></div>
                <div> <a href="#top" style={{textDecoration:"none"}}>GO TO TOP</a></div>
                <div style={{textAlign:"center",color:"black"}}>
                    <p>OUR SOCIAL</p>
                    <SocialIcon  label="Facebook" network= "facebook" url="facebook.come" target="_blank" />
                    &nbsp;<span><a href="www.facebook.com" target="_blank" style={{textDecoration:"none", color:"black"}}>Facebook</a></span>
                        &nbsp;&nbsp;<SocialIcon network = "instagram" url="" target="_blank" bgColor="black" fgColor="white" />
                        &nbsp;<span><a href="www.instagram.com" target="_blank" style={{textDecoration:"none", color:"black"}}>Instagram</a></span>
                </div>
            </div>

        </footer>
    );
};

export default Footer;