import React from 'react';

import Left from '../components/home/Left';
import Right from '../components/home/Right';

const Home = () => {
    return (
         <div className="Home_page_layout pb-32 pt-20 lg-break:pt-0"
              style={{ color: 'var(--text-primary)', backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.35s ease, color 0.35s ease' }}>
            <div className='content max-w-7xl xl:max-w-5xl lg:max-w-4xl mx-auto flex justify-between p-4 lg-break:flex-col'>
                <Left />
                <Right />
            </div>
            {/* <SubHeader /> */}
        </div>
    );
}

export default Home;
