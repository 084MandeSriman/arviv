import { useState } from 'react';
import { Link } from 'react-router-dom';

const JobApplication = ({ job, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    experience: '',
    currentCity: '',
    phoneNumber: '',
    resume: null,
    diversity: '',
    coverLetter: '',
    linkedinUrl: '',
    portfolioUrl: '',
    expectedSalary: '',
    noticePeriod: '',
    skills: [],
    availability: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skillOptions = {
    'Senior Full Stack Developer': ['React', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    'AI/ML Engineer': ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'AWS SageMaker'],
    'DevOps Engineer': ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Ansible', 'Linux', 'CI/CD'],
    'UI/UX Designer': ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems', 'Usability Testing'],
    'Data Analyst': ['SQL', 'Python', 'R', 'Tableau', 'Power BI', 'Excel', 'Statistics', 'Data Visualization']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    }
    if (step === 2) {
      if (!formData.experience) newErrors.experience = 'Experience is required';
      if (!formData.currentCity) newErrors.currentCity = 'Current city is required';
      if (!formData.resume) newErrors.resume = 'Resume is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Application submitted successfully!');
    setIsSubmitting(false);
    onClose();
  };

  const jobDetails = {
    'Senior Full Stack Developer': {
      id: '1045', experience: '7 - 10 Years', location: 'Chennai, Hyderabad', department: 'Development',
      postedDays: '7 days ago', postedBy: 'Saravana Kumar', salary: '₹15-25 LPA',
      description: 'We are looking for an experienced Full Stack Developer to join our dynamic team. The ideal candidate will have expertise in both front-end and back-end technologies, with a strong understanding of modern web development practices.',
      requirements: ['7+ years of experience in full-stack development', 'Proficiency in React, Node.js, and databases', 'Experience with cloud platforms (AWS/Azure)', 'Strong problem-solving skills']
    },
    'AI/ML Engineer': {
      id: '1046', experience: '5 - 8 Years', location: 'Bangalore, Hyderabad', department: 'AI & Data Science',
      postedDays: '5 days ago', postedBy: 'Priya Sharma', salary: '₹20-35 LPA',
      description: 'Join our AI team to develop cutting-edge machine learning solutions. You will work on innovative projects involving deep learning, natural language processing, and computer vision.',
      requirements: ['5+ years in AI/ML development', 'Strong Python and ML frameworks knowledge', 'Experience with deep learning and NLP', 'PhD/Masters in relevant field preferred']
    },
    'DevOps Engineer': {
      id: '1047', experience: '4 - 7 Years', location: 'Remote', department: 'Infrastructure',
      postedDays: '3 days ago', postedBy: 'Rajesh Kumar', salary: '₹12-20 LPA',
      description: 'We need a skilled DevOps Engineer to streamline our development and deployment processes. Experience with cloud platforms, containerization, and CI/CD pipelines is essential.',
      requirements: ['4+ years in DevOps/Infrastructure', 'Expertise in Docker, Kubernetes, AWS', 'CI/CD pipeline experience', 'Infrastructure as Code knowledge']
    },
    'UI/UX Designer': {
      id: '1048', experience: '3 - 6 Years', location: 'Hyderabad', department: 'Design',
      postedDays: '2 days ago', postedBy: 'Anita Reddy', salary: '₹8-15 LPA',
      description: 'Create exceptional user experiences for our digital products. We are looking for a creative designer with strong skills in user research, wireframing, and prototyping.',
      requirements: ['3+ years in UI/UX design', 'Proficiency in Figma, Adobe XD', 'User research and testing experience', 'Portfolio showcasing design process']
    },
    'Data Analyst': {
      id: '1049', experience: '2 - 5 Years', location: 'Bangalore', department: 'Analytics',
      postedDays: '1 day ago', postedBy: 'Vikram Singh', salary: '₹6-12 LPA',
      description: 'Analyze complex datasets to derive actionable insights for business decisions. Strong skills in SQL, Python, and data visualization tools are required.',
      requirements: ['2+ years in data analysis', 'Strong SQL and Python skills', 'Experience with BI tools', 'Statistical analysis knowledge']
    }
  };

  const currentJob = jobDetails[job.title] || jobDetails['Senior Full Stack Developer'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">Apply for {job.title}</h2>
              <div className="flex items-center gap-4 text-blue-100">
                <span>📍 {currentJob.location}</span>
                <span>💰 {currentJob.salary}</span>
                <span>⏰ {currentJob.experience}</span>
              </div>
            </div>
            <button onClick={onClose} className="text-white hover:text-gray-200 text-3xl font-bold">×</button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              {['Personal Info', 'Professional Details', 'Additional Info'].map((step, i) => (
                <span key={i} className={`text-sm ${currentStep > i ? 'text-white' : 'text-blue-200'}`}>
                  {step}
                </span>
              ))}
            </div>
            <div className="w-full bg-blue-400 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-300" style={{width: `${(currentStep / 3) * 100}%`}}></div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl p-6 sticky top-6">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Job Details</h4>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Job ID:</span>
                    <span className="font-semibold">{currentJob.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Department:</span>
                    <span className="font-semibold">{currentJob.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Posted:</span>
                    <span className="font-semibold">{currentJob.postedDays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Posted By:</span>
                    <span className="font-semibold">{currentJob.postedBy}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-bold text-slate-900 mb-2">Requirements</h5>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {currentJob.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <p className="text-xs text-slate-600">Join 500+ professionals at ARVISH CONSULTING</p>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">First Name *</label>
                        <input
                          type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-500' : 'border-slate-300'}`}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Middle Name</label>
                        <input
                          type="text" name="middleName" value={formData.middleName} onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Last Name *</label>
                      <input
                        type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-500' : 'border-slate-300'}`}
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Email ID *</label>
                        <input
                          type="email" name="email" value={formData.email} onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Phone Number *</label>
                        <input
                          type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.phoneNumber ? 'border-red-500' : 'border-slate-300'}`}
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Current City *</label>
                      <input
                        type="text" name="currentCity" value={formData.currentCity} onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Professional Details */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Professional Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Experience *</label>
                        <select
                          name="experience" value={formData.experience} onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.experience ? 'border-red-500' : 'border-slate-300'}`}
                        >
                          <option value="">Select Experience</option>
                          <option value="0-1">0-1 Years</option>
                          <option value="1-3">1-3 Years</option>
                          <option value="3-5">3-5 Years</option>
                          <option value="5-7">5-7 Years</option>
                          <option value="7-10">7-10 Years</option>
                          <option value="10+">10+ Years</option>
                        </select>
                        {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                      </div>
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Expected Salary</label>
                        <input
                          type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleInputChange}
                          placeholder="e.g., ₹15-20 LPA"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Resume *</label>
                      <input
                        type="file" name="resume" onChange={(e) => setFormData(prev => ({...prev, resume: e.target.files[0]}))}
                        accept=".pdf,.docx" className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                      />
                      <p className="text-xs text-slate-500 mt-1">Only .docx or .pdf files (Max 5MB)</p>
                      {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-2">Skills</label>
                      <div className="flex flex-wrap gap-2">
                        {skillOptions[job.title]?.map(skill => (
                          <button
                            key={skill} type="button" onClick={() => handleSkillToggle(skill)}
                            className={`px-3 py-1 rounded-full text-sm transition-colors ${
                              formData.skills.includes(skill) 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Notice Period</label>
                      <select
                        name="noticePeriod" value={formData.noticePeriod} onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Notice Period</option>
                        <option value="immediate">Immediate</option>
                        <option value="15-days">15 Days</option>
                        <option value="1-month">1 Month</option>
                        <option value="2-months">2 Months</option>
                        <option value="3-months">3 Months</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Additional Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">LinkedIn URL</label>
                        <input
                          type="url" name="linkedinUrl" value={formData.linkedinUrl} onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-medium mb-1">Portfolio URL</label>
                        <input
                          type="url" name="portfolioUrl" value={formData.portfolioUrl} onChange={handleInputChange}
                          placeholder="https://yourportfolio.com"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Cover Letter</label>
                      <textarea
                        name="coverLetter" value={formData.coverLetter} onChange={handleInputChange}
                        rows="4" placeholder="Tell us why you're interested in this role..."
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Diversity</label>
                      <select
                        name="diversity" value={formData.diversity} onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Prefer not to say</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">Availability for Interview</label>
                      <select
                        name="availability" value={formData.availability} onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select Availability</option>
                        <option value="weekdays">Weekdays (9 AM - 6 PM)</option>
                        <option value="weekends">Weekends</option>
                        <option value="evenings">Evenings (after 6 PM)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-slate-200">
                  <button
                    type="button" onClick={prevStep}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                      currentStep === 1 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </button>
                  
                  <div className="flex gap-3">
                    <button type="button" onClick={onClose} className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50">
                      Cancel
                    </button>
                    
                    {currentStep < 3 ? (
                      <button type="button" onClick={nextStep} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit" disabled={isSubmitting}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;