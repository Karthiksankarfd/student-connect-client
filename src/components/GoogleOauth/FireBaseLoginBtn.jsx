import React, { use, useContext, useState } from "react";
// import { GoogleLogin } from "@react-oauth/google"; // WE can use this or your custom button
import { auth, provider } from "../../../src/firebaseConfig"; // Importing the auth and provider from firebaseConfig
import { signInWithPopup } from "firebase/auth";
import API from "../../../src/services/API";
import { useNavigate } from "react-router-dom";
import { UserLoggedInStateContext } from "../../context/UserLoggedInContext";

const FireBaseLoginBtn = () => {
  const navigate = useNavigate();
  const { setLoggedInuser, setIsloggedIn } = useContext(
    UserLoggedInStateContext
  );
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // ? const user = result.user;  // This will contain the user details
      const idToken = await result.user.getIdToken();
      await googleLogin(idToken);
      // console.log("ID Token:", idToken); // Now you can see it
    } catch (error) {
      console.error("Error logging in", error.message);
    }
  };

  async function googleLogin(idToken) {
    console.log("hitting api request ...");
    try {
      let googleLoginReq = await API.get("/auth/googlelogin", {
        headers: {
          // Authorization: `Bearer ${idToken}`,  SendING idToken in header
          "Content-Type": "application/json",
        },
      });
      if (googleLoginReq.status === 200) {
        setIsloggedIn(true);
        setLoggedInuser(googleLoginReq.data.user);
        localStorage.setItem("authtoken", googleLoginReq.data.authtoken);
        navigate("/stntcnthome");
      }
      console.log(googleLoginReq.data);
    } catch (e) {
      console.log(e, "Google login error");
    }
  }

  // Logged in successfully
  // UserImpl {providerId: 'firebase', proactiveRefresh: ProactiveRefresh, reloadUserInfo: {…}, reloadListener: null, uid: 'YQvwsoghuTOHepNNNXjmywz0yXO2', …}
  // accessToken
  // :
  // "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0MzRmMzFkN2Y3NWRiN2QyZjQ0YjgxZDg1MjMwZWQxN2ZlNTk3MzciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2FydGhpa2V5YW4gS2FydGhpa2V5YW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSm52UUtTYnRXdnQ2V3c4ZlZJLVZwWHlRaWw3RkM4NXZwdXlsSWlaWDNJZnd6VC1PaV89czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3R1ZGVudGNvbm5lY3QtZmMzODgiLCJhdWQiOiJzdHVkZW50Y29ubmVjdC1mYzM4OCIsImF1dGhfdGltZSI6MTczODc3Nzc5NiwidXNlcl9pZCI6IllRdndzb2dodVRPSGVwTk5OWGpteXd6MHlYTzIiLCJzdWIiOiJZUXZ3c29naHVUT0hlcE5OTlhqbXl3ejB5WE8yIiwiaWF0IjoxNzM4Nzc3Nzk2LCJleHAiOjE3Mzg3ODEzOTYsImVtYWlsIjoia2FydGhpa2V5YW5zYW5rYXI4ODdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDI5MTI0MjUxODE1MjYxNDQwNzQiXSwiZW1haWwiOlsia2FydGhpa2V5YW5zYW5rYXI4ODdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.DAilcgOM8hpAgo0XBTNqZhyo6YOHDbvbPQavZW2hRKLz5pb0mxl_XbumSzUGkRu0ueTIwkXBOcebp2Q0TLIB-im9N1wZW9kYp7ddl6tamukVyyaMtXcbF6-DRbUo6r9BnAeJK9edGjDO-rKclBgAZnOKpkjwT1g3H1Ff_LF3Zl76oqr7qksVsT5v8kO02T8A0rs1sWL7wVsRlyzzKoMoGJmBoSV9iMOEQSGhPGgeHwLjyNs2nr-6xps0UBxdp0fP3CTtf5qiuhmMN9GAdGxoguuVtYGSAvhzUzx9jUmQxy0se8_0vvDozAQSfo4UVxnFUSSVn_mxRQs9ZZbBFtlFJA"
  // auth
  // :
  // AuthImpl {app: FirebaseAppImpl, heartbeatServiceProvider: Provider, appCheckServiceProvider: Provider, config: {…}, currentUser: UserImpl, …}
  // displayName
  // :
  // "Karthikeyan Karthikeyan"
  // email
  // :
  // "karthikeyansankar887@gmail.com"
  // emailVerified
  // :
  // true
  // isAnonymous
  // :
  // false
  // metadata
  // :
  // UserMetadata {createdAt: '1738755014918', lastLoginAt: '1738777796945', lastSignInTime: 'Wed, 05 Feb 2025 17:49:56 GMT', creationTime: 'Wed, 05 Feb 2025 11:30:14 GMT'}
  // phoneNumber
  // :
  // null
  // photoURL
  // :
  // "https://lh3.googleusercontent.com/a/ACg8ocJnvQKSbtWvt6Ww8fVI-VpXyQil7FC85vpuylIiZX3IfwzT-Oi_=s96-c"
  // proactiveRefresh
  // :
  // ProactiveRefresh {user: UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
  // providerData
  // :
  // [{…}]
  // providerId
  // :
  // "firebase"
  // reloadListener
  // :
  // null
  // reloadUserInfo
  // :
  // {localId: 'YQvwsoghuTOHepNNNXjmywz0yXO2', email: 'karthikeyansankar887@gmail.com', displayName: 'Karthikeyan Karthikeyan', photoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJnvQKSbtWvt6Ww8fVI-VpXyQil7FC85vpuylIiZX3IfwzT-Oi_=s96-c', emailVerified: true, …}
  // stsTokenManager
  // :
  // StsTokenManager {refreshToken: 'AMf-vBy-JCaZd6g-IKWuHciDm6QEdbPd_PlzERAf6aJvmquVCM…SBLvGtfUb72qFpsdw4NkHJ7zeXWzPW2di8r6pJ6JuSpkSZ8rs', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0MzRmMzFkN2Y3NWRiN2…UmQxy0se8_0vvDozAQSfo4UVxnFUSSVn_mxRQs9ZZbBFtlFJA', expirationTime: 1738781396524}
  // tenantId
  // :
  // null
  // uid
  // :
  // "YQvwsoghuTOHepNNNXjmywz0yXO2"
  // refreshToken
  // :
  // (...)

  // {
  //   "uid": "zXy123AbC456DefG",
  //   "displayName": "Karthikeyan Sankar",
  //   "email": "karthik@example.com",
  //   "photoURL": "https://lh3.googleusercontent.com/a-/AOh14GgXYZ.jpg",
  //   "accessToken": "ya29.A0ARrdaMxyz123456789abcdefgHIJKLM",
  //   "idToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYW1wbGV1aWQiLCJlbWFpbCI6ImthcnRoaWtAZXhhbXBsZS5jb20iLCJleHAiOjE2OTAwMDAwMDB9.K9rFLB5g5Qp8X2dVx5XnLCQH4aCaa2Tkxyz123456"
  // }

  // let requireddata = {
  //   uid:"YQvwsoghuTOHepNNNXjmywz0yXO2",
  //   accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0MzRmMzFkN2Y3NWRiN2QyZjQ0YjgxZDg1MjMwZWQxN2ZlNTk3MzciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiS2FydGhpa2V5YW4gS2FydGhpa2V5YW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSm52UUtTYnRXdnQ2V3c4ZlZJLVZwWHlRaWw3RkM4NXZwdXlsSWlaWDNJZnd6VC1PaV89czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3R1ZGVudGNvbm5lY3QtZmMzODgiLCJhdWQiOiJzdHVkZW50Y29ubmVjdC1mYzM4OCIsImF1dGhfdGltZSI6MTczODc3Nzc5NiwidXNlcl9pZCI6IllRdndzb2dodVRPSGVwTk5OWGpteXd6MHlYTzIiLCJzdWIiOiJZUXZ3c29naHVUT0hlcE5OTlhqbXl3ejB5WE8yIiwiaWF0IjoxNzM4Nzc3Nzk2LCJleHAiOjE3Mzg3ODEzOTYsImVtYWlsIjoia2FydGhpa2V5YW5zYW5rYXI4ODdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDI5MTI0MjUxODE1MjYxNDQwNzQiXSwiZW1haWwiOlsia2FydGhpa2V5YW5zYW5rYXI4ODdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.DAilcgOM8hpAgo0XBTNqZhyo6YOHDbvbPQavZW2hRKLz5pb0mxl_XbumSzUGkRu0ueTIwkXBOcebp2Q0TLIB-im9N1wZW9kYp7ddl6tamukVyyaMtXcbF6-DRbUo6r9BnAeJK9edGjDO-rKclBgAZnOKpkjwT1g3H1Ff_LF3Zl76oqr7qksVsT5v8kO02T8A0rs1sWL7wVsRlyzzKoMoGJmBoSV9iMOEQSGhPGgeHwLjyNs2nr-6xps0UBxdp0fP3CTtf5qiuhmMN9GAdGxoguuVtYGSAvhzUzx9jUmQxy0se8_0vvDozAQSfo4UVxnFUSSVn_mxRQs9ZZbBFtlFJA',

  // }
  return (
    // <div className="px-2 border-2 border-gray-400 w-full flex items-center justify-center mt-5 rounded-md">
      <button
        onClick={handleLogin}
        className="flex justify-center items-center w-full"
      >
        <img
          className="h-10 w-10"
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="googlepng"
        />
        <span>Login With Google</span>
      </button>
    // </div>
  );
};

export default FireBaseLoginBtn;
