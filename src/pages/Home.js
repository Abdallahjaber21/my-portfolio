import React from 'react';

import SubHeader from '../components/home/SubHeader';
import Left from '../components/home/Left';
import Right from '../components/home/Right';
import Contact from '../components/home/Contact';

const Home = () => {
    return (
         <div className="Home_page_layout text-white  pb-32 pt-20 lg-break:pt-0">
            <div className='content max-w-7xl xl:max-w-5xl lg:max-w-4xl mx-auto flex justify-between p-4 lg-break:flex-col'>
                <Left />
                <Right />
            </div>
            {/* <SubHeader /> */}
        </div>
    );
}

export default Home;
