
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Posts from './components/posts.js';
import SinglePost from './components/singlePost';


function App() {
  return (
   <>
    {/* <h1>welcome</h1> */}
    <Router><Topbar/></Router>
    <Router><Header/></Router>
    <Router><Sidebar/></Router>
    <Router><SinglePost/></Router>
    <Router><Posts/></Router>
    <Router><Footer/></Router>
    
    

   </>

     
     
   
  );
}

export default App;
