import React from 'react';

const Footerr = () => {
    return (
        <section className="w-full flex flex-col mt-[100px]">
            <div className='flex flex-row justify-center'>
                <div className='bg-[url("/bg_footer1.png")] bg-center bg-cover w-[1728px] h-[528px]'>
                    <div className='flex flex-row justify-between'>
                        <div className='basis-1/4 '>
                            <img src="/cogai.png" alt="cogai" className='w-[400px] h-[528px]' />
                        </div>
                        <div className='basis-3/4  pt-28 pl-[400px] text-[#FFFF] w-[541px]'>
                            <h1 className='text-[50px]'>Why choose us?</h1>
                            <p className='text-[20px]'>
                                Lorem ipsum dolor sit amet consectetur. Congue eu arcu <br />
                                neque um semper. Eros suspendisse varius enim ultrices  <br />
                                isque et quis ctumst. Feugiat amet velit faucibus amet <br />
                                <br />
                                Eu feugiat adipiscing viverrfeugiat. Mollis tellus <br />
                                malesuada massa amet lacinia aliquamid ultrices vitae. <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <div className='bg-[url("/bg_footer2.png")] bg-center bg-cover w-[1728px] h-[1389.84px] text-[#FFFF]'>
                    <div>
                        <h1 className='text-[100px] text-center mt-[100px]'>
                            NFT Marketplace
                        </h1>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='basis-1/3 pl-[150px]'>
                            <a href="/"> <img src="/logo.png" alt="logo" className='w-[426px] h-[121px]' /></a>
                        </div>
                        <div className='basis-2/3 pt-[100px] pl-[300px]'>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <h2 className="text-3xl mb-[50px]">Marketplace</h2>
                                    <ul>
                                        <li className='text-[20px] mt-[25px]'>Explore</li>
                                        <li className='text-[20px] mt-[25px]'>NFTs</li>
                                        <li className='text-[20px] mt-[25px]'>Collectibles</li>
                                        <li className='text-[20px] mt-[25px]'>Virtuallyreally</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-3xl mb-[50px]">Company</h2>
                                    <ul>
                                        <li className='text-[20px] mt-[25px]'>About Us</li>
                                        <li className='text-[20px] mt-[25px]'>Support</li>
                                        <li className='text-[20px] mt-[25px]'>Careers</li>
                                        <li className='text-[20px] mt-[25px]'>Contact Us</li>
                                    </ul>
                                </div>
                                <div >
                                    <h2 className="text-3xl mb-[50px]">Resources</h2>
                                    <ul>
                                        <li className='text-[20px] mt-[25px]'>Partners</li>
                                        <li className='text-[20px] mt-[25px]'>Blogs</li>
                                        <li className='text-[20px] mt-[25px]'>Help Center</li>
                                        <li className='text-[20px] mt-[25px]'>Live Action</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='relative'>
                        <div className=' absolute  right-[150px] mt-[50px]'>
                            <div className=' '>
                                <h1 className='  text-[30px] '>
                                    Follow Us
                                </h1>
                            </div>
                            <div className='flex  gap-x-[20px]  '>
                                <img src="/Ellipse1.png" alt="e1" />
                                <img src="/Ellipse2.png" alt="e2" />
                                <img src="/Ellipse3.png" alt="e3" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    );
};

export default Footerr;