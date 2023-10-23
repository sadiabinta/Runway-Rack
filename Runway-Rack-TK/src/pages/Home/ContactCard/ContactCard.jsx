
import { FaRocketchat} from 'react-icons/fa';
const ContactCard = () => {
    return (
        <div className="md:flex justify-center gap-4">
            
<a href="#" className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className='flex'>
        <div  style={{height:'20px'}} className='w-50%'>
            <FaRocketchat></FaRocketchat>
        </div>
        <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">We are now available</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Call +1 555 666 888 for <br /> contuct with us</p>
        </div>
    </div>
</a>
<a href="#" className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">International Flight</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Call +1 555 666 888 for <br /> booking assistance</p>
</a>
<a href="#" className="block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Check Refund</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Call +1 555 666 888 for check <br /> refund status</p>
</a>

        </div>
    );
};

export default ContactCard;