import React, { useEffect, useMemo } from 'react';
import './Home.css';
import image1 from "../assets/images/MicrosoftTeams-image (9)_preview_rev_1.png";
import image2 from "../assets/images/ShakeHand_preview_rev_1.png";
import image3 from "../assets/images/stars.jpg";
import image4 from "../assets/images/4_preview_rev_1.png";
import image6 from "../assets/images/5 (1)_preview_rev_1.png";
import image7 from "../assets/images/ka.png";
import image8 from "../assets/images/features.png";
import image9 from "../assets/images/chartcorrection_preview_rev_1.png";
import image10 from "../assets/images/2.jpeg";

// import Video from "../assets/images/chartgenius.mp4";
import image5 from "../assets/images/stars.jpg";
import {  useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    let bits = 80; // how many bits
    let speed = 33; // how fast - smaller is faster
    let bangs = 5; // how many can be launched simultaneously (note that using too many can slow the script down)
    let colours = new Array("#03f", "#f03", "#0e0", "#93f", "#0cf", "#f93", "#f0c");
    //                     blue    red     green   purple  cyan    orange  pink

    /****************************
    *      Fireworks Effect     *
    *(c)2004-14 mf2fm web-design*
    *  http://www.mf2fm.com/rv  *
    * DON'T EDIT BELOW THIS BOX *
    ****************************/
   let visible:any
    let bangheight:any = [];
    let intensity:any = [];
    let colour:any = [];
    let Xpos:any = [];
    let Ypos:any = [];
    let dX:any = [];
    let dY:any = [];
    let stars:any = [];
    let decay:any = [];
    let swide = 800;
    let shigh = 600;
    let boddie:any;
useEffect(()=>{
    light_blue_touchpaper()
},[])
    const light_blue_touchpaper = () =>{
        // if (document.getElementById) {
            let i;
            boddie = document.createElement("div");
            boddie.setAttribute("id", "Div1");
            boddie.style.position = "absolute";
            boddie.style.top = "0px";
            boddie.style.left = "0px";
            boddie.style.overflow = "visible";
            boddie.style.width = "1px";
            boddie.style.height = "1px";
            boddie.style.backgroundColor = "transparent";
            document.body.appendChild(boddie);
            // set_width();
            for (let i:any = 0; i < bangs; i++) {
                write_fire(i);
                launch(i);
                // stepthrough(i)
                setInterval(()=>stepthrough(i), speed);
            }
        // }
    }

    const write_fire = (N:any) => {
        let i, rlef, rdow;
        stars[N + 'r'] = createDiv('|', 12);
        boddie.appendChild(stars[N + 'r']);
        for (i = bits * N; i < bits + bits * N; i++) {
            stars[i] = createDiv('*', 13);
            boddie.appendChild(stars[i]);
        }
    }

    const createDiv =(char:any, size:any)=> {
        var div = document.createElement("div");
        div.style.font = size + "px monospace";
        div.style.position = "absolute";
        div.style.backgroundColor = "transparent";
        div.appendChild(document.createTextNode(char));
        return (div);
    }

    const launch =(N:any) =>{
        colour[N] = Math.floor(Math.random() * colours.length);
        Xpos[N + "r"] = swide * 0.5;
        Ypos[N + "r"] = shigh - 5;
        bangheight[N] = Math.round((0.5 + Math.random()) * shigh * 0.4);
        dX[N + "r"] = (Math.random() - 0.5) * swide / bangheight[N];
        if (dX[N + "r"] > 1.25) stars[N + "r"].firstChild.nodeValue = "/";
        else if (dX[N + "r"] < -1.25) stars[N + "r"].firstChild.nodeValue = "\\";
        else stars[N + "r"].firstChild.nodeValue = "|";
        stars[N + "r"].style.color = colours[colour[N]];
    }

    const bang =(N:any) =>{
        let i, Z, A = 0;
        for (i = bits * N; i < bits + bits * N; i++) {
            Z = stars[i].style;
            Z.left = Xpos[i] + "px";
            Z.top = Ypos[i] + "px";
            if (decay[i]) decay[i]--;
            else A++;
            if (decay[i] == 15) Z.fontSize = "7px";
            else if (decay[i] == 7) Z.fontSize = "2px";
            else if (decay[i] == 1) Z.visibility = "hidden";
            if (decay[i] > 1 && Math.random() < .1) {
                Z.visibility = "hidden";
                setTimeout(stars[i].style.visibility="visible", speed - 1);
            }
            Xpos[i] += dX[i];
            Ypos[i] += (dY[i] += 1.25 / intensity[N]);

        }
        if (A != bits) setTimeout(()=>bang(N), speed);
    }

    const stepthrough =(N:any)=> {
        let i, M, Z;
        let oldx = Xpos[N + "r"];
        let oldy = Ypos[N + "r"];
        Xpos[N + "r"] += dX[N + "r"];
        Ypos[N + "r"] -= 4;
        if (Ypos[N + "r"] < bangheight[N]) {
            M = Math.floor(Math.random() * 3 * colours.length);
            intensity[N] = 5 + Math.random() * 4;
            for (i = N * bits; i < bits + bits * N; i++) {
                Xpos[i] = Xpos[N + "r"];
                Ypos[i] = Ypos[N + "r"];
                dY[i] = (Math.random() - 0.5) * intensity[N];
                dX[i] = (Math.random() - 0.5) * (intensity[N] - Math.abs(dY[i])) * 1.25;
                decay[i] = 16 + Math.floor(Math.random() * 16);
                Z = stars[i];
                if (M < colours.length) Z.style.color = colours[i % 2 ? colour[N] : M];
                else if (M < 2 * colours.length) Z.style.color = colours[colour[N]];
                else Z.style.color = colours[i % colours.length];
                Z.style.fontSize = "13px";
                Z.style.visibility = "visible";
            }
            bang(N);
            launch(N);
        }
        stars[N + "r"].style.left = oldx + "px";
        stars[N + "r"].style.top = oldy + "px";
    }

    // window.onresize = set_width();
    // const set_width = () => {
    //     var sw_min = 999999;
    //     var sh_min = 999999;
    //     if (document.documentElement && document.documentElement.clientWidth) {
    //         if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
    //         if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
    //     }
    //     if (typeof (self.innerWidth) != "undefined" && self.innerWidth) {
    //         if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
    //         if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
    //     }
    //     if (document.body.clientWidth) {
    //         if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
    //         if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
    //     }
    //     if (sw_min == 999999 || sh_min == 999999) {
    //         sw_min = 800;
    //         sh_min = 600;
    //     }
    //     swide = sw_min;
    //     shigh = sh_min;
    // }


    const createPage =()=>{
        const element:any = document.getElementById("Div1");
            element.remove();
        navigate("/create")
    }
    return (
        <div>
            <main style={{ display: 'flex', flexDirection: 'column' }}>

                <div id="myDiv" style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw', display: 'flex', flexDirection: 'column', paddingTop: '10px', paddingBottom: "10px" }}>
                    <div className="Home_featureContainer__IXQdc" style={{ maxWidth: '1200px', padding: ' 0 32px', display: 'flex', flexDirection: 'row', margin: ' 0 auto', gap: '50px', alignItems: 'center' }}>
                        <div>
                            <img src={image1} style={{ height: '150px', width: "380px" }} />

                        </div>
                        <div style={{ marginLeft: "750px" }}>

                        </div>
                    </div><div className="Home_featureContainer__IXQdc" style={{ maxWidth: '1200px', padding: '0 32px', display: 'flex', flexDirection: 'row', margin: '0 auto', gap: '100px', alignItems: 'center' }}>
                        <div className="Home_featureText__u9lBI" style={{ width: "100%" }}>
                            <div className="Home_featureTitle__STH7N" style={{ marginTop: "100px", fontStyle: 'normal', fontWeight: '400', fontSize: '45px', lineHeight: '51px', color: "hsla(0,0%,100%,.95)" }}>

                                Revolutionize your Diagrams & FlowCharts  Creation with AI-powered
                                Technology
                            </div>
                            <div className="Home_featureDescription__8J2BE" style={{ fontFamily: 'Microsoft Sans Serif', fontStyle: 'normal', fontWeight: 300, fontSize: '20px', lineHeight: '28px', color: 'hsla(0,0%,100%,.95)' }}>
                                <br /><br /><br /><br /><br />
                                <p>
                                    Get early access to our AI-powered application!<br />
                                    Enter your email address, To join our early access
                                    program and stay up-to-date on the latest developments.<br />
                                </p>


                                <div style={{ color: '#DBFE84', fontSize: '19px' }}>

                                    <span style={{ fontSize: "40px" }}> &#x2728;</span>
                                    Don't miss out on this exciting opportunity to<br />
                                    experience the future of AI-powered Chartgenius  application.
                                </div>


                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                            <div className="Home_featureImg__MHDb4" style={{ marginLeft: '100px' }}>

                                <img src={image2} style={{ height: '500px', width: "400px" }} />
                            </div>
                            <div>


                                <br />
                                {/* &nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp,&nbsp, */}
                                <input type="button" name="name"  onClick={createPage}  value="Request early access" className="request-access-btn" style={{ border: "1px solid black" }} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="Home_feature1__ipKqL" style={{backgroundColor: 'black', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width:' 100vw', display: 'flex', flexDirection: 'row', paddingTop: '20px', paddingBottom: '20px'}}>
            <div className="Home_featureContainer__IXQdc" style={{maxWidth: '1200px', padding: '0 32px', display: 'flex', flexDirection: 'row', margin: '0 auto', gap: '0px', alignItems: 'center'}}>
                <video autoPlay  muted  loop  style={{width:'3200px',height:'500px'}} >
                    <source src='https://chatgen.s3.eu-north-1.amazonaws.com/videos/ChartGenius.mp4' type="video/mp4" />
                </video>
            </div>
        </div>



<div className="Home_featureContainer__IXQdc" style={{maxWidth: "1200px", padding: "0 32px",display: "flex", flexDirection: "row", margin: "0 auto",gap: "100px", alignItems: "center",}}>
            <div>
                <img src={image4} width="250" />
            </div>
            <div style={{fontSize:"16px"}}>
                <p>
                    We take pride in the quality of our prompt design,
                    which has been meticulously crafted by our team of
                    developers to ensure that you get the most out of our
                    AI-powered technology, Our team of experts has fine-tuned
                    our prompt design to provide you with the best possible
                    user experience, and it shows in the quality of your Looking
                    diagrams and flows.
                </p>
            </div>
            <div>
                <img src={image6} width="250" />
            </div>
        </div>

        <div className="Home_feature1__ipKqL" style={{backgroundColor:"#363240", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", width: "100vw", display: "flex", flexDirection: "row", paddingTop: "30px", paddingBottom: "30px"}}>
            <div className="Home_featureContainer__IXQdc" style={{maxWidth: "1200px", padding: "0 32px", display: "flex", flexDirection: "row", margin: "0 auto", gap: "0px", alignItems: "center"}}>
                <div className="Home_featureText__u9lBI" style={{width: "100%"}}>
                    <div className="Home_featureTitle__STH7N" style={{marginBottom:"20px", fontFamily: "var(--font-family)", fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "51px", color: "hsla(0,0%,100%,.95)"}}>
                        &nbsp;Features
                    </div>
                    <div className="Home_featureDescription__8J2BE" style={{fontFamily: "var(--font-family)", fontStyle: "normal", fontWeight: "300", fontSize: "20px", lineHeight: "28px", color: "hsla(0,0%,100%,.95)"}}>
                        <ul className="my-list">
                            <li>AI-powered data visualization to enhance communication and understanding of complex ideas.</li>
                            <li>Advanced customization options for tailoring the output to your specific needs.</li>
                            <li>Responsive and adaptable design for use on multiple devices.</li>
                            <li>Collaborative functionality for working with team members and stakeholders in real-time.</li>
                            <li>Multiple export options for sharing your diagrams and flows in various formats.</li>
                            <li>Generate a variety of diagrams and flows to support project management and software development, such as flowcharts, ER diagrams, Sequence diagrams, and more.</li>
                            <li>Styles and formatting options for creating professional-looking diagrams.</li>
                            <li>The chart genius can answer questions about an uploaded pdf document and provide a diagrams or flowcharts.</li>
                            <li>It provides the responses to any of your pdf questions.</li>
                        </ul>
                    </div>
                </div>
               
                <div className="Home_featureImg__MHDb4" style={{display: "flex", marginTop: "40px", marginBottom: "45px", width: "45%", maxWidth: "100%", height: "70%"}}>
                    <br /> <br /> <br /> <br /> <br />
                <img src={image8} />
                </div>
            </div> 
        </div>

        <div className="my-content">


        </div>

        <div className="Home_feature1__ipKqL" style={{backgroundColor: "black", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", width: "100vw", display: "flex", flexDirection: "row", paddingTop: "20px", paddingBottom: "20px"}}>
            <div className="Home_featureContainer__IXQdc" style={{maxWidth: "1200px", padding: "0  0px", display: "flex", flexDirection: "row", margin: "0 auto", gap: "0px", alignItems: "center"}}>
                <div className="Home_featureImg__MHDb4" style={{width: "100%", maxWidth: "130%", height:"130%"}}>
                    <br /><br /><br /><br /><br /><br />
                    <img src={image9} style={{height:"300px",width:"500px"}}/>
                </div>
                <div className="Home_featureText__u9lBI" style={{width: "100%"}}>
                    <div className="Home_featureTitle__STH7N" style={{marginBottom:"20px", fontFamily: "var(--font-family)", fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "51px", color: "hsla(0,0%,100%,.95)"}}>
                        &nbsp;Benefits
                    </div><div className="Home_featureDescription__8J2BE" style={{fontFamily: "var(--font-family)", fontStyle: "normal", fontWeight: "300", fontSize: "20px", lineHeight: "28px", color: "hsla(0,0%,100%,.95)"}}>
                        <ul className="my-list">
                            <li>
                                Reduce errors and miscommunications with clear and concise diagrams and flows.
                            </li>
                            <li>
                                Increase productivity by automating the diagram creation process.
                            </li>
                            <li>
                                Access a wide variety of diagram types to suit your specific needs.
                            </li>
                            <li>
                                Enjoy a seamless and intuitive user experience with our easy-to-use interface.
                            </li>
                            <li>
                                Communicate complex ideas with ease, making it simpler for team members and stakeholders to understand.
                            </li>
                            <li>
                                Empower your team to collaborate and work together more effectively.
                            </li>
                            <li>
                                Enhance your project management capabilities with our powerful data visualization tools
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="Home_feature1__ipKqL" style={{backgroundColor: "#d7fe98", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight:"-50vw", width: "100vw", display: "flex", flexDirection: "row", paddingTop: "20px", paddingBottom: "20px"}}>
            <div className="Home_featureContainer__IXQdc" style={{maxWidth: "1200px", padding: "0 0px", display: "flex", flexDirection: "row", margin: "0 auto", gap: "0px", alignItems: "center"}}>
                <div className="Home_featureText__u9lBI" style={{width: "100%"}}>
                    <div className="Home_featureTitle__STH7N" style={{marginBottom:"20px", fontFamily: "var(--font-family)", fontStyle: "normal", fontWeight: "400", fontSize: "40px", lineHeight: "51px", color:"black"}}>
                        &nbsp;Additional Information
                    </div>
                    <div className="Home_featureDescription__8J2BE" style={{fontFamily: 'Microsoft Sans Serif', fontStyle: "normal", fontWeight: "300", fontSize: "20px", lineHeight: "28px", color: "black"}}>
                        <ul className="my-list">
                            <li> Our AI technology is powered by Open AI GPT-3, the most advanced natural language processing technology available today.</li>
                            <li>Our team of experts is dedicated to providing you with the best possible user experience, and we're constantly updating and refining our technology to meet your needs.</li>
                            <li>Our API integration is easy to set up and use, even for users with no prior programming experience.</li>
                            <li>Our customer support team is available around the clock to provide assistance and answer any questions you may have.</li>
                            <li>We offer a variety of pricing plans to suit your budget and needs, from free trial options to enterprise-level plans for larger organizations.</li>
                        </ul>
                    </div>
                </div>
                <div className="Home_featureImg__MHDb4" style={{marginLeft:"30px",alignItems:"end",width: "80%", maxWidth: "100%", height:"100%"}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={image10} style={{width: "600px", height: "500px"}}/>
                </div>
            </div>
        </div>

        <div className="Home_feature1__ipKqL" style={{backgroundColor: "#500550", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", width: "100vw", display: "flex", flexDirection: "row", paddingTop: "20px", paddingBottom: "20px"}}>
            <div className="Home_featureContainer__IXQdc" style={{maxWidth: "1200px", padding: "0 0px", display: "flex", flexDirection: "column", margin: "0 auto", gap: "0px", alignItems: "center"}}>

                <input type="button" name="name" onClick={createPage} value="Request early access" className="request-access-btn" style={{alignContent:"center", border:"1px solid black"}}/>
                <br />
                <h1 style={{display:"flex", fontSize: "20px", maxWidth:"1200px",flexDirection: "row", color: "white"}}>Chartgeniues.AI</h1>
            </div>

        </div>
            </main>
        </div>
    )
}

export default Home