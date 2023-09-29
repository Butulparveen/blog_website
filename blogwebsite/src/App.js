import "./App.css";
import Footer from "./components/footer";
// import Header from "./components/header";
import Topbar from "./components/topbar.js";
import { BrowserRouter as Router, Route} from "react-router-dom";
// import Posts from "./components/posts.js";
import SinglePost from "./components/singlePost";
import Home from "./pages/home.js";
import Write from "./pages/write";
import Sidebar from "./components/sidebar";
import Login from "./extra pages/login";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import File from "./pages/file";
import Register from "./pages/register";
import RestfullAPI from "./Restful/restfulAPI";
import Settings from "./pages/settings";
import LoginK from "./pages/login";
import Single from "./pages/single";
import FetchAPI from "./Restful/fetchapi";
import IncDec from "./Restful/incDec";
import ApiFetchtryCatch from "./Restful/apiFetchtryCatch";
import AxiosApi from "./Restful/axiosApi";
import AxiosApiDelete from "./Restful/axiosApiDelete";


function App() {
  const currentUser = false;
  return (
    <>
      <div>
        {/* <h1>welcome</h1> */}
         {/* <SinglePost/>
        <Footer/> */}
      <Router>
      <Topbar />
        <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login">{currentUser?<Home/>:<Login />}</Route>
      <Route exact path="/register">{currentUser?<Home/>:<Register />}</Route>
      <Route exact path="/post:id"><Single /></Route>
      <Route path="/about" component={Sidebar}><Sidebar /></Route>
      <Route exact path="/write">{currentUser?<Write />:<Login/>}</Route>
      <Route exact path="/file"><File /></Route>
      <Route exact path="/settings">{currentUser?<Settings />:<Login/>}</Route>
      <Route exact path="/restfulfile"><RestfullAPI/></Route>
      <Router>
        {/* <Route exact path="/fetchapi" component={FetchAPI}></Route> */}
        <Route exact path="/incdec" component={IncDec}></Route>
        <Route exact path="/fetch" component={ApiFetchtryCatch}></Route>
        <Route exact path="/axios" component={AxiosApi}></Route>
        <Route exact path="/axiosd" component={AxiosApiDelete}></Route>
        </Router>
  
        </Switch>
      </Router>
        
      <Footer/>
     
      </div>

      
      {/* <Router>
        <Topbar />
      </Router>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route element={<Sidebar />} path="/about" />
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route element={<Write />} path="/write" />
        </Routes>
      </Router>
      <Router>
        <Routes>
          <Route element={<Login/>} path="/login" />
        </Routes>
      </Router>
    <Router><SinglePost/></Router>
    <Router><Footer/></Router> */}
    </>
  );
}

export default App;
