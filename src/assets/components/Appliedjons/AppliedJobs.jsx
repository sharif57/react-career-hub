import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData()
 
    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(()=> {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobsApplied)

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
        }
        
    } ,[])
    return (
        <div>
            <h2 className="text-2xl text-center">jobs I applied: {appliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;