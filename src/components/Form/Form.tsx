import React, { useEffect, useState } from "react";
import s from "./Form.module.scss";
import Button from "../Buttons/Button";
import useFetch from "../../hooks/useFetch";
import Preloader from "../sharedComponents/Preloader";
import { useFormik } from "formik";
import * as Yup from "yup";
import useLocalStorage from "../../hooks/useLocalStorage";
import BackendErrors from "../sharedComponents/BackendErrors";
import { scroller } from "react-scroll";
const Successfull = React.lazy(() => import("./Successfull"));

const Form = ({ doSignedUp }) => {
  const {
    isLoading: posLoading,
    response: posResponse,
    doFetch: posFetch,
  } = useFetch("positions");
  const {
    isLoading: authLoading,
    response: authResponse,
    error,
    doFetch: doAuth,
  } = useFetch("users");
  const [auth, setAuth] = useLocalStorage("auth");
  const [positions, setPositions] = useState<{ id: number; name: string }[]>(
    []
  );
  const [checked, setChecked] = useState(1);
  const [fileBody, setFileBody] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  const errorMes = {
    nameLength: "Username should contain 2-60 characters",
    nameRequired: "Username is required",
    emailLength: "Email should contain 60 characters or less",
    emailRequired: "Email is required",
    emailIncorrect: "Incorrect email",
    phoneLength: "Phone number should contain 12 characters",
    phoneRequired: "Phone number is required",
    phoneValid: "Number should start with code of Ukraine +380 and be valid",
    fileSize: "Photo must be less than 5mb and more than 70x70 pixels",
    fileRequired: "Photo is required",
  };

  const phoneValidation = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      file: null,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, errorMes.nameLength)
        .max(60, errorMes.nameLength)
        .required(errorMes.nameRequired),
      email: Yup.string()
        .max(60, errorMes.emailLength)
        .email(errorMes.emailIncorrect)
        .required(errorMes.emailRequired),
      phone: Yup.string()
        .max(13, errorMes.phoneLength)
        .required(errorMes.phoneRequired)
        .matches(phoneValidation, errorMes.phoneValid),
    }),
    onSubmit: (values) => {
      if (!values.file) setFileError(errorMes.fileRequired);
      if (values.file && !authLoading) {
        var formData = new FormData();
        formData.append("name", values.username);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("position_id", String(checked));
        if (fileBody) formData.append("photo", fileBody);
        doAuth({
          method: "post",
          data: formData,
        });
      }
    },
  });

  const setFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    setFileError("");
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        const image = new Image();
        image.src = event.target.result;
        image.onload = (e: any) => {
          if (e.target.width < 70 || e.target.height < 70)
            setFileError(errorMes.fileSize);
        };
      };
      setFileBody(e.target.files[0]);
      if (e.target.files[0].size / 1024 > 5000) {
        setFileError(errorMes.fileSize);
      }
    } else {
      setFileError(errorMes.fileRequired);
      setFileBody(null);
    }
  };

  useEffect(() => {
    posFetch();
  }, [posFetch]);

  useEffect(() => {
    if (!posResponse) {
      return;
    }
    setPositions(posResponse.positions);
  }, [posResponse]);

  useEffect(() => {
    if (!authResponse) {
      return;
    }
    setAuth("authorized");
    doSignedUp();
    scroller.scrollTo("users", { duration: 1000, smooth: true, offset: -50 });
  }, [authResponse, setAuth, doSignedUp]);

  let nameError =
    (formik.touched.username && formik.errors.username) ||
    formik.errors.username === errorMes.nameLength;
  let emailError =
    (formik.touched.email && formik.errors.email) ||
    formik.errors.email === errorMes.emailLength;
  let phoneError =
    (formik.touched.phone && formik.errors.phone) ||
    formik.errors.phone === errorMes.phoneLength;

  if (auth) {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Successfull />
      </React.Suspense>
    );
  } else {
    return (
      <>
        <div id="form" className={s.wrapper}>
          <h1>Working with POST request</h1>
          <div className={s.container}>
            <form className={s.form}>
              {error && <BackendErrors backendErrors={error} />}
              <div
                className={
                  nameError ? `${s.inputItem} ${s.error}` : s.inputItem
                }
              >
                <span>Name</span>
                <input
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  name="username"
                  placeholder="Your Name"
                  onBlur={formik.handleBlur}
                />
                {nameError && (
                  <div className={s.errorMes}>{formik.errors.username}</div>
                )}
              </div>
              <div
                className={
                  emailError ? `${s.inputItem} ${s.error}` : s.inputItem
                }
              >
                <span>Email</span>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  placeholder="Email"
                  onBlur={formik.handleBlur}
                />
                {emailError && (
                  <div className={s.errorMes}>{formik.errors.email}</div>
                )}
              </div>
              <div
                className={
                  phoneError ? `${s.inputItem} ${s.error}` : s.inputItem
                }
              >
                <span>Phone</span>
                <input
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  name="phone"
                  placeholder="Phone"
                  onBlur={formik.handleBlur}
                />
                {phoneError && (
                  <div className={`${s.errorMes} ${s.margin}`}>
                    {formik.errors.phone}
                  </div>
                )}
                <p>{"+38 (XXX) XXX - XX - XX"}</p>
              </div>
              <div className={s.position}>
                <div className={s.position__title}>Select your position</div>
                {posLoading && <Preloader />}
                {positions &&
                  positions.map((pos) => (
                    <div
                      onClick={() => setChecked(pos.id)}
                      key={pos.id}
                      className={
                        pos.id === checked
                          ? `${s.position__item} ${s.active}`
                          : s.position__item
                      }
                    >
                      <input
                        type="radio"
                        name="position"
                        defaultChecked={pos.id === checked}
                        value={pos.id}
                      ></input>
                      <span>{[pos.name]}</span>
                    </div>
                  ))}
              </div>
              <div
                className={
                  fileError ? `${s.customUpload} ${s.error}` : s.customUpload
                }
              >
                <label>
                  <input
                    name="file"
                    type="file"
                    accept=".jpg, .jpeg"
                    onChange={setFile}
                  ></input>
                  Upload
                </label>
                {fileBody ? fileBody.name : "Upload your photo"}
              </div>
              <div className={`${s.errorMes} ${s.file}`}>{fileError}</div>
            </form>
          </div>
          <Button
            onClick={formik.handleSubmit}
            text="Sign up"
            disabled={!formik.isValid || !!fileError || authLoading}
          />
        </div>
        <div className={s.space}></div>
      </>
    );
  }
};

export default Form;
