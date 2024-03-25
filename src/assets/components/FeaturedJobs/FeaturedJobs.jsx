// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
const [jobs, setJobs] = useState([])
const [dataLength, setDataLength] = useState(4)

useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
},[])

    return (
        <div>
            <div>
            <h2 className="text-6xl font-bold text-center mt-4">Featured Jobs {jobs.length}</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-9">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
            
                <div  className="text-center mt-6 mb-6 ">
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;