export const verifyUser = async (email, password) => {
  console.log(email, password);

  try {
    if (email == "pankajkaule@gmail.com" && password == "1234") {
      localStorage.setItem("authToken","dsfsdfdsfsdfds");
      return { token: "fdfsdfsdfsdfdsfd" };
    } else {
      return;
    }
  } catch (e) {
    console.log(e);
  }
};


export const signOut = async () => {

  try {
    localStorage.removeItem("authToken");
    return {msg:"success"}
  } catch (e) {
    console.log(e);
  }
};


export const saveUser = async () => {

  try {
    console.log("user saved to dataabse");
    
    return {msg:"success"}
  } catch (e) {
    console.log(e);
  }
};