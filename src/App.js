import React from 'react'
import Navbar from "./website/Navbar"
import {Route, Routes } from 'react-router-dom';
import {Link } from "react-router-dom";
import "./App.css";
import "./website/Navbar"
import home from "./website/mainPhoto/home-img.png";
import about from "./website/mainPhoto/About-img.jpg";
import goal from "./website/mainPhoto/Goal.gif"
import mission2 from "./website/mainPhoto/Mission2.gif"
import logo1 from "./website/mainPhoto/Electronics-logo1.png"
import gif from './website/mainPhoto/gif.gif'

function Home() {
  return (
  <>
  <Navbar />
  {/* Home section */}
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO 
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <Link to= '/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
           
            <div className='home-img'> 
             <img src={home} alt="home-img"/>
            </div>
    </section>

    {/* About Section  */}
    <section className='about'>

      <div className='about-img'>
        <img src={about}/>
      </div>

      <div className='about-head'>
        <h1>ABOUT OUR<br/><span> CLUB...</span></h1>
      </div>
    
      <div className='about-head2'>
        <p>The Electronics club is a group of people who share an interest in electronics,<br/> technology, and engineering. The club may be organized through a university by enthusiasts who want to collaborate and learn from each other.</p>
      </div>

      <div className='about-head3'>
        <p>Our electronics club will provide members with opportunities to develop their skills and knowledge by organizing workshops, seminars, and projects. Members may work on individual projects or collaborate on group projects that involve designing, building, and testing electronic circuits, devices, or systems.
        </p>
      </div>

      <div className="about-num container">
              <div className=" Number "><span><i class="fa-solid fa-circle-user"></i></span>100+ <br /> <h2>Members</h2></div>
              <div className=" Number "><span><i class="fa-solid fa-lightbulb"></i></span>10+ <br /> <h2>Events</h2></div>
              <div className=" Number "><span><i class="fa-solid fa-calendar-check"></i></span>10+ <br /> <h2>Workshops</h2></div>
      </div>
    </section>
   
   {/* Target section */}
   <section className='target-club'> 
     <div className='target-head'>
      <h1><span className='t-span1'><i class="fa-solid fa-atom"></i></span>TARGET OF OUR CLUB<span className='t-span2'><i class="fa-solid fa-atom"></i></span></h1>
     </div>
     <br/>

    <div className='target-card row'>
        <div className='card t-card col-md-4 '>
          <div><img src={goal} alt='goal'/></div>
          <br/>
          <p>The target of an electronics club can vary depending on the specific goals and objectives of the club. Generally, the target of an electronics club is to bring together individuals who have an interest in electronics and technology. The club provides a platform for members to learn, collaborate, and share their knowledge and skills in electronics</p>
        </div>

        <div className='card t-card col-md-4 logo1'>
        <div><img src={logo1} alt='goal'/></div>
        <br/>
          <p>The club may target students, professionals, or hobbyists who want to develop their skills in electronics and technology. The target audience may also include individuals who are interested in pursuing careers in electronics engineering, computer science, or related fields.</p>
        </div>

        <div className='card t-card col-md-4'>
          <div><img src={mission2} alt='goal'/></div>
          <br/>
          <p>The club may aim to provide members with opportunities to network with other professionals in the industry, participate in competitions, and gain practical experience in designing and building electronic devices and systems. Additionally, the club may aim to inspire and encourage younger generations to pursue careers in electronics and technology.</p>
        </div>
    </div>
   </section>
   <br/>
   
   {/* Contact Section */}
   <section className='contact container'>
   <h1 className='contact-head'>CONTACT US</h1><br/>
    <div className='row contact-div'>
      <div className='col-md-6 contact-1'>
        <h2>GET IN TOUCH</h2>
        <p style={{fontWeight:500, fontSize:13}}>Feel free to ask your query...</p>
        <p><i class="fa-solid fa-phone"></i>  <b>CONTACT:</b> +917999442165 (Prof. Madhav Singh)</p>
        <p><i class="fa-solid fa-envelope"></i>  <b>EMAIL:</b> electronicsclubmits19@gmail.com</p>
        <p><i class="fa-solid fa-location-dot"></i> <b> ADDRESS:</b> Madhav Institute of Technology and Science Racecourse Rd, near Gola ka Mandir, Gwalior, Madhya Pradesh, 474005.</p>
        <p><b>About The Developers:</b><br/><span>"This website is proudly designed and developed by Shruti Golwalkar and Nandini Agrawal from MITS,Gwalior.We are always enthusiastic about working on awesome projects, and our expertise in web development shines through in the design and functionality of this website."</span></p>
      </div>
      
      <div className='col-md-6 contact-2'>
        {/* <img className='letter' src= {gif} alt='gif'/> */}
        <form >
          <b>Name:</b><br/><input className='input'  type="text" name="n" placeholder="Enter your name" required></input>
          <br/><br/>
          <b>Email:</b><br/><input className='input'  type="email" name="n" placeholder="Enter your email" required></input>
          <br/><br/>
          <b>Message:</b><br/>
         <textarea className='input' cols={67} style={{height:100, }}></textarea>
         <br/><br/>
         <input type='submit' placeholder='Send'name="n" className='send btn'></input>

        </form>
      </div>
    </div>
   </section>

  </>
  );
};

function About() {
  return (
  <>
  <Navbar />
  {<section className='text-center top'>
           <p className="heading">
              WELCOME  TO About
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section> }
  </>
  );
};

function Events() {
  return (
  <>
  <Navbar />
  
  <section className='text-center top'>
           <p className="heading">
              WELCOME  TO Events
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Team() {
  return (
  <>
  <Navbar />
  <section className='text-center top'>
           <p className="heading">
              WELCOME  TO Team
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Contact() {
  return (
  <>
  <Navbar />
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO Contact
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Explore() {
  return (
  <>
  <Navbar />
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO Explore
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function App()  {
  return (

    <Routes>
    <Route exact path='/' element={<Home/>}> </Route>

    <Route exact path='/about' element={<About/>}></Route>

    <Route exact path='/events' element={<Events/>}></Route>

    <Route exact path='/team' element={<Team/>}></Route>

    <Route exact path='/contact' element={<Contact/>}></Route>

    <Route exact path='/explore' element={<Explore/>}></Route>
    </Routes>
  );
};

export default App

import React from 'react'
import Navbar from "./website/Navbar"
import {Route, Routes } from 'react-router-dom';
import {Link } from "react-router-dom";
import "./App.css";
import "./website/Navbar"
import home from "./website/mainPhoto/home-img.png";
import about from "./website/mainPhoto/About-img.jpg";
import goal from "./website/mainPhoto/Goal.gif"
import mission2 from "./website/mainPhoto/Mission2.gif"
import logo1 from "./website/mainPhoto/Electronics-logo1.png"
import gif from './website/mainPhoto/gif.gif'

function Home() {
  return (
  <>
  <Navbar />
  {/* Home section */}
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO 
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <Link to= '/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
           
            <div className='home-img'> 
             <img src={home} alt="home-img"/>
            </div>
    </section>

    {/* About Section  */}
    <section className='about'>

      <div className='about-img'>
        <img src={about}/>
      </div>

      <div className='about-head'>
        <h1>ABOUT OUR<br/><span> CLUB...</span></h1>
      </div>
    
      <div className='about-head2'>
        <p>The Electronics club is a group of people who share an interest in electronics,<br/> technology, and engineering. The club may be organized through a university by enthusiasts who want to collaborate and learn from each other.</p>
      </div>

      <div className='about-head3'>
        <p>Our electronics club will provide members with opportunities to develop their skills and knowledge by organizing workshops, seminars, and projects. Members may work on individual projects or collaborate on group projects that involve designing, building, and testing electronic circuits, devices, or systems.
        </p>
      </div>

      <div className="about-num container">
              <div className=" Number "><span><i class="fa-solid fa-circle-user"></i></span>100+ <br /> <h2>Members</h2></div>
              <div className=" Number "><span><i class="fa-solid fa-lightbulb"></i></span>10+ <br /> <h2>Events</h2></div>
              <div className=" Number "><span><i class="fa-solid fa-calendar-check"></i></span>10+ <br /> <h2>Workshops</h2></div>
      </div>
    </section>
   
   {/* Target section */}
   <section className='target-club'> 
     <div className='target-head'>
      <h1><span className='t-span1'><i class="fa-solid fa-atom"></i></span>TARGET OF OUR CLUB<span className='t-span2'><i class="fa-solid fa-atom"></i></span></h1>
     </div>
     <br/>

    <div className='target-card row'>
        <div className='card t-card col-md-4 '>
          <div><img src={goal} alt='goal'/></div>
          <br/>
          <p>The target of an electronics club can vary depending on the specific goals and objectives of the club. Generally, the target of an electronics club is to bring together individuals who have an interest in electronics and technology. The club provides a platform for members to learn, collaborate, and share their knowledge and skills in electronics</p>
        </div>

        <div className='card t-card col-md-4 logo1'>
        <div><img src={logo1} alt='goal'/></div>
        <br/>
          <p>The club may target students, professionals, or hobbyists who want to develop their skills in electronics and technology. The target audience may also include individuals who are interested in pursuing careers in electronics engineering, computer science, or related fields.</p>
        </div>

        <div className='card t-card col-md-4'>
          <div><img src={mission2} alt='goal'/></div>
          <br/>
          <p>The club may aim to provide members with opportunities to network with other professionals in the industry, participate in competitions, and gain practical experience in designing and building electronic devices and systems. Additionally, the club may aim to inspire and encourage younger generations to pursue careers in electronics and technology.</p>
        </div>
    </div>
   </section>
   <br/>
   
   {/* Contact Section */}
   <section className='contact container'>
   <h1 className='contact-head'>CONTACT US</h1><br/>
    <div className='row contact-div'>
      <div className='col-md-6 contact-1'>
        <h2>GET IN TOUCH</h2>
        <p style={{fontWeight:500, fontSize:13}}>Feel free to ask your query...</p>
        <p><i class="fa-solid fa-phone"></i>  <b>CONTACT:</b> +917999442165 (Prof. Madhav Singh)</p>
        <p><i class="fa-solid fa-envelope"></i>  <b>EMAIL:</b> electronicsclubmits19@gmail.com</p>
        <p><i class="fa-solid fa-location-dot"></i> <b> ADDRESS:</b> Madhav Institute of Technology and Science Racecourse Rd, near Gola ka Mandir, Gwalior, Madhya Pradesh, 474005.</p>
        <p><b>About The Developers:</b><br/><span>"This website is proudly designed and developed by Shruti Golwalkar and Nandini Agrawal from MITS,Gwalior.We are always enthusiastic about working on awesome projects, and our expertise in web development shines through in the design and functionality of this website."</span></p>
      </div>
      
      <div className='col-md-6 contact-2'>
        {/* <img className='letter' src= {gif} alt='gif'/> */}
        <form >
          <b>Name:</b><br/><input className='input'  type="text" name="n" placeholder="Enter your name" required></input>
          <br/><br/>
          <b>Email:</b><br/><input className='input'  type="email" name="n" placeholder="Enter your email" required></input>
          <br/><br/>
          <b>Message:</b><br/>
         <textarea className='input' cols={67} style={{height:100, }}></textarea>
         <br/><br/>
         <input type='submit' placeholder='Send'name="n" className='send btn'></input>

        </form>
      </div>
    </div>
   </section>

  </>
  );
};

function About() {
  return (
  <>
  <Navbar />
  {<section className='text-center top'>
           <p className="heading">
              WELCOME  TO About
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section> }
  </>
  );
};

function Events() {
  return (
  <>
  <Navbar />
  
  <section className='text-center top'>
           <p className="heading">
              WELCOME  TO Events
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Team() {
  return (
  <>
  <Navbar />
  <section className='text-center top'>
           <p className="heading">
              WELCOME  TO Team
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Contact() {
  return (
  <>
  <Navbar />
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO Contact
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Explore() {
  return (
  <>
  <Navbar />
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO Explore
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function App()  {
  return (

    <Routes>
    <Route exact path='/' element={<Home/>}> </Route>

    <Route exact path='/about' element={<About/>}></Route>

    <Route exact path='/events' element={<Events/>}></Route>

    <Route exact path='/team' element={<Team/>}></Route>

    <Route exact path='/contact' element={<Contact/>}></Route>

    <Route exact path='/explore' element={<Explore/>}></Route>
    </Routes>
  );
};

export default App

