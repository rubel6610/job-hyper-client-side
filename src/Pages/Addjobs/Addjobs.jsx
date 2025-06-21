
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import Navbar from '../../Components/Navbar';
import UseAuth from '../../Components/UseAuth';

const Addjobs = () => {
         const {user}=UseAuth();
    const handleAddJob = e => {
   
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const { Min, Max, currency, ...newJob } = data;
        newJob.salaryRange = { Min, Max, currency };
        const requirements = newJob.requirements.split(",").map(req => req.trim());
        newJob.requirements = requirements;
        const responsibilities = newJob.responsibilities.split(",").map(res => res.trim());
        newJob.responsibilities = responsibilities;

        //send data to backend
        axios.post('http://localhost:3000/addjobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Job Added Successfully',
                        text: "job added",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    form.reset();
                }
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Job add Failed',
                    text: error.message,
                });
            })
    }
    return (
        <>
         <Navbar/>
        <div className='grid justify-center'>
           
            <h1 className='text-2xl text-center my-2'>Add a job</h1>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full grid-cols-1  md:grid-cols-3  gap-4 border p-4">


                    <div>
                        <h1 className="label">Job Title</h1>
                        <input required type="text" name='title' className="input" placeholder="Job Title" />

                    </div>
                    <div>
                        <label className="label">Company</label>
                        <input required type="text" name='company' className="input" placeholder="Company" />

                    </div>
                    <div>
                        <label className="label">Company Logo</label>
                        <input required type="text" name='company_logo' className="input" placeholder="Company Logo" />
                    </div>

                </fieldset>
                {/* {job type} */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter gap-5">
                        <input required className="btn filter-reset" type="radio" name="JobType" />
                        <input required className="btn" type="radio" name="JobType" aria-label="On-Site" value="On Site" />
                        <input required className="btn" type="radio" name="JobType" aria-label="Remote" value="Remote" />
                        <input className="btn" type="radio" name="JobType" aria-label="Hybrid" Value="Hybrid" />

                    </div>

                </fieldset>
                {/* category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" name='category' required className="select w-full">
                        <option disabled={true}>Choose a Category</option>
                        <option Value="Engineering">Engineering</option>
                        <option Value="Marketing">Marketing</option>
                        <option Value="Sales">Sales</option>
                    </select>

                </fieldset>
                {/* Location */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">location</legend>
                    <input required type="text" name='location' className="input w-full" placeholder="Location" />

                </fieldset>
                {/* application deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>
                    <input required type="date" name='deadline' className="input w-full" placeholder="Deadline" />

                </fieldset>
                {/* salary range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className='grid grid-cols-1 md:grid-cols-3  gap-3'>
                        <div>
                            <label>Minimum Salary</label>
                            <input required type="text" name='Min' className="input w-full" placeholder="Minium Salary" />
                        </div>
                        <div>
                            <label>Maximum Salary</label>
                            <input required type="text" name='Max' className="input w-full" placeholder="Maximum Salary" />
                        </div>
                        <div>
                            <label>Salary Currency</label>
                            <select required defaultValue="Salary Currency" className="select w-full" name='currency'>
                                <option disabled={true}>Choose a Currency</option>
                                <option Value="BDT">BDT</option>
                                <option Value="USD">USD</option>
                                <option Value="EURO">EURO</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                {/* description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <textarea required name='description' className="textarea h-30 w-full" placeholder="Description"></textarea>

                </fieldset>
                {/* requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Requirements (Separate By Comma)</legend>
                    <textarea required name='requirements' className="textarea h-30 w-full" placeholder="Requirements"></textarea>

                </fieldset>
                {/* JOb responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">Job Responsibilities (Separate By Comma)</legend>
                    <textarea required name='responsibilities' className="textarea h-30 w-full" placeholder="Responsibilities"></textarea>

                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <legend className="fieldset-legend">HR Info</legend>
                    <label htmlFor="" className='label'>Hr Name</label>
                    <input type="text" name='hr_name' className="input w-full" placeholder="HR Name" />
                    <label className="label">Hr Email</label>
                    <input required disabled type="text" name='hr_email' className="input w-full" value={user.email} placeholder="HR Email" />

                </fieldset>
                <input className='btn w-full' type="submit" value="Add Job" />
            </form>
        </div>
        </>
    );
};

export default Addjobs;