import { FaLocationDot } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, location, job_type, salary, remote_or_onsite } = job
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-5">
                    <h2 className="flex gap-2"><FaLocationDot className="text-2xl"></FaLocationDot>{location}</h2>
                    <h2 className="flex gap-2"><LuBadgeDollarSign className="text-2xl"></LuBadgeDollarSign>{salary}</h2>
                </div>
                <div className="card-actions justify-start mt-3">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;