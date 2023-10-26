import React from 'react';

const ProjectCard = (props) => {

  let skills = props?.project_skills?.split(",");

    return (
        <div className='project_card flex w-144 mb-10 p-2'>
        <div className='project_thumb_image flex-1 w-10'>
          <img srcSet={props?.project_img} className="h-20 object-cover rounded-sm"/>
        </div>
        <div className='details flex-auto w-64'>
          <div className='title text-md font-bold flex items-end gap-1'>
            <a href={props?.project_url} target='_blank'>{props?.title}</a> 
          </div>
          <div className='details mt-3 text-muted text-sm'>{props?.project_details}</div>
          <div className='skills mt-4 flex gap-2 flex-wrap'>
                {skills && skills?.map((skill , index) => (
                    <div key={index} id={index} className='skill_tag rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5'>{skill}</div>
                 ))}
          </div>
        </div>
    </div>
    );
}

export default ProjectCard;
