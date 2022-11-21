import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useLoginMutation} from '../../app/store/apiSlice'
import { setPhone } from "../../app/store/authSlice";

export default function Verify() {
  const redirectTo = useSelector((s) => s.ui.redirects.successLogin);
  const [otp, setOtp] = useState("");
  const [login, { data, error, isLoading }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const phone = useSelector((s) => s.auth.phone);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      verify
        .confirm(otp)
        .then((result) => {
          result.user.getIdToken().then((firebaseIdToken) => {
            dispatch(setFirebaseIdToken(firebaseIdToken));
            console.log(firebaseIdToken);
            login({
              firebaseIdToken
            });
          });
        })
        .catch((err) => {
          alert("Wrong code");
        });
    } catch {
      router.push("/login" + `?err=Something went wrong`);
    }
  };
  return (
    <div>Verify</div>
  )
}
