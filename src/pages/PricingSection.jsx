import React from "react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <>
      <div className='flex justify-between items-start cussm:flex-col cusLg:flex-row cussm:gap-y-4 cusLg:gap-0 cussm:items-center cusLg:items-start'>
        <div className='basis-cusBasis3'>
          <div className='max-w-full cussm:text-center cusLg:text-left'>
            <h2 className='text-cusFontSize10 '>Pricing</h2>
            <p className='text-cuscolor text-cusFontSize8'>
              We provide electrical requirements of residential, commercial and
              other clients
            </p>
            <button className='banner-text-link2 border-2 rounded-lg bg-orange-600 cursor-pointer btn2 mt-6 w-36 h-16 '>
              <Link to='/about' className='banner-text-link1'>
                Get Now
              </Link>
            </button>
          </div>
        </div>

        <div className=' flex justify-between items-start gap-4 cussm:flex-col cusLg:flex-row '>
          <div className='bg-cusBgCol4 p-cuspd4 text-white rounded-cusBradius2 relative'>
            <h2>Most popular plan</h2>
            <div className='w-fit bg-slate-400 p-cuspd5 rounded-cusBradius2 absolute top-4 right-2'>
              <h4>-20% off</h4>
            </div>
            <h1 className='text-cusFontSize11 my-3'>
              $90% <sub className='text-xl'>/MTH</sub>
            </h1>
            <hr />
            <div className='my-cusmb2'>
              <ul className='flex flex-col gap-y-cusgap3 my-cusp1 list-disc pl-cuspl2'>
                <li>Security Guard Services</li>
                <li>24/7 support</li>
                <li>HD Camera monitoring</li>
                <li>Access to all features</li>
                <li>Analysis and benefits</li>
                <li>Global Overview & Statistics</li>
              </ul>
            </div>
            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
              <Link to='/about' className='banner-text-link1'>
                View All
              </Link>
            </button>
          </div>

          <div className='p-cuspd4 text-cuscolor rounded-cusBradius2 shadow-customShadow'>
            <h2>Standard Plan</h2>
            <h1 className='text-cusFontSize11 my-3 text-cusBtnColor'>
              $90% <sub className='text-xl'>/MTH</sub>
            </h1>
            <hr />
            <div className='my-cusmb2'>
              <ul className='flex flex-col gap-y-cusgap3 my-cusp1 list-disc pl-cuspl2'>
                <li>Security Guard Services</li>
                <li>24/7 support</li>
                <li>HD Camera monitoring</li>
                <li>Access to all features</li>
                <li>Analysis and benefits</li>
                <li>Global Overview & Statistics</li>
              </ul>
            </div>
            <button className='border-2 rounded-lg text-center bg-orange-600 cursor-pointer btn2 sm:mt-4 w-32 h-16 z-20 cussm:w-full sm:w-32 text-cusFontSize1 cussm:mt-0 cussm:mb-3 sm:mb-2'>
              <Link to='/about' className='banner-text-link1'>
                Get Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
