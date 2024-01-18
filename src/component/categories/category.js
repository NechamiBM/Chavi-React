
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as actionType from '../store/action';
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import axios from "axios";

export default function Category() {
  const [categories, setCategories] = React.useState([]);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
      axios.get(`http://localhost:8080/api/category`)
          .then(res => {
           // setCategories(res.data);
              dispatch({ type: actionType.SET_CATEGORY, payload: res.data })  
        }
          ).catch(err => console.log("bbvbhgfghgfg"));
  }, [])
  const categoris=useSelector(state => state.categories);
  // const handleChange = (event) => {
  //   setCategory(event.target.value);
  // };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={1}
        label="Age"
        //onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {categoris?.array?.forEach(c => {
            <div>
              <MenuItem value={c.Id}>{c.Name}</MenuItem>
            </div>
        })}
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}