import axios from "axios";

const URL: string = "https://lltprxrn-8000.inc1.devtunnels.ms";

export const signupApi = async (data: any) => {
  try {
    delete data?.confirm_password;
    const response = await axios.post(`${URL}/auth/signup/`, data);
    return response;
  } catch (error: any) {
    console.log("signup api error ==> ", error);
    return error?.response;
  }
};

export const signinApi = async (data: any) => {
  try {
    const response = await axios.post(`${URL}/auth/login/`, data);
    return response;
  } catch (error: any) {
    console.log("signin api error ==> ", error);
    return error?.response;
  }
};
