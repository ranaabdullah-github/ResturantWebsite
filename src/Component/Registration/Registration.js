import React,{useEffect,useState,useCallback, useRef} from 'react'
import { Form, Button,Card, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './style.css'
import firebase from 'firebase/compat'; 
import 'firebase/compat/auth'
import app from './firebase.js';
import { useSpring, animated } from 'react-spring';

import {GoogleAuthProvider} from 'firebase/auth';

const provider = new GoogleAuthProvider();
const auth=app.auth();

const Registration = ({ showModal, setShowModal }) => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
/////////////////////////////////////////////////////////////////
//-------------------Show SignUp and Login UI---------------------//
/////////////////////////////////////////////////////////////////
const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 1,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
/////////////////////////////////////////////////////////////////
//------------- Check the user is registered ------------------//
/////////////////////////////////////////////////////////////////
    const [user, setUser]=useState(null);
    useEffect((user) => {
       auth.onAuthStateChanged(user=>{
        setUser(user)
    })
  });
  //////////////////////////////////////////////////////////////
  //////-----------------Registration-------------------////////
  ////////////////////////////////////////////////////////////

    const SignupWithFirebase=useCallback(async event =>{
        event.preventDefault();
        await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((res) =>{
            alert ("signup is sucsess");
            setShowModal(false)
        }).catch((error)=>{
            alert("The user is exist")
        })
    },[],
    )
    //------------------------ SignIn with Google-------------------//
  const SignupWithGoogle = ()=>{
    auth.signInWithPopup(provider)
    .then(()=>{
        alert("sign up with google")
    })
    .catch((error)=>{
        alert(error)
    })
}
   ////////////////////////////////////////////////////////////////////////
   //-------------------- Login ----------------------------------------//
  
    const emailRefLogin = useRef(null)
    const passwordRefLogin = useRef(null)
    const LoginWithFirebase=useCallback(async event =>{
        event.preventDefault();
        // const {email,password} =event.target.ele;
        await auth.signInWithEmailAndPassword(emailRefLogin.current.value,passwordRefLogin.current.value)
        .then((res)=>{
            alert("Login is success");
            setShowModal(false)
        }).catch((error)=>{
            alert("error in information")
        })
    },[],
)
   //////////////////////////////////////////////////////////////////////
    return (
        // [data-aos^=fade][data-aos^=fade] {
        //     opacity: 1;
        //     transition-property: opacity,transform;
        // }
        
        <>
            {showModal ?
            <div class={isActive?"container-login right-panel-active":"container-login"} id="container" right-panel-active >
                <div class="form-container sign-up-container">
                        <button type="button" id="close"  class="close"  onClick={() => setShowModal(prev => !prev)} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    <Form className="p-2 frmLogin" onSubmit={SignupWithFirebase}>
                        <h3 style={{color:"black"}}>Create Account</h3>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" onClick={()=>{SignupWithGoogle()}} class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" className='inputAuth' style={{width:"57%"}} required id="nameUser"/>
                        <Form.Group id="email" >
                            <Form.Control type="email" className='inputAuth' ref={emailRef} placeholder="mail" required/>
                        </Form.Group>
                        <Form.Group id="password" >
                            <Form.Control type="password" className='inputAuth' ref={passwordRef}  placeholder="Password" required/>
                        </Form.Group>
                        <Button className="btnAuth  mt-2" type="submit" id="submit">Sign Up</Button>
                    </Form>
                </div>
                <div class="form-container sign-in-container">
                    <button type="button" id="close"  class="closeSide"  onClick={() => setShowModal(prev => !prev)} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <Form action="#" className="frmLogin" onSubmit={LoginWithFirebase}>
                        <h3 style={{color:"black"}}>Login</h3>
                        <div class="social-container">
                            <a href="#" className="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"className="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email"  ref={emailRefLogin}  className='inputAuth' placeholder="Email" />
                        <input type="password" ref={passwordRefLogin} className='inputAuth' placeholder="Password" />
                        <button className='btnAuth' type="submit">Login</button>
                    </Form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <aside>
                                <div></div>
                                <svg viewBox="0 0 100 100">
                                    <g stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M65.892702,73 C70.3362168,68.5836139 73.0845878,62.4824333 73.0845878,55.7432553 C73.0845878,49.0040774 70.3362168,42.9028968 65.892702,38.4865107 C61.4491873,34.0701246 55.3105288,31.338533 48.5299539,31.338533 C41.749379,31.338533 35.6107205,34.0701246 31.1672058,38.4865107 C26.723691,42.9028968 23.97532,49.0040774 23.97532,55.7432553 C23.97532,62.4824333 26.723691,68.5836139 31.1672058,73 C31.1672058,73 65.892702,73 65.892702,73 Z M73.0594097,62.3985471 C76.4680437,61.2200182 88.5607213,56.1793944 85.5117743,37.8371245 L81.6924976,37.9360303 C80.8526284,43.134546 77.152648,46.6051883 72.4845099,46.6051883 M24.4062209,60.319036 C24.3904842,60.3191058 24.3747393,60.3191408 24.3589862,60.3191408 C18.6378761,60.3191408 14,55.70958 14,50.0233985 C14,44.3372171 18.6378761,39.7276563 24.3589862,39.7276563 C26.0569266,39.7276563 27.6594543,40.133673 29.0736464,40.8533508 M65.8946819,38.4867877 L31.1652244,38.4844448 M37.6782363,44.9577899 C34.9010396,47.7180312 33.1833077,51.5312691 33.1833077,55.7432553 C33.1833077,59.9552416 34.9010396,63.7684794 37.6782363,66.5287208 M45.4606247,29.0505903 L51.5992831,29.0505903 M48.5299539,26 L48.5299539,31.338533"></path>
                                    </g>
                                </svg>
                                <div>
                                    <p id="intro-signup" class="active"><strong>Cup o' Tea</strong> is even better with&nbsp;an&nbsp;account.</p>
                                    <p id="intro-login">Welcome back to<br/><strong>Cup o' Tea</strong>!</p>
                                </div>
                            </aside>
                            {/* <h3 style={{color:"black"}}> Welcome Back!</h3>
                            <p>To keep connected with us please login with your personal info</p>  */}
                            <button class="btnAuth ghost" id="signIn" onClick={handleToggle}>Login</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start with us</p>
                            <button class="btnAuth ghost" id="signUp" onClick={handleToggle}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        : null
         }
    </>
    
    )
}

export default Registration
