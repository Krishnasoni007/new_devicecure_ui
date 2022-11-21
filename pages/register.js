import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRegisterMutation } from "../app/store/apiSlice";
import SignUp from "../components/auth/SignUp";

export default function Register() {
  const firebaseIdToken = useSelector((s) => s.auth.firebaseIdToken);
  useEffect(() => {
    if (!firebaseIdToken) {
      router.replace("/signin");
    }
  }, [firebaseIdToken]);

  const router = useRouter();

  const [register, { data, error, isLoading }] = useRegisterMutation();
  useEffect(() => {
    console.log(data);
    if (data) {
      router.replace("/");
    }
  }, [data]);
  const handleFormSubmit = (e) => {
    const email = e.target.email;
    const name = e.target.name;
    register({
      email,
      name,
      firebaseIdToken,
    });
  };

  return <SignUp formTitle="Sign Up" onSubmit={handleFormSubmit} />;
}



Register.getInitialProps = ({res,user})=>{
  if (res) {
    res.writeHead(307, { Location: '/signin' })
    res.end()
}
return {}
}