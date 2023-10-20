import React from 'react';
import { Carousel } from 'antd';

const Home = (props) => {
    return (

        <div className='homepage'>

            <Carousel autoplay>
                <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/09/hinh-anh-20-10-1-1.jpg' />
                <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/09/hinh-anh-20-10-2-1.jpg' />
                <img src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/09/hinh-anh-20-10-thumbnail.jpg' />

            </Carousel>
            <h1>Chào mừng ngày phụ nữ VN</h1>

        </div>
    );
};

export default Home;