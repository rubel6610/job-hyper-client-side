import React from 'react';
import { motion } from 'motion/react';
import team1 from "../../assets/Motions/team1.jpg"
import team2 from "../../assets/Motions/team2.jpg"
const Banner = () => {
  return (
    <div className="hero  bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <motion.img
            src={team1}
            animate={{ x: [0, 50, 0]}}
            transition={{ duration: 5, repeat: Infinity }}
            className="rounded-full w-96 border-8 border-s-fuchsia-700 border-b-blue-800  shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ y: [-50,-130,-50,]}}
            transition={{ duration: 5, repeat: Infinity,}}
            className="rounded-full w-96 border-8 border-s-fuchsia-700 border-b-blue-800  shadow-2xl"
          />
        </div>
        <div className='space-y-4'>
          <motion.h1 className="text-4xl font-bold">The Easiest Way
            to <br /> Get Your New Job</motion.h1>
          <p>Each month, more than 3 million job seekers turn to
            website in their search for work,<br /> making over 140,000
            applications every single day</p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;