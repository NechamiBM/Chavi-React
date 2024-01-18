import { useFieldArray, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import addNewRecipes from "../../server/addNewRecipe"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import editRecipe from "../../server/editRecipe";

const schema = yup
  .object({
    Name: yup.string().required(),
    CategoryId: yup.number().required(),
    Img: yup.string().required(),
    Duration: yup.number().positive().integer().required(),
    Difficulty: yup.number().positive().required(),
    Description: yup.string().required(),
    Ingrident: yup.array().of(
      yup.object().shape({
        Name: yup.string().required(),
        Count: yup.number().positive(),
        Type: yup.string().required(),
      })
    ),
    Instructions: yup.array().of(yup.string().required()),
  })
  .required()

const AddRecipes = () => {
  const { state } = useLocation();
  const recipe = state?.recipe;
  const user = useSelector(state => state.user)
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()


  const {
    register,
    handleSubmit,
    formState: { errors }, control
  } = useForm({
    resolver: yupResolver(schema),
    values: recipe,
  })
  const onSubmit = (data) => {

    data["UserId"] = user.Id;
    if (state)
      dispatch(editRecipe(data))
    else
      dispatch(addNewRecipes(data))
  }
  const { fields: fieldsIngrident, append: appendIngrident, remove: removeIngrident, } = useFieldArray({
    control,
    name: "Ingrident",
  });
  const { fields: fieldsInstructions, append: appendInstructions, remove: removevInstructions, } = useFieldArray({
    control,
    name: "Instructions",
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("Name")} placeholder="שם" />
      <p>{errors.Name?.message}</p>

      <select name="selectCategory" {...register("CategoryId")}>
        {/* /onChange={(e) => setCategory(e.target.value) */}
        <option value="" >בחר קטגוריה</option>
        {categories?.map((category1) => (
          <option key={category1.Id} value={category1.Id}>
            {category1.Name}
          </option>
        ))}
      </select>
      <br />

      <input {...register("Img")} placeholder="img" />
      <p>{errors.Img?.message}</p>

      <input {...register("Duration")} placeholder="duration" />
      <p>{errors.Duration?.message}</p>

      <select name="selectLevel" {...register("Difficulty")}>
        {/* onChange={(e) => setLevel(e.target.value) */}
        <option value="" >בחר רמה</option>
        <option value="1">קל</option>
        <option value="2">בינוני</option>
        <option value="3">קשה</option>
      </select>
      <br />

      <input {...register("Description")} placeholder="description" />
      <p>{errors.Description?.message}</p>

      {fieldsIngrident.map((field, index) => (
        <>

          <input {...register(`Ingrident.${index}.Name`)} placeholder="name" />
          <p>{errors.Ingrident?.[index]?.a?.message}</p>

          <input {...register(`Ingrident.${index}.Count`)} placeholder="count" />
          <p>{errors.Ingrident?.[index]?.b?.message}</p>

          <input {...register(`Ingrident.${index}.Type`)} placeholder="type" />
          <p>{errors.Ingrident?.[index]?.c?.message}</p>

          <button onClick={() => removeIngrident(index)}> delete</button>
          <hr />

        </>
      ))}
      <button onClick={() => appendIngrident({})}> addIngrident</button>
      {fieldsInstructions.map((field, index) => (
        <>

          <input {...register(`Instructions.${index}`)} placeholder="instruction" />
          <p>{errors.Instructions?.[index]?.a?.message}</p>



          <button onClick={() => removevInstructions(index)}> delete</button>
          <hr />

        </>
      ))}
      <button onClick={() => appendInstructions('')}> addIngrident</button>

      <input type="submit" />
    </form>
  )
}
export default AddRecipes;