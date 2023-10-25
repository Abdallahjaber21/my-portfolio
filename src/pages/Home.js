import React from 'react';

import SubHeader from '../components/home/SubHeader';
import Left from '../components/home/Left';
import Right from '../components/home/Right';

const Home = () => {
    return (
         <div className="Home_page_layout text-white  pb-32">
            <div className='content max-w-7xl mx-auto flex justify-between p-4'>
                <Left />
                <Right />
            </div>
            {/* <SubHeader /> */}
        </div>
    );
}

export default Home;
