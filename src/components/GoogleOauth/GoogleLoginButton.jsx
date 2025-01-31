import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  
  const handleSuccess = (credentialResponse) => {
    console.log("Login successful:", credentialResponse);
  };

  const handleError = () => {
    console.log("Login failed");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div>
        <GoogleLogin 
          onSuccess={handleSuccess} 
          onError={handleError} 
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
