import Image from "next/image";
import Link from "next/link";
import styles from "../signin/page.module.css";
import classNames from "classnames";
import FormWrapper from "@/components/FormWrapper/FormWrapper";

export default function SignIn() {
  return (
    <FormWrapper>
      <a href="../">
        <div className={styles.modalLogo}>
          <Image
            width={140}
            height={21}
            src="/img/logo_modal.png"
            alt="logo"
          />
        </div>
      </a>
      <input
        className={classNames(styles.modalInput, styles.login)}
        type="text"
        name="login"
        placeholder="Почта"
      />
      <input
        className={classNames(styles.modalInput, styles.password)}
        type="password"
        name="password"
        placeholder="Пароль"
      />
      <button className={styles.modalBtnEnter}>
        <Link href="/">Войти</Link>
      </button>
      <Link href="/signup" className={styles.modalBtnSignup}>
        Зарегистрироваться
      </Link>
    </FormWrapper>
  );
}
