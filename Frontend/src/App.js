import './App.css';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import { SignupLogin } from './components/LoginSignup/SignupLogin';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Navbar } from './components/Navbar/Navbar';
import { Dropdown } from './components/Navbar/Dropdown';
import { ProfileDropdown } from './components/Navbar/ProfileDropdown';
import { MainPage } from './components/MainPage/MainPage';
import { AboveFooter } from './components/AboveFooter/AboveFooter';
import { Footer } from './components/Footer/Footer';
import { Categories } from './components/Categories/Categories';
import { JobFields } from './components/JobFields/JobFields';
import { AboutCompany } from './components/AboutCompany/AboutCompany';
import { AboutUs } from './pages/About/AboutUs/AboutUs';
import { Jobs } from './pages/Jobs/Jobs';
import { JobsSecond } from './pages/Jobs/JobsSecond';
import { JobsThird } from './pages/Jobs/JobsThird';
import { Posts } from './pages/Posts/Posts';
import { EditProfile } from './pages/EditProfile/EditProfile';
import { DetailedProfile } from './pages/DetailedProfile/DetailedProfile'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route exact path="/" element={<LoginSignup />} />

          <Route exact path="/signuplogin" element={<SignupLogin />} />

          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route exact path="/AboutUs" element={<Us />} />

          <Route exact path="/Jobs" element={<Job />} />

          <Route exact path="/SearchJobs" element={<Jobss />} />

          <Route exact path="/View" element={<Jobsss />} />

          <Route exact path="/Posts" element={<Post />} />

          <Route exact path="/EditProfile" element={<Edit />} />

          <Route exact path="/DetailedProfile" element={<Detailed />} />

          <Route exact path="/AboutCompany" element={<Companies />} />

        </Routes>

      </Router>
    </>
  );

  function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });

    const [isOpens, setIsOpens] = useState(false);

    const toggles = () => {
      setIsOpens(!isOpens);
    };

    return (
      <>
        <Navbar toggle={toggle} toggles={toggles} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <ProfileDropdown isOpens={isOpens} toggle={toggles} />
        <MainPage />
        <Categories />
        <JobFields />
        <LandingPage />
        <AboveFooter />
        <Footer />
      </>
      );
  }

  function Companies(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });

    const [isOpens, setIsOpens] = useState(false);

    const toggles = () => {
      setIsOpens(!isOpens);
    };

    return (
      <>
        <Navbar toggle={toggle} toggles={toggles} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <ProfileDropdown isOpens={isOpens} toggle={toggles} />
        <AboutCompany />
        <Footer />
      </>
      );
  }

  function Us(){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
 
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <AboutUs />
        <Footer />
      </>
      );
  }

  function Job(){
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);

        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <Jobs />
        <Footer />
      </>
      );
  }

  function Post(){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);

        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <Posts />
        <Footer />
      </>
      );
  }

  function Edit(){
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
 
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <EditProfile />
        <Footer />
      </>
      );
  }

  function Detailed(){
    const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);

        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <DetailedProfile />
        <Footer />
      </>
      );
  }

  function Jobss(){
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);

        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <JobsSecond />
        <Footer />
      </>
      );
  }

  function Jobsss(){
    const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
 
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <JobsThird />
        <Footer />
      </>
      );
  }
}

export default App;
