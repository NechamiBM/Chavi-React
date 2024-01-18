import { useEffect, useState } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useSelector } from "react-redux";

const schema = yup
    .object({
        Name: yup.string().required(),
    })
    .required()

const Caterories = () => {
    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/category")
    //         .then(x => {
    //             setCategories(x.data)
    //         })
    //         .catch(err => console.log(err))
    // }, [])
    const categories=useSelector(state=>state.categories)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data)
        axios.post("http://localhost:8080/api/category", data)
            .then(x => {
                categories.push(x.data)
            })
            .catch(err => console.log(err))

    }

    return (<>
        {categories?.map((category) => (
            <h4 key={category.Id}>
                {category?.Name}
            </h4>
        ))}
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("Name")} placeholder="הוסף קטגוריה" />
            <p>{errors.Name?.message}</p>

            <input type="submit" />
        </form>
    </>)
}
export default Caterories;