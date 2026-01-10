import { useState, useEffect } from "react";

function useGenerateToken() {
  const API_KEY = import.meta.env.VITE_APP_API_KEY_AMADEUS;
  const API_SECRET = import.meta.env.VITE_APP_API_SECRET_AMADEUS;
  const [generatedToken, setGeneratedToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const AUTH_BASE_URL = "https://test.api.amadeus.com/v1/security/oauth2/token";
  const body = {
    client_id: API_KEY,
    client_secret: API_SECRET,
    grant_type: "client_credentials",
  };

  const bodyString = new URLSearchParams(body).toString();
  // const finalURL = `${AUTH_BASE_URL}?${queryString}`;

  const fetchAuthToken = async () => {
    setLoading(true);
    try {
      const response = await fetch(AUTH_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: bodyString,
      });
      const authTokenData = await response.json();
      // console.log("authTokenData", authTokenData);
      setGeneratedToken(authTokenData?.access_token);
      return authTokenData?.access_token;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return { loading, generatedToken, fetchAuthToken };
}

export default useGenerateToken;
