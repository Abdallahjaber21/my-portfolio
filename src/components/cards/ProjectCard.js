import React from 'react';

const ProjectCard = (props) => {

  let skills = props?.project_skills?.split(",");
  let screenshots = props?.project_screenshot?.split(",");

    return (
      
        <div className='project_card flex 2xl:w-full xl:w-144 mb-10 p-2 gap-x-10 lg-break:w-full lg-break:p-0 xs:flex-col'>
        <div className='project_thumb_image flex-1 2xl:w-14 xl:w-10 flex justify-center lg-break:justify-start items-start xs:w-full xs:justify-start'>
          <img srcSet={props?.project_img} style={{background: props?.image_bg , padding: '5px'}} className="object-contain rounded-sm max-h-36 max-w-56 w-fit object-left xs:h-fit"/>
        </div>
        <div className='details flex-auto w-64 xs:w-full xs:mt-2'>
          <div className='title text-md font-bold flex items-end gap-1'>
            <a href={props?.project_url} target='_blank'>{props?.title}</a> 
          </div>
          <div className='details mt-3 text-sm flex gap-2 xxs:overflow-x-auto'>
            {/* {props?.project_details} */}
            {screenshots && screenshots?.map((img , index) => (
                     <img key={index} id={index} srcSet={`/images/projects/`+img} alt="Image" className='h-[250px] w-[140px] xxs:w-full' />
            ))}
          </div>
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
