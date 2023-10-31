import React from 'react';

const ProjectCard = (props) => {

  let skills = props?.project_skills?.split(",");

    return (
        <div className='project_card flex 2xl:w-full xl:w-144 mb-10 p-2 gap-x-10'>
        <div className='project_thumb_image flex-1 2xl:w-14 xl:w-10 flex justify-center items-start'>
          <img src={props?.project_img} style={{background: props?.image_bg , padding: '5px'}} className="object-cover rounded-sm max-h-36"/>
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
