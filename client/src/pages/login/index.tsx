import type { FC } from "react";
import { Formik, Form } from "formik";
import { LOGIN_INITIAL_VALUES} from "../../utils/constants";
import type { LoginValues } from "../../types";
import Input from "../../components/form/input";
import { Link } from "react-router-dom";
import { loginSchema } from "../../utils/schema";
import { UseLogin } from "../../service/auth";


const Login: FC = () => {

 const {mutate,isPending} = UseLogin()
  const handleSubmit = (values: LoginValues) => {
    mutate(values)
  };

  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center">
      <div className="sm:mx-auto w-full sm:max-w-sm">
        <img src="/logo.svg" alt="logo" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Hesabını Oluştur
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={LOGIN_INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <Form className="space-y-6">
            <Input label="email" name="email" type="email" required />
            <Input label="Şifre" name="password" type="password" required />
            

            <div>
              <button
              disabled={isPending}
                type="submit"
                className="disabled:opacity-50 w-full flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold text-white hover:bg-indigo-500 cursor-pointer shadow-sm"
              >
                Giriş Yap
              </button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız yok mu?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Hesap Oluştur
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
