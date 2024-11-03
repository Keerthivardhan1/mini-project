import React from "react";
import "../../Components/ToggleSwitch.css";
import HeaderComponent from "../headerComponent";
import FooterComponent from "../footerComponent";
import AdminNavbar from "../adminnavbar";
import researchImage from "../images/rd.jpg";
import { Route, Routes } from "react-router-dom";
import AdminTada from "./admintada";
import Adminpatent from "./adminphd";
import AdminStudyLeave from "./adminstudyleave";
import AdminJournal from "./adminjournal";
import AdminPHD from "./adminphd";
import AdminConference from "./adminconference";
import AdminUpdate from "../resetdata/adminreset";


function Home() {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  if (storedUserData && storedUserData.empId === "cvrcsef002") {
    return (
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "cg omega",
              fontStyle: "bold",
              textDecoration: "underline",
              textDecorationColor: "black",
              textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
              paddingBottom: "10px",
              color: "black",
            }}
          >
            Research and Development
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div style={{ flex: 1, padding: "20px" }}>
            <img
              src={researchImage}
              alt="Research"
              style={{
                width: "100%",
                height: "auto",
                border: "2px solid #333",
                borderRadius: "10px",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
          <div 
          style={{
            flex:2,
            width: "80%",
            fontSize: "18px",
            margin: "0 auto",
            padding: "20px",
            textAlign: "justify",
            fontFamily: "Arial, sans-serif",
            fontStyle: "bold",
            borderRadius: "10px",
          }}>
            <p>
              The College has a well-defined policy for research which covers
              research facilities and incentives. The college provides good
              infrastructure, high configuration computers and equipment to
              design and development of Research Projects. The College granted
              seed money and established EDC/NewGen Incubation Center, UAV
              Design Center, Centers for Advanced Antenna Design and Nano
              Technology Materials Research, with advanced software and
              equipment. College promotes innovation as evidenced by filing 28
              patents with financial support and incentives.
            </p>

            <p>
              The College provides paid study leave for a period of 6 months
              three times during Ph.D., an allowance of Rs. 60,000 and an
              incentive of Rs. 25,000 at three stages of Ph.D. scholars. Digital
              Library/e-Resource access is provided to students and faculty
              members.
            </p>

            <p>
              CVR Journal of Science & Technology was started in 2011 and
              publications in standard journals are encouraged. The Institution
              ensures implementation of the code of ethics for research and more
              than 500 research papers have been published in SCOPUS and Web of
              Science Journals. 30 professors have been identified as
              guides/supervisors. The College organized 215 workshops/seminars
              on Research Methodology, IPR, Entrepreneurship, and Skill
              Development over the last 5 years.
            </p>
          </div>
          
        </div>

      </div>
    );
  } else {
    return <>Sorry not accessible</>;
  }
}

const Admin = () => {
  return (
    <div>
      <HeaderComponent />
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tada" element={<AdminTada />} />
        <Route path="/patent" element={<Adminpatent />} />
        <Route path="/studyleave" element={<AdminStudyLeave />} />
        <Route path="/journal" element={<AdminJournal />} />
        <Route path="/phd" element={<AdminPHD />} />
        <Route path="/conference" element={<AdminConference />} />
        <Route path="/update" element={<AdminUpdate />} />
      </Routes>
      <FooterComponent position="fixed" />
    </div>
  )
}

export default Admin;
