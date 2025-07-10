"use client";

import React, { useEffect, useState } from 'react';
import { albra_grotesk, gilroy_semibold } from '@/lib/font';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API_BASE_URL } from '@/config';
import { ArrowLeft, UploadCloud, Check } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { uploadResumeToS3 } from '@/config/uploadToS3';

function JobApplicationForm({ jobId }) {
    const router = useRouter();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        coverLetter: '',
        hearAbout: ''
    }
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        coverLetter: '',
        hearAbout: ''
    });
    const [resumeFile, setResumeFile] = useState(null);
    const [formStatus, setFormStatus] = useState({ success: false, message: '' });

    useEffect(() => {
        const fetchJob = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${API_BASE_URL}/jobs/${jobId}`);
                setJob(response.data);
            } catch (error) {
                console.error('Error fetching job:', error);
                toast.error('Failed to load job details');
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [jobId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Upload resume first
            let resumeUrl = "";
            if (resumeFile) {
                resumeUrl = await uploadResumeToS3(resumeFile);
            }

            // Prepare application data
            const applicationData = {
                jobId,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                linkedin: formData.linkedin,
                portfolio: formData.portfolio,
                coverLetter: formData.coverLetter,
                hearAbout: formData.hearAbout,
                resumeUrl  // Pass the S3 URL instead of file
            };

            // Submit to your backend
            await axios.post(`${API_BASE_URL}/applications`, applicationData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Show success message
            setFormStatus({
                success: true,
                message: 'Application submitted successfully!'
            });

            // Reset form
            setFormData(initialFormState);
            setResumeFile(null);

        } catch (error) {
            console.error('Submission error:', error);
            setFormStatus({
                success: false,
                message: error.response?.data?.message || 'Failed to submit application'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2E0A49]"></div>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-[#2E0A49] mb-4">Job Not Found</h2>
                <button
                    onClick={() => router.push('/jobs')}
                    className="bg-[#2E0A49] text-white px-6 py-3 rounded-md hover:bg-[#2E0A49]/90 transition-colors"
                >
                    Browse Other Jobs
                </button>
            </div>
        );
    }

    return (
        <div className="text-[#2E0A49] w-full py-18 px-4 max-w-6xl mx-auto">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 mb-8 text-[#2E0A49] hover:text-[#2E0A49]/80 transition-colors"
            >
                <ArrowLeft size={20} />
                <span>Back to Jobs</span>
            </button>

            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for Position</h1>
                <div className="bg-gradient-to-r from-[#F3C862] via-[#FFE196] to-[#D99A26] w-32 h-1 mb-6"></div>

                <div className="bg-[#EDB6691A] border border-[#000000] p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{job.title}</h2>
                            <p className="text-xl uppercase text-[#000000] mb-4">{job.role}</p>
                            <p className={`${albra_grotesk.className} text-xl text-[#000000] mb-4`}>{job.description}</p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    <span>{job.type}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                    </svg>
                                    <span>{job.salary || 'Competitive Salary'}</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="mt-4 md:mt-0">
              <div className="bg-[#2E0A49] text-white px-6 py-3 rounded-md inline-block">
                Apply Now
              </div>
            </div> */}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border border-[#2E0A49]/20">
                <h3 className="text-2xl font-bold mb-6">Application Form</h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className={`${gilroy_semibold.className} grid grid-cols-1 md:grid-cols-2 gap-6`}>
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-lg font-medium">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E0A49] focus:border-transparent"
                                placeholder="John"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-lg font-medium">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E0A49] focus:border-transparent"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className={`${gilroy_semibold.className} grid grid-cols-1 md:grid-cols-2 gap-6`}>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-lg font-medium">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E0A49] focus:border-transparent"
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-lg font-medium">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E0A49] focus:border-transparent"
                                placeholder="+91 1234567890"
                            />
                        </div>
                    </div>

                    <div className={`${gilroy_semibold.className} grid grid-cols-1 md:grid-cols-2 gap-6`}>
                        <div className="space-y-2">
                            <label htmlFor="linkedin" className="block text-lg font-medium">
                                LinkedIn Profile
                            </label>
                            <input
                                type="url"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E0A49] focus:border-transparent"
                                placeholder="https://linkedin.com/in/yourprofile"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="portfolio" className="block text-lg font-medium">
                                Portfolio Website
                            </label>
                            <input
                                type="url"
                                name="portfolio"
                                value={formData.portfolio}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E0A49] focus:border-transparent"
                                placeholder="https://yourportfolio.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className={`${gilroy_semibold.className} block text-lg font-medium`}>
                            Upload Resume <span className="text-red-500">*</span>
                        </label>
                        <div className="border-2 border-dashed border-[#8D8D8D] rounded-lg p-8 text-center cursor-pointer hover:border-[#2E0A49] transition-colors">
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <label htmlFor="resume" className={`${gilroy_semibold.className} cursor-pointer flex flex-col items-center`}>
                                <UploadCloud className="text-[#2E0A49] w-12 h-12 mb-4" />
                                <p className="text-xl text-[#8D8D8D] mb-2">
                                    {resumeFile ? resumeFile.name : 'Click to upload resume'}
                                </p>
                                <p className="text-lg text-[#8D8D8D]">
                                    PDF, DOC, DOCX (Max 5MB)
                                </p>
                                {!resumeFile && (
                                    <button
                                        type="button"
                                        className="mt-4 bg-[#2E0A49] text-white px-6 py-2 rounded-md hover:bg-[#2E0A49]/90 transition-colors"
                                    >
                                        Select File
                                    </button>
                                )}
                            </label>
                        </div>
                    </div>

                    <div className={`${gilroy_semibold.className} space-y-2`}>
                        <label htmlFor="coverLetter" className="block text-lg font-medium">
                            Cover Letter
                        </label>
                        <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-3 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E0A49] focus:border-transparent"
                            placeholder="Tell us why you&apos;re the perfect fit for this role..."
                        />
                    </div>

                    <div className={`${gilroy_semibold.className} space-y-2`}>
                        <label htmlFor="hearAbout" className="block text-lg font-medium">
                            How did you hear about this position?
                        </label>
                        <select
                            name="hearAbout"
                            value={formData.hearAbout}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E0A49] focus:border-transparent"
                        >
                            <option value="">Select an option</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Job Portal">Job Portal (Naukri, Indeed, etc.)</option>
                            <option value="Company Website">Company Website</option>
                            <option value="Referral">Employee Referral</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-[#2E0A49] text-white px-8 py-4 rounded-md text-lg font-semibold w-full md:w-auto flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#2E0A49]/90'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                                    <span>Submitting Application...</span>
                                </>
                            ) : (
                                <>
                                    <Check size={20} />
                                    <span>Submit Application</span>
                                </>
                            )}
                        </button>

                        {formStatus.message && (
                            <div className={`mt-4 p-4 rounded-lg text-center ${formStatus.success
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}>
                                {formStatus.message}
                            </div>
                        )}
                    </div>
                </form>
            </div>

            <div className="mt-16 bg-[#EDB6691A] border border-[#000000] p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">About Haatak</h3>
                <p className="text-lg mb-6">
                    At Haatak, we&apos;re revolutionizing how Indians save and invest. Our mission is to make saving
                    a national habit by providing accessible, secure, and rewarding investment opportunities
                    through our digital gold platform.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                        <div className="bg-[#2E0A49] p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Our Mission</h4>
                            <p>Democratize gold investment for every Indian</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-[#2E0A49] p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Our Culture</h4>
                            <p>Innovative, collaborative, and customer-focused</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-[#2E0A49] p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Our Values</h4>
                            <p>Trust, transparency, and financial empowerment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobApplicationForm;