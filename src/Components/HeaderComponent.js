import React, { useState } from 'react';
// import { Link } from "react-router-dom"
import { Menu } from 'antd';
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { FaRegPlusSquare } from "react-icons/fa"
import { BiLogIn } from "react-icons/bi"


const HeaderComponent = (props) => {
    const [current, setCurrent] = useState('home');
    const navigater = useNavigate();

    const items = [
        {
            label: 'Home',
            key: 'home',
            icon: < AiFillHome />,

        },
        {
            label: 'Login',
            key: 'login',
            icon: < BiLogIn />,

        },
        {
            label: 'Register',
            key: 'register',
            icon: < FaRegPlusSquare />,

        }
    ];

    const clickBtn = (e) => {
        console.log(e)
        setCurrent(e.key)
        if (e.key == "home") {
            navigater("/")
        } else {
            navigater('/' + e.key)
        }

    }

    return (


        <Menu onClick={clickBtn} selectedKeys={[current]} mode="horizontal" items={items} />
        // <>

        //     <Link to="/">Home</Link>
        //     <Link to="/login">Login</Link>
        //     <Link to="/register">Register</Link>
        // </>


    );
};

export default HeaderComponent;