import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "motion/react";

const ViewApplication = () => {
  const applications = useLoaderData();
  const handlestatus = (e, applicationId) => {
    console.log(e.target.value, applicationId);

    axios
      .patch(`http://localhost:3000/applicationStatus/${applicationId}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Status Updated",
            text: `You have successfully updated status for the job`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: error.message,
        });
      });
  };
  return (
    <div>
      <Navbar />
      {applications.length === 0 ? (
         <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex items-center justify-center  px-6"
    >
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-blue-600">No Application for this job</h1>
        <p className="text-gray-100 mt-2">No one still applied for this job</p>
        
    
      </div>
    </motion.div>
      ) : (
        <>
          <h1 className="text-center text-2xl font-bold">
            Total Application for this job: {applications.length}
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <label>#</label>
                  </th>
                  <th>Applicant</th>
                  <th>Portfolio link</th>
                  <th>Application status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application, index) => (
                  <tr key={application._id}>
                    <td>{index + 1}</td>
                    <td>{application.applicant}</td>
                    <td>
                      <h1>
                        <a href={application.github}>github</a>
                      </h1>
                      <h1>
                        <a href={application.linkedin}>linkedin</a>
                      </h1>
                      <h1>
                        <a href={application.instagram}>instagram</a>
                      </h1>
                    </td>
                    <td>
                      <select
                        onChange={(e) => handlestatus(e, application._id)}
                        className="select"
                        defaultValue={application.status}
                      >
                        <option disabled value="">
                          update status
                        </option>
                        <option value="Under Review">Under Review</option>
                        <option value="Call For Interview">
                          Call For Interview
                        </option>
                        <option value="Hired">Hired</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewApplication;
