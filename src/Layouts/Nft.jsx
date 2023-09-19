import React from 'react';

const Nft = () => {
    return (
        <section className="w-full flex flex-col ">
            <div className="flex flex-row justify-center ">
                <div className='flex flex-row justify-between gap-x-[150px]'>
                    <div className="flex flex-1 justify-between ">
                        <div>
                            <img src="/img.png" alt="onggia" className="w-[480px] h-[640px]" />
                        </div>
                    </div>
                    <div className="flex flex-1 justify-between items-center font-inter text-[#FFFF]">
                        <div>
                            <h1 className="text-[50px]">NFT’s Story</h1>
                            <p className="text-[20px]">
                                Lorem Ipsum is simply dummy text of the printing <br />
                                and typesetting industry. Lorem Ipsum has been <br />
                                the industry's standard dummy text ever since the <br />
                                1500s, when an unknown printer took a galley of <br />
                                type and scrambled it to make a type specimen <br />
                                book.
                                <br />
                                Lorem Ipsum is simply dummy text of the printing <br />
                                and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nft;
