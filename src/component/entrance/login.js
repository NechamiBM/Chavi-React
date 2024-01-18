import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from '../store/action';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import { Button } from '@mui/base/Button';
import { Input as BaseInput, inputClasses } from '@mui/base/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import { visuallyHidden } from '@mui/utils';



const schema = yup.object({
    Username: yup.string().required(),
    Password: yup.string().required().min(4),
    //Password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/, 'הסיסמא צריכה לכלול לפחות אות קטנה, אות גדולה, מספר, לפחות 4 תווים').required().min(4),
}).required();


//const Login1 = () => {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { register, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(schema)
//     });
//     //const onSubmit = data => console.log(data);

//     const onSubmit = (data) => {
//         axios.post(`http://localhost:8080/api/user/login`, data)
//         .then(x => {
//             dispatch({ type: actionType.SET_USER, paylaod: x.data })
//             navigate('/homepage');

//         })
//         .catch(err => {
//             console.log(err.data);
//             navigate('/signin')
//         })
//     }
//     return (

//             {/* <lable>password</lable> */}
//             <br />
//             <ListItemButton>
//                 <ListItemIcon>
//                     {/* <KeySharpIcon /> */}
//                     <>
//                         <KeySharpIcon />
//                         <input type="password"{...register("Password")} placeholder="password" ></input>
//                         <p>{errors.Password?.message}</p>
//                     </>
//                 </ListItemIcon>
//                 <ListItemText >
//                 </ListItemText>
//             </ListItemButton>

//             {/* <Input
//                     id="outlined-adornment-password"
//                     type={values.showPassword ? 'text' : 'password'}
//                     value={values.password}
//                     onChange={handleChange('password')}
//                     endAdornment={
//                         <InputAdornment>
//                             <IconButton
//                                 size="small"
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                             >
//                                 {values.showPassword ? (
//                                     <VisibilityOff fontSize="small" />
//                                 ) : (
//                                     <Visibility fontSize="small" />
//                                 )}
//                             </IconButton>
//                         </InputAdornment>
//                     }
//                 /> */}

//         </form>
//     );
//}
//export Login1;
// export default Login1;
const Input = React.forwardRef(function CustomInput(props, ref) {
    const { slots, ...other } = props;
    return (
        <BaseInput
            slots={{
                root: InputRoot,
                input: InputElement,
                ...slots,
            }}
            {...other}
            ref={ref}
        />
    );
});

Input.propTypes = {
    /**
     * The components used for each slot inside the InputBase.
     * Either a string to use a HTML element or a component.
     * @default {}
    */
    slots: PropTypes.shape({
        input: PropTypes.elementType,
        root: PropTypes.elementType,
        textarea: PropTypes.elementType,
    }),
};

export default function Login() {
    //export function InputAdornments() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    //const onSubmit = data => console.log(data);

    const onSubmit = (data) => {
        axios.post(`http://localhost:8080/api/user/login`, data)
            .then(x => {

                dispatch({ type: actionType.SET_USER, paylaod: x.data })
                navigate('/homepage');
                console.log(x.data);
                console.log("x.data");

            })
            .catch(err => {
                console.log("err.data");
                console.log(err.data);
                navigate('/signin')
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                    }}
                >
                    <Input
                        {...register("Username")}
                        id="outlined-start-adornment"
                        startAdornment={<InputAdornment>user name</InputAdornment>}
                        {...errors.Username?.message}
                    />
                    <Input
                        {...register("Password")} placeholder="password"
                        {...errors.Password?.message}
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        startAdornment={<InputAdornment>password</InputAdornment>}
                        onChange={handleChange('password')}

                        endAdornment={
                            <InputAdornment>
                                <IconButton
                                    size="small"
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? (
                                        <VisibilityOff fontSize="small" />
                                    ) : (
                                        <Visibility fontSize="small" />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </Box>
                <input type="submit" />
            </form>
        </>
    );
}

const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const InputRoot = styled('div')(
    ({ theme }) => `
            font-family: 'IBM Plex Sans', sans-serif;
            font-weight: 400;
            border-radius: 8px;
            color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
            background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
            border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
            box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
        };
            display: flex;
            align-items: center;
            justify-content: center;


            &.${inputClasses.focused} {
                border - color: ${blue[400]};
            box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

            &:hover {
                border - color: ${blue[400]};
    }

            // firefox
            &:focus-visible {
                outline: 0;
    }
            `,
);

const InputElement = styled('input')(
    ({ theme }) => `
            font-size: 0.875rem;
            font-family: inherit;
            font-weight: 400;
            line-height: 1.5;
            flex-grow: 1;
            color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
            background: inherit;
            border: none;
            border-radius: inherit;
            padding: 8px 12px;
            outline: 0;
            `,
);

const IconButton = styled(Button)(
    ({ theme }) => `
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: inherit;
            cursor: pointer;
            color: ${theme.palette.mode === 'dark' ? grey[300] : grey[700]};
            `,
);

const InputAdornment = styled('div')`
            margin: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            `;

