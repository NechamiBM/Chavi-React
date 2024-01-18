import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import loginUser from "../../server/loginUserService"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const schema = yup
  .object({
    Username: yup.string().required(),
    Password: yup.string().required(),
  })
  .required()

const Login = () => {

  const navig = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {

    dispatch(loginUser(data))
    // navig("/")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Username")} placeholder="Username" />
      <p>{errors.Username?.message}</p>

      <input type="password" {...register("Password")} placeholder="Password" />
      <p>{errors.Password?.message}</p>

      <input type="submit" />
      <br />
      <Link to={'/Sighin'}>Don't have an account yet? Sign in now</Link>
    </form>

  )
}
export default Login;