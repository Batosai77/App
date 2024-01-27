'use client'
import { motion } from 'framer-motion'

const detailPages = () => {
	return (
		<>
			<motion.div
			initial={{ opacity:0 ,  scale:'0%'}}
			whileInView={{
				scale:'100%',
				opacity: 1,
			}}
			transition={{
				duration: 1.5
			}}
			className='w-full h-screen bg-slate-400'
			> 
				Details
			</motion.div>
			<motion.div 
			className='w-full h-screen'
			> 
				Details
			</motion.div>
			<motion.div 
			className='w-full h-screen'
			> 
				Details
			</motion.div>
		</>
		
	);
}
export default detailPages;