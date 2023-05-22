import React from 'react'
import Navbar from "./website/Navbar"
import { Route, Routes } from 'react-router-dom';

function Home() {
  return (
  <>
  <Navbar />
  <section className='text-center'>
           <p className="heading">
              WELCOME  TO HOME
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <button className="head-button"><p>EXPLORE..</p></button>
    </section>
  </>
  );
};

function About() {
  return (
  <>
  <Navbar />
  <section className='text-center'>
           <p className="heading">
              WELCOME  TO About
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <button className="head-button"><p>EXPLORE..</p></button>
    </section>
  </>
  );
};

function Events() {
  return (
  <>
  <Navbar />
  <section className='text-center'>
           <p className="heading">
              WELCOME  TO Events
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <button className="head-button"><p>EXPLORE..</p></button>
    </section>
  </>
  );
};

function Team() {
  return (
  <>
  <Navbar />
  <section className='text-center'>
           <p className="heading">
              WELCOME  TO Team
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <button className="head-button"><p>EXPLORE..</p></button>
    </section>
  </>
  );
};

function Contact() {
  return (
  <>
  <Navbar />
  <section className='text-center'>
           <p className="heading">
              WELCOME  TO Contact
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <button className="head-button"><p>EXPLORE..</p></button>
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

    </Routes>
  );
};

export default App

