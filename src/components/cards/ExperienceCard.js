import React from 'react';

const ExperienceCard = (props) => {

    let skills = props?.position_skills?.split(",");

    console.warn('<<< skills >>>' , skills);

    return (
        <div className='experience_card flex w-144 mb-20'>
            <div className='from_to flex-1 w-10 text-sm text-muted text-capital'>{props?.from} - {props?.to}</div>
            <div className='details flex-auto w-64'>
              <div className='title text-lg'>{props?.title}</div>
              <div className='position text-sm text-muted'>{props?.position}</div>
              <div className='details mt-3 text-muted text-sm'>{props?.position_details}</div>
              <div className='skills mt-4 flex gap-2'>
                {skills?.map((skill , index) => (
                    <div key={index} id={index} className='skill_tag rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5'>{skill}</div>
                 ))}
              </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
