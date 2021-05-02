
import './App.css';

// Navigation
/*Top */ import Header from "./core/Header/Header"
/*Side */ import SideNav from "./core/SideNavBar/SideNavBar"

//import routes
import Routes from "./Routes"

function App() {
  return (
    <div className="App">

      <div className="header"> <Header /></div>

      <div className="BodyContainer">
        {/* left side navbar */}
        <div className="sideNavBar"><SideNav /></div>

        <div className="content">
          <div className="body"><Routes /></div>
          <div className="Footer"></div>
        </div>

      </div>

    </div>
  );
}

export default App;
