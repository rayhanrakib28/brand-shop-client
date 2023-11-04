import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='flex flex-col justify-center justify-items-center items-center bg-red-700 min-h-screen'>
            <h1></h1>
            <div className='text-center'>
                <h2 className='text-4xl my-3 uppercase text-gray-200'>Oops, page not found!</h2>
                <Link to="/">{<button className="btn text-xl my-6 bg-white text-red-700 hover:bg-red-700 hover:text-white">Back To Home</button>}</Link>
            </div>
        </div>
    );
};

export default Error;