import React, { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: FieldValues) => {

        setLoading(true);
        setError(null);

        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                'service_0cctgmo',
                'template_9cw1tr5',
                templateParams,
                'c1peG-NPtImxi-EvT'
            );

            setSent(true);
            setLoading(false);
            reset();

            setTimeout(() => {
                setSent(false);
            }, 4000);
        } catch (e: any) {
            console.error('EmailJS Error:', e);
            setError(e?.text || e?.message || 'Failed to send email. Please try again.');
            setLoading(false);
        }

    };

    const inputClasses = 'contact-input w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 border focus:outline-none focus:ring-2 placeholder:opacity-50';

    return (
        <div className='ContactForm'>
            <div className='container'>
                <div className='rounded-xl p-6 xs:p-4' style={{
                    backgroundColor: 'var(--bg-card-hover)',
                    border: '1px solid var(--bg-card-shadow)',
                }}>
                    {/* Header */}
                    <div className='mb-8'>
                        <h2 className='text-2xl font-bold' style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Get In Touch
                        </h2>
                        <p className='text-sm mt-2' style={{ opacity: 'var(--text-muted-opacity)' }}>
                            Have a project in mind or want to collaborate? Drop me a message.
                        </p>
                    </div>

                    <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                        {/* Name & Email row */}
                        <div className='grid grid-cols-2 gap-4 mb-5 xs:grid-cols-1'>
                            <div className='relative'>
                                <input
                                    type='text'
                                    {...register('name', {
                                        required: { value: true, message: 'Please enter your name' },
                                        maxLength: {
                                            value: 30,
                                            message: 'Please use 30 characters or less'
                                        }
                                    })}
                                    className={inputClasses}
                                    style={{
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--text-primary)',
                                        borderColor: errors.name ? '#ef4444' : 'var(--bg-card-shadow)',
                                    }}
                                    placeholder='Your name'
                                />
                                {errors.name && <span className='text-xs mt-1 block' style={{ color: '#ef4444' }}>{errors.name.message as string}</span>}
                            </div>
                            <div className='relative'>
                                <input
                                    type='email'
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                    className={inputClasses}
                                    style={{
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'var(--text-primary)',
                                        borderColor: errors.email ? '#ef4444' : 'var(--bg-card-shadow)',
                                    }}
                                    placeholder='Email address'
                                />
                                {errors.email && (
                                    <span className='text-xs mt-1 block' style={{ color: '#ef4444' }}>Please enter a valid email address</span>
                                )}
                            </div>
                        </div>

                        {/* Subject */}
                        <div className='mb-5'>
                            <input
                                type='text'
                                {...register('subject', {
                                    required: { value: true, message: 'Please enter a subject' },
                                    maxLength: {
                                        value: 75,
                                        message: 'Subject cannot exceed 75 characters'
                                    }
                                })}
                                className={inputClasses}
                                style={{
                                    backgroundColor: 'var(--bg-primary)',
                                    color: 'var(--text-primary)',
                                    borderColor: errors.subject ? '#ef4444' : 'var(--bg-card-shadow)',
                                }}
                                placeholder='Subject'
                            />
                            {errors.subject && (
                                <span className='text-xs mt-1 block' style={{ color: '#ef4444' }}>{errors.subject.message as string}</span>
                            )}
                        </div>

                        {/* Message */}
                        <div className='mb-6'>
                            <textarea
                                rows={6}
                                {...register('message', {
                                    required: true
                                })}
                                className={`${inputClasses} resize-none`}
                                style={{
                                    backgroundColor: 'var(--bg-primary)',
                                    color: 'var(--text-primary)',
                                    borderColor: errors.message ? '#ef4444' : 'var(--bg-card-shadow)',
                                }}
                                placeholder='Your message...'
                            />
                            {errors.message && <span className='text-xs mt-1 block' style={{ color: '#ef4444' }}>Please enter a message</span>}
                        </div>

                        {/* Submit */}
                        <div className='flex items-center gap-4'>
                            <button
                                type="submit"
                                disabled={loading}
                                className='group flex items-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-300'
                                style={{
                                    color: '#fff',
                                    opacity: loading ? 0.7 : 1,
                                }}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                                            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            {/* Inline success message */}
                            {sent && (
                                <div className='flex items-center gap-2 text-sm font-medium' style={{ color: 'var(--accent-teal)' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                    Message sent successfully!
                                </div>
                            )}

                            {/* Inline error message */}
                            {error && (
                                <div className='flex items-center gap-2 text-sm font-medium' style={{ color: '#ef4444' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Contact;
