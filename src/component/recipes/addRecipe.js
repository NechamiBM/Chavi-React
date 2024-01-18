import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Input,Button } from "@mui/material";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from '../store/action';

const schema = yup
  .object({
    Name: yup.string().required(),
    UserId: yup.string().required(),
    CategoryId: yup.string().required(),
    Img: yup.string().required(),
    Duration: yup.string().required(),
    Difficulty: yup.string().required(),
    Description: yup.string().required(),
    Ingrident: yup.string().required(),
    Instructions: yup.string().required(),
  }).required()

export default function AddRecipe() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  
  const onSubmit = (data) => {
    console.log(data);
    axios.post(`http://localhost:8080/api/recipe`,data)
    .then(x => {
        dispatch({ type: actionType.SET_RECIPE, payload: x.data })
      })
      .catch(err => console.log(err))
        // if(err.response.data===)
        // console.log(err.response.data)})
  }
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("Name")} placeholder='Name' />
      <p>{errors.Name?.message}</p>

      <Input {...register("UserId")} placeholder='UserId' />
      <p>{errors.UserId?.message}</p>

////////////////////////////////categor.js
      <Input {...register("Img")} placeholder='Img' />
      <p>{errors.Img?.message}</p>

      <Input {...register("Duration")} placeholder='Duration' />
      <p>{errors.Duration?.message}</p>

      <Input {...register("Difficulty")} placeholder='Difficulty' />
      <p>{errors.Difficulty?.message}</p>
      
      <Input {...register("Description")} placeholder='Description' />
      <p>{errors.Email?.message}</p>
     
      <Input {...register("Ingrident")} placeholder='Ingrident' />
      <p>{errors.Ingrident?.message}</p>
     
      <Input {...register("Instructions")} placeholder='Instructions' />
      <p>{errors.Instructions?.message}</p>

      <Button variant="outlined" type="submit">שליחה</Button>
    </form>
  )
}