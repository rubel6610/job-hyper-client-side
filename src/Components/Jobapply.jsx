import React from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from './UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from './Navbar';

const Jobapply = () => {
    const { id: jobId } = useParams();
    const { user } = UseAuth();
    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { github, instagram, linkedin } = Object.fromEntries(formData.entries());
        const applicationData = {
            jobId,
            github,
            instagram,
            linkedin,
            applicant: user.email,
        }
        axios.post('https://job-hyper-server.vercel.app/applications', applicationData)
            .then(res => {
                const data = res.data;
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Apply Successfull',
                        text: `You have successfully applied for the job`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'apply Failed',
                    text: error.message
                });
            })
    }
    return (
        <div className=''>
            <Navbar />
            <form onSubmit={handleApply}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-6/12 mx-auto border p-4 space-y-3">
                    <h1 className=" text-2xl text-center">Apply job For</h1>

                    <label className="label">LinkedIn profile link</label>
                    <input type="text" name='linkedin' className="input w-full" placeholder="Linked profile link" required />

                    <label className="label">Instragram Profile link</label>
                    <input type="text" name='instagram' className="w-full input" placeholder="Instagram profile link" required />

                    <label className="label">Github profile link</label>
                    <input type="text" name='github' className="input w-full" placeholder="Github profile link" required />
                    <input className='btn btn-soft btn-secondary' type="submit" value="Apply" />
                </fieldset>

            </form>
        </div>
    );
};

export default Jobapply;