const API_KEY = import.meta.env.API_KEY;
const API_SECRET = import.meta.env.API_SECRET;

async function generateToken() {
  const tokenGenerationURL =
    "https://test.api.amadeus.com/v1/security/oauth2/token";
  const tokenFetch = fetch(tokenGenerationURL);
}
