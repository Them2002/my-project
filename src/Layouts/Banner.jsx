import React from 'react';
const totalBannerData = [
    {
        total: 26,
        name: "Artwork"
    },
    {
        total: 18,
        name: "Aucation"
    },
    {
        total: 8,
        name: "Artist"
    },
];
const Banner = () => {
    return (
        <section className="w-full flex flex-col  mt-[165px]">
            <div className=' flex flex-row justify-center align-middle'>
                <div className='relative'>
                    <div className=' absolute right-0 '>
                        <img src="/Group.png" alt="Group w-[50px]" />
                    </div>
                </div>
                <div className="  max-w-[738px] w-full text-[rgba(255,255,255,1)]">
                    <h1 className='text-[100px] font-jura '>Discover <br />Collect and
                        <br /> Sell NFT.</h1>
                    <p className='text-3xl mt-[30px] font-inter'>Explore on the world’s best largest NFT marketplace</p>
                    <button className="bg-gradient-to-r justify-center font-inter from-purple-500 via-pink-500 to-cyan-500 h-[60px] w-[250px] text-[30px] mt-[69px] rounded-[15px] ]">Explore</button>
                    <ul className='mt-[50px] flex items-center gap-x-[50px]'>
                        {totalBannerData.map(item => (
                            <li key={item.name}>
                                <div className='text-[50px] font-jura '>{item.total}K+</div>
                                <div className='text-center font-inter text-[20px]'>{item.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-row justify-center">
                    <div className=''>
                        <div className='relative pb-[100px]'>
                            <div className=' absolute right-0 '>
                                <img src="/Group.png" alt="Group w-[50px]" />
                            </div>

                        </div>
                        <img src="/Vector.png" alt="vector" className='absolute' />
                        <img src="/Banner.png" alt="banner" className='w-[526px] h-[614px]' />
                    </div>
                </div>
            </div>


        </section >

    );
};

export default Banner;