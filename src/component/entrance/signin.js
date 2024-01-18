//form
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import * as React from 'react';

//import { useEffect , useNavigate} from "react";
//redax & nav
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from '../store/action';
//password icon
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import { Button } from '@mui/base/Button';
import { Input as BaseInput, inputClasses } from '@mui/base/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//phone icon 
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
//email icon
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';

//form
const schema = yup.object({
    Username: yup.string().required(),
    Password: yup.string().required().min(4),
    Name: yup.string().required(),
    Phone: yup.string().required().min(6).max(12),
    Email: yup.string().email().required(),
    Tz: yup.string().required().length(9),

}).required();
//password icon
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

const Signin = () => {

    //password icon
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
    //redax & nav
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    //redax & nav
    const onSubmit = (data) => {
        console.log(data);
        // if (post) {
        //data.userId = userId;
        axios.post(`http://localhost:8080/api/user/sighin`, data)
            .then(x => {
                console.log(x.data);
                //addPost(x.data)
                dispatch({ type: actionType.SET_USER, paylaod: x.data });

                navigate('/homepage');
            })
            .catch(err => console.log(err.date))
        // }
        // else {

        //     data.userId = userId;
        //     axios.post("https://jsonplaceholder.typicode.com/posts", data)
        //         .then(x => {
        //             console.log(x.data)
        //             addPost(x.data)

        //         })
        //         .catch(err => console.log(err))
        // }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{//עיצוב כללי
                        display: 'flex',
                        flexDirection: { xs: 'row', sm: 'column' },
                        gap: 0.1,
                    }}
                >
                    <Input
                        {...register("Username")}
                        id="outlined-start-adornment"
                        startAdornment={<InputAdornment>user name</InputAdornment>}
                        {...errors.Username?.message}
                    />
                    <br />
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
                    <br />
                    <Input
                        {...register("Name")}
                        id="outlined-start-adornment"
                        startAdornment={<InputAdornment>name</InputAdornment>}
                        {...errors.Name?.message}
                    />
                    <br />
                    {/* phone icon */}
                        
                    {/* <Stack direction="row" spacing={2}>
                    <ThemeProvider theme={theme}>
                        
                        <Chip icon={<MdPhone />} label="Call me" />
                        <Chip icon={<Icon className="fas fa-phone-alt" />} label="Call me" />
                    </ThemeProvider>
                    </Stack> */}
                    <Input                      
                        {...register("Phone")}
                        type="tel"
                        id="outlined-start-adornment"
                        startAdornment={<InputAdornment>Phone</InputAdornment>}
                        {...errors.Phone?.message}
                        endAdornment={
                            <InputAdornment>
                            <Chip icon={<MdPhone />} />
                            </InputAdornment>
                        }
                    />
                    <br />
                    <Input
                        {...register("Email")}
                        id="outlined-start-adornment"
                        startAdornment={
                            <InputAdornment>Email</InputAdornment>
                        }
                        {...errors.Email?.message}
                        endAdornment={
                            <InputAdornment>
                            <Chip icon={<AlternateEmailSharpIcon />} />
                            </InputAdornment>
                        }                     
                    />
                    <br />
                    <Input
                        {...register("Tz")}
                        id="outlined-start-adornment"
                        startAdornment={<InputAdornment>Tz</InputAdornment>}
                        {...errors.Tz?.message}
                    />
                </Box>
                <input type="submit" />
            </form>
        </>
    );
}
export default Signin;

//style
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
        //הוספה שלי
        line-width: 100;
        display: flex;
        align-items: flex-start;
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


