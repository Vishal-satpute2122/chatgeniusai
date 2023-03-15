import React from "react"
import './Create.css';
import img from "../assets/images/MicrosoftTeams-image (9)_preview_rev_1.png"
const Create = () =>{
return(
<div className="center bg-image">

<img src={img}  />
      <div className="form-horizontal">
          <div className="form-group">
              <label style={{color:"#fff", fontSize:"20px"}}>Full Name</label>
              <div className="col-md-12">
                <input type="text" className="form-control" style={{minWidth: "515px", maxWidth: "515px", height: "35.5px", borderRadius:"8px" }}/>
              </div>
          </div>
          <br />
          <div className="form-group">
              <label style={{color:"#fff", fontSize:"20px"}}>Email-ID</label>
              <div className="col-md-12">
                <input type="text" className="form-control" style={{minWidth: "515px", maxWidth: "515px", height: "35.5px", borderRadius:"8px"  }}/>
              </div>
          </div>
          <br />
          <div className="form-group">
              <label style={{color:"#fff", fontSize:"20px"}}>Company</label>
              <div className="col-md-12">
                <input type="text" className="form-control" style={{minWidth: "515px", maxWidth: "515px", height: "35.5px", borderRadius:"8px"  }}/>
              </div>
          </div>
          <br />
          <div className="form-group">
              <label style={{color:"#fff", fontSize:"20px"}}>Role</label>
              <div className="col-md-12">
                <input type="text" className="form-control" style={{minWidth: "515px", maxWidth: "515px", height: "35.5px", borderRadius:"8px"  }}/>
              </div>
          </div>
          <br />
          <div className="form-group">
              <label style={{color:"#fff", fontSize:"20px"}}>What Type Of FlowCharts & Diagrams you Want To Create?</label>
              <div className="col-md-12">
                <input type="text" className="form-control" style={{minWidth: "515px", maxWidth: "515px", height: "35.5px", borderRadius:"8px"  }}/>
              </div>
          </div>
          <br />
          <br />
          <div className="form-group">
                <div className="col-md-offset-2 col-md-12">
                    <input type="submit" value="Submit" className="btn btn-default" style={{backgroundColor: "#0080ff",color: "white",width:"200px",height:"50px", borderRadius: "8px"}}/>
                </div>
            </div>
</div>
    </div>
)
}
export default Create;