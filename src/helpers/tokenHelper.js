import jwtDecode from "jwt-decode";

export const tokenHelper = {
    decodedToken,
}

function decodedToken(token) {
    try {
        if (token) {
            const data = jwtDecode(token);
            return data;
        }
      } catch (e) {
        console.log(e);
      }
}