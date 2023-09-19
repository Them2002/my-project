import React from 'react';
const navMenuData = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Explore',
        link: '/Explore'
    },
    {
        title: 'Products',
        link: '/Products'
    },
    {
        title: 'Activity',
        link: '/Activity'
    },
    {
        title: 'Elements',
        link: '/Elements'
    },
]
const Header = () => {
    return (
        <header className="h-[80px] fixed top-0 left-0 right-0 bg-[#191E35] shadow-md z-30 pl-[150px] pr-[150px]">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="logo w-[180px] justify-center" >
                    <a href="/" title='logo'>
                        <img src="/logo.png" alt="logo" />
                    </a>
                </div>
                <div >
                    <ul className="flex items-center gap-x-[30px] text-[#FFFF] font-jura">
                       {navMenuData.map((item) =>(
                       <li key={item.title}>
                           <a href={item.link} className='text-2xl'>{item.title}</a>
                           
                       </li>
                       ))}
                       <button className="bg-blue-600 text-[25px] w-[180px] font-inter justify-center rounded-[15px] items-center flex gap-2"> <img src="/icon.png" alt="" /> Wallte</button>
                    </ul>
                    
                </div>
            </div>
        </header>
    );
};

export default Header;