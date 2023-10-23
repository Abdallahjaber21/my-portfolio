import React from 'react';

const ExperienceCard = (props) => {
    return (
        <div className='experience_card flex w-144'>
            <div className='from_to flex-1 w-10'>{props?.from} - {props?.to}</div>
            <div className='details flex-auto w-64'>
              <div className='title'>{props?.title}</div>
              <div className='position'>{props?.position}</div>
              <div className='details'>{props?.position_details}</div>
              <div className='skills'>{props?.position_skills}</div>
            </div>
        </div>
    );
}

export default ExperienceCard;
