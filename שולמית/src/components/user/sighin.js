import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { addNewUser } from '../../server/userService'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
const schema = yup
  .object({
    Username: yup.string().required(),
    Password: yup.string().required(),
    Name: yup.string().required(),
    Phone: yup.number().positive().integer().required(),
    Email: yup.string().email(),
    Tz: yup.number().positive().integer()
  })
  .required()


const Sighin = () => {

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
    dispatch(addNewUser(data))
    // navig('/homePage')
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Username")} placeholder="userName" />
      <p>{errors.Username?.message}</p>

      <input {...register("Password")} placeholder="password" />
      <p>{errors.Password?.message}</p>

      <input {...register("Name")} placeholder="name" />
      <p>{errors.Name?.message}</p>

      <input {...register("Phone")} placeholder="phone" />
      <p>{errors.Phone?.message}</p>

      <input {...register("Email")} placeholder="Email" />
      <p>{errors.Email?.message}</p>

      <input {...register("Tz")} placeholder="Tz" />
      <p>{errors.Tz?.message}</p>

      <input type="submit" />
      <br />
      <Link to={'/Login'}>Do you have an account yet?  login now</Link>
    </form>
  )
}
export default Sighin;