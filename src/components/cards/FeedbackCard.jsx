import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
  }) => (
    
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-white p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-secondary font-black text-[48px]'>"</p>
  
      <div className='mt-1'>
        <p className='text-secondary tracking-wider text-[18px]'>{testimonial}</p>
  
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-secondary font-medium text-[16px]'>
              <span>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
  
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );

  export default FeedbackCard;