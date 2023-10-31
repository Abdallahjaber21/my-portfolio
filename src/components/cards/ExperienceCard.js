import React from 'react';

const ExperienceCard = (props) => {

    let skills = props?.position_skills?.split(",");

    let details = props?.position_details?.split(". ");

    return (
        <div className='experience_card flex 2xl:w-full xl:w-144 mb-10 p-2'>
            <div className='from_to flex-1 w-10 text-xs text-muted text-capital font-semibold'>{props?.from} - {props?.to}</div>
            <div className='details flex-auto w-64'>
              <div className='title text-md font-bold flex items-end gap-1'>
                <a href={props?.company_url} target='_blank'>{props?.title}</a> 
              </div>
              <div className='position text-sm font-semibold text-muted'>{props?.position}</div>
              <div className='details mt-3 text-muted text-sm'>
                {details?.map((detail , index) => (
                    <li key={index} id={index} className='pb-1'>{detail}.</li>
                 ))}
              </div>
              <div className='skills mt-4 flex gap-2 flex-wrap'>
                {skills?.map((skill , index) => (
                    <div key={index} id={index} className='skill_tag rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5'>{skill}</div>
                 ))}
              </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
