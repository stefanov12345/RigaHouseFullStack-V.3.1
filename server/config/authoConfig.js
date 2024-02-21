import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  issuerBaseURL: "https://dev-qnwjq68ysys1hiri.us.auth0.com",
  audience: "http://localhost:8000",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
