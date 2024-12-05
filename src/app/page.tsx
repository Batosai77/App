'use client'

import { LoginRequest, LoginSchema } from "@/types/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"


const Page = () => {
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm<LoginRequest>({
    resolver: zodResolver(LoginSchema)
  })

  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      })
      if (response?.ok) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
    }
  })
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form onSubmit={onSubmit} method="post">
        <div className="card bg-primary text-primary-content w-96 h-96">
          <div className="card-body justify-center">
            <div className="mb-5">
              <label className="input input-bordered flex items-center gap-2 bg-primary border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 text-white">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow text-white" placeholder="Email"
                  {...register("email")}
                />
              </label>
            </div>
            {formState.errors.email && (<span className="absolute top-32 text-white">{formState.errors.email.message}</span>)}
            <div className="mb-10">
              <label className="input input-bordered flex items-center gap-2 bg-primary border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 text-white">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input type="password" className="grow text-white" placeholder="password"
                  {...register("password")}
                />
              </label>
            </div>
            {formState.errors.password && (<span className="absolute bottom-36">{formState.errors.password.message}</span>)}
            <div className="card-actions justify-center w-auto">
              <button className="btn btn-block bg-secondary border-secondary text-white">Login</button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default Page;