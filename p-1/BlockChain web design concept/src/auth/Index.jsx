// import React, { useState } from 'react'
// import {auth, provider} from '../config/firebase.config'
// import {createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail} from 'firebase/auth'
// import { useNavigate } from 'react-router-dom';

// function Index() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');
//     const [isSignup, setIsSignup] = useState(false);
//     const [isVerified, setIsVerified] = useState(false)
//     const username = email.split('@')[0];
//     const navigate = useNavigate();

//     const toggleSignUp = () => {
//         setIsSignup(!isSignup);
//     }

//     const handlSignUp = async(e) => {
//         e.preventDefault();
//         try{
//             const result = await createUserWithEmailAndPassword(auth, email, password);
//             const user = result.user;
//             await sendEmailVerification(user);
//             setMessage('Account created please check your email-[spam or promotion] before logging in.')
//             await user.reload();
//         }catch(err){
//             setError(err.message)
//         }
//     }
//     const handleGoogleSignIn = async () => {
//         try{

//             const result = await signInWithPopup(auth, provider);
//             const user = result.user;
//             alert(`Welcome ${username}`);
//             navigate(`/welcome/${user.uid}`);
//         }catch(err){
//             alert(err.message);
//         }
//     }
//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         try{
//             const result = await signInWithEmailAndPassword(auth, email, password);
//             const user = result.user;
//             if (user.emailVerified) {
//                 alert(`welcome ${username || 'user'}`);
//                 navigate(`/welcome/${user.uid}`);
//                 setIsVerified(true)
//             }else {
//                 alert('Please verify your email before logging in.');
//                 setIsVerified(false)
//             }
//         }catch(err){
//             setError(err.message);
//         }
//     }

//     const handleUpdatePassword = async (e)=>{
//         e.preventDefault();
//         try{
//             await sendPasswordResetEmail(auth, email);
//             setMessage('Password reset email sent! Please check your inbox.')
//         }catch(err){
//             alert(err.message)
//         }
//     }


//   return (
//     <>
//         {isSignup ? <div className='w-full h-[100vh] text-white text-center bg-black'>
//             <form onSubmit={handlSignUp}>
//                 <input type="email" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
//                 <input type="password" value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />

//                 <button type='submit'>SignUp</button>
//                 {message && <p>{message}</p>}
//             </form>
//             <button onClick={toggleSignUp} className='bg-black rounded-lg p-4 text-white'>Already have an acccount? <span className='text-blue-500'>{isVerified ? 'Login' : 'Verify your email first'}</span></button>
//         </div> : <div className='w-full h-[100vh] text-white text-center bg-black'>
//             <form onSubmit={handleSignIn}>
//                 <input type="email" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
//                 <input type="password" value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />

//                 <button type='submit'>SignIn</button>
//                 {error && <p>{error}</p>}
//             </form>
//             <button className='w-full bg-blue-500 text-2xl text-white p-4 rounded-lg' onClick={handleGoogleSignIn}>Sign in with google</button>
//             <span className='text-4xl text-blue-800' onClick={handleUpdatePassword}>Forgot password?</span>
//             <button onClick={toggleSignUp} className='text-white'>Don't have an acccount? <span className='text-blue-500'>signUp</span></button>
//         </div>}
//     </>
//   )
// }

// export default Index