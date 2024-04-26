"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "../signup/page.module.css";
import classNames from "classnames";
import FormWrapper from "@/components/FormWrapper/FormWrapper";
import { useState } from "react";
import { setAuthState, setAuthUserData } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/types/hooks";
import { register } from "@/api/api";

const SignUp = () => {

  const dispatcher = useAppDispatch();

  const registerForm = {
    email: '',
    password: '',
    username: '',
    repeatedPassword: '',
  };
  const [registerData, setRegisterData] = useState(registerForm);
  const [hasError, setHasError] = useState(false);

  const router = useRouter();
  const authState = useAppSelector((state) => state.auth.authState);
  if (authState) {
    router.push('/signin');
    return null;
  }

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      if (registerData.password !== registerData.repeatedPassword) {
        setHasError(true);
        throw new Error('Пароль не совпадает');
      }
      if (registerData.email === "" ||
        registerData.password === "" ||
        registerData.username === "" ||
        registerData.repeatedPassword === "") {
        setHasError(true);
        throw new Error('Заполните все поля ввода');
      }
      await register(registerData).then((data) => {
        dispatcher(setAuthUserData(data));
        dispatcher(setAuthState());
        router.push('/signin');
      });
    } catch (error: any) {
      setHasError(error.message);
      console.error(error);
      setTimeout(() => {
        setHasError(false);
      }, 3000);
    };
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  return (
    <FormWrapper>
      <div className={styles.modalLogo}>
        <Link href="/">
          <Image
            width={140}
            height={21}
            src="/img/logo_modal.png"
            alt="logo"
          />
        </Link>
      </div>
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="username"
        placeholder="Имя"
        value={registerData.username}
        onChange={handleInputChange}
      />
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="email"
        placeholder="Почта"
        value={registerData.email}
        onChange={handleInputChange}
      />
      <input
        className={classNames(styles.modalInput, styles.passwordFirst)}
        type="password"
        name="password"
        placeholder="Пароль"
        value={registerData.password}
        onChange={handleInputChange}
      />
      <input
        className={classNames(styles.modalInput, styles.passwordDouble)}
        type="password"
        name="repeatedPassword"
        placeholder="Повторите пароль"
        value={registerData.repeatedPassword}
        onChange={handleInputChange}
      />

      <div className={styles.buttonBox}>
        {hasError ? (
          <>
            <button
              id="btnEnter"
              disabled
              className={styles.modalBtnEnter}
              onClick={handleRegister}
            >
              <p>{hasError}</p>
            </button>
          </>
        ) : (
          <button
            id="btnEnter"
            className={styles.modalBtnEnter}
            onClick={handleRegister}
          >
            Зарегистрироваться
          </button>
        )}

        <Link href="/signin" className={styles.modalBtnSignin}>
          Уже есть аккаунт? Войти
        </Link>
      </div>

    </FormWrapper>
  );
}

export default SignUp;