// Thirdparty
// useState lets us add react state to function components
// useEffect lets us performs side effects in function components.
import {useState, useEffect} from 'react' // The state hook used rather than classes
import {Link} from 'react-router-dom';
// Styles
import './../styles/Home.css';
// Assets
import heroImage from './../assets/hero-1.png';
// Services

function Home(){
  // pass in the initial state. returns the current state and a function to update it.
  //const [data, setData] = useState([]);

  // This is triggered after the render call. (First render and update renders)
  // function callback is passed in
  useEffect (() => {
  }, []);

  return(
    <div>

      <div className="dark-container">
        
        {/* <!-- Hero Container --> */}
        <div className="home-hero-container">
          <img src={heroImage} alt="hero graphic" className="home-hero"/>
          <div className="home-hero-text">
            <h1>reactjs Template</h1>
            <p>Template to build your reactjs code base</p>
            <button className="home-cta" >Open App</button>
          </div>
        </div>

      </div>

  </div>
  )
}

export default Home;