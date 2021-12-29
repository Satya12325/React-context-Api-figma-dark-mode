import { useContext} from "react";

import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeProvider";

const MainDiv = styled.div`
  width: 100%;
  dispaly: flex;
`;

const SideNav = styled.nav`
  width: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
`;
// in the nav div components;

const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
`;
const FunctionaDiv = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
`;

export default function Page() {
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);
  const currentTheme = themeData[theme];
  return (
    <MainDiv
      style={{
        color: currentTheme.color,
        backgroundColor: currentTheme.backgroundColor,
        display:'flex',
      }}
    >
      <SideNav
      style={{
        color: currentTheme.color,
        background: currentTheme.background
    }}>
        <img
          style={{ width: "45px", height: "45px", borderRadius: "50px" }}
          src="https://avatars.githubusercontent.com/u/87033616?v=4"
          alt="profile img"
        />
        <IconDiv>
          <i className="fas fa-chart-bar"></i>
          <i className="fas fa-map-signs"></i>
          <i className="fas fa-igloo"></i>
          <i className="far fa-comments"></i>
          <i className="far fa-file-alt"></i>
          <i className="fas fa-cog"></i>
        </IconDiv>
        <i className="fas fa-plus-circle"></i>
      </SideNav>

      <div>
        <FunctionaDiv>
          <h1>My Dashboard</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p>Switch to {theme === "light" ? "Dark" : "Light"} Mode</p>
            <label className="switch">
              <input type="checkbox" onChange={toggleTheme} />
              <span className="slider round"> </span>
            </label>
          </div>
        </FunctionaDiv>
        <div style={{
                color: currentTheme.color,
                backgroundColor: currentTheme.backgroundColor
            }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Active Users</h4>
            <div>
              <label>for</label>
              <select>
                <option> August 2020</option>
                <option> August 2021</option>
              </select>
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50px",
                  }}
                  src="https://avatars.githubusercontent.com/u/87033616?v=4"
                  alt="profile img"
                />
                <div>

                <h5>Satyabrata Das</h5>
                <p
                  style={{ color: "gray", fontSize: "18px", fontWeight: "500" }}
                >
                  Balasore Odisha
                </p>
                </div>
              </div>
              <p style={{ color: "gray", fontSize: "18px", fontWeight: "500" }}>
                ...
              </p>
            </div>
            <progress id="file" value="15" max="20"></progress>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Professional Level 15</p>
              <p>
                <b>4723Points</b>
              </p>
            </div>
          </div>
          <hr></hr>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50px",
                  }}
                  src="https://avatars.githubusercontent.com/u/87033616?v=4"
                  alt="profile img"
                />
                <div>

                <h5>Satyabrata Das</h5>
                <p
                  style={{ color: "gray", fontSize: "18px", fontWeight: "500" }}
                >
                  Balasore Odisha
                </p>
                </div>
              </div>
              <p style={{ color: "gray", fontSize: "18px", fontWeight: "500" }}>
                ...
              </p>
            </div>
            <progress id="file" value="11" max="20" className="Green"></progress>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Professional Level 11</p>
              <p>
                <b>4723Points</b>
              </p>
            </div>
          </div>
          <hr></hr>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50px",
                  }}
                  src="https://avatars.githubusercontent.com/u/87033616?v=4"
                  alt="profile img"
                />
                <div>

                <h5>Satyabrata Das</h5>
                <p
                  style={{ color: "gray", fontSize: "18px", fontWeight: "500" }}
                >
                  Balasore Odisha
                </p>
                </div>
              </div>
              <p style={{ color: "gray", fontSize: "18px", fontWeight: "500" }}>
                ...
              </p>
            </div>
            <progress id="file" value="6" max="20"></progress>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Professional Level 6</p>
              <p>
                <b>4723Points</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainDiv>
  );
}
