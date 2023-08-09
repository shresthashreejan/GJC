import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const LandCard = ({
    index,
    title,
    location,
    district,
    price,
    image,
    status,
    landSize,
    roadSize,
    contactNumber,
    facingDirection
  }) => {
    
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 15,
            scale: 1,
            speed: 450,
          }}
          className='w-full green-pink-gradient p-[2px] rounded-2xl shadow-card'
        >
          <div className='bg-white p-5 rounded-2xl sm:w-[360px] w-full'>

          
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div className=' bg-secondary text-primary w-20 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <div className='object-contain'>{status}</div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-secondary font-bold text-[24px]'>{title}</h3>
            <p className='mt-2 text-secondary text-[18px]'>{location}, {district}</p>
            <p className='mt-2 text-secondary text-[18px]'>Area: {landSize}</p>
            <p className='mt-2 text-secondary text-[18px]'>Road size: {roadSize}</p>
            <p className='mt-2 text-secondary text-[18px]'>Contact: {contactNumber}</p>
            <p className='mt-2 text-secondary text-[18px]'>Rs. {price}</p>
            
          </div>
          </div>
        </Tilt>
      </motion.div>
    );
  };

  export default LandCard;