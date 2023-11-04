import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();

      const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
          const templateParams = {
            name,
            email,
            subject,
            message
          };
          await emailjs.send(
            'service_szzc7fb',
            'template_9cw1tr5',
            templateParams,
            'c1peG-NPtImxi-EvT'
          );

          var toast = document.getElementById('toast-top-right');
            toast.classList.remove('hidden');

            setTimeout(() => {
                 toast.classList.remove('opacity-0');
            }, 100);

            setTimeout(() => {
                toast.classList.add('opacity-0');
                
                setTimeout(() => {
                  toast.classList.add('hidden');
                }, 100);
            }, 3000);
          reset();
        } catch (e) {
          console.log(e);
        }
      };

      return (
        <div className='ContactForm'>
          <div className='container'>
            <div className='bg-primary rounded-lg'>
              <div className='mb-6'>
                <h2 className='text-2xl font-bold'>Contact Us</h2>
              </div>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate autocomplete="off">
                {/* Row 1 of form */}
                <div className='grid grid-cols-2 gap-4 mb-4 xs:grid-cols-1'>
                  <div className='relative'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='w-full text-white px-3 py-2  rounded transition bg-[#122b39] duration-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-teal font-semibold'
                      placeholder='Name'
                    />
                    {errors.name && <span className='errorMessage text-xs text-teal font-semibold'>{errors.name.message}</span>}
                  </div>
                  <div className='relative'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zAZ0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='w-full text-white px-3 py-2  rounded transition bg-[#122b39] duration-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-teal font-semibold'
                      placeholder='Email address'
                    />
                    {errors.email && (
                      <span className='errorMessage text-xs text-teal font-semibold'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='mb-4'>
                  <input
                    type='text'
                    name='subject'
                    {...register('subject', {
                      required: { value: true, message: 'Please enter a subject' },
                      maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters'
                      }
                    })}
                    className='w-full text-white px-3 py-2  rounded transition bg-[#122b39] duration-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-teal font-semibold'
                    placeholder='Subject'
                  />
                  {errors.subject && (
                    <span className='errorMessage text-xs text-teal font-semibold'>{errors.subject.message}</span>
                  )}
                </div>
                {/* Row 3 of form */}
                <div className='mb-4'>
                  <textarea
                    rows={8}
                    name='message'
                    {...register('message', {
                      required: true
                    })}
                    className='w-full px-3 text-white py-2  rounded transition bg-[#122b39] duration-300 focus:outline-none focus:border-white focus:ring-1 focus:ring-teal font-semibold'
                    placeholder='Message'
                  />
                  {errors.message && <span className='errorMessage text-xs text-teal font-semibold'>Please enter a message</span>}
                </div>
                <div className='text-left'>
                  <button className='hover:bg-[#122b39] hover:text-teal font-semibold text-white px-4 py-2 rounded transition duration-300'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div id="toast-top-right" className="hidden opacity-0 fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-green-dark divide-x divide-gray-200 rounded-sm shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transition-all duration-200" role="alert">
              <div className="text-sm font-normal">Email Was Sent Successfully!</div>
          </div>
        </div>
      );
      
}

export default Contact;
