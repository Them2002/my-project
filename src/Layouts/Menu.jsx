import React, { useState } from 'react';

const Menu = () => {
  const [activeButton, setActiveButton] = useState('24H');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (

    <section className='flex flex-row justify-center '>
      <div className='flex flex-col'>
      <div className='text-center text-[#FFFF] text-[50px]'>
        <img src="/Line2.png" alt="" className="inline" /> Top Collections <img src="/Line1.png" alt="" className="inline" />
      </div>

      <div className="flex space-x-4 ">

        <button
          className={`px-4 py-2 rounded-[25px] ${activeButton === '24H' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          onClick={() => handleButtonClick('24H')}
        >
          24H
        </button>
        <button
          className={`px-4 py-2 rounded-[25px] ${activeButton === '7D' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          onClick={() => handleButtonClick('7D')}
        >
          7D
        </button>
        <button
          className={`px-4 py-2 rounded-[25px] ${activeButton === 'All Time' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          onClick={() => handleButtonClick('All Time')}
        >
          All Time
        </button>
      </div>
      <div>
        <table className='w-[1428px] mt-[30px] text-[30px] text-[#FFFF]'>
          <tr>
            <td>Collections</td>
            <td>Volume</td>
            <td>Floor Price</td>
            <td>Items</td>
          </tr>
          <tr>
            <td ><p className='text-[#F52AF5] inline'>1</p> <img src="/icon1.png" alt="" className="inline" />Bored Ape Yacht Club <img src="/icon10.png" alt="" className="inline" /></td>
            <td>230.38 ETH</td>
            <td>12.38 ETH</td>
            <td>138</td>
          </tr>
          <tr className='text-[20px]'>
            <td></td>
            <td className='text-[#00FF57]'>+50.20%</td>
            <td className='text-[#00FF57]'>+50.20%</td>
            <td></td>
          </tr>
          <tr>
            <td><p className='text-[#F52AF5] inline'>2</p> <img src="/icon2.png" alt=""className="inline" />
              Mutant Ape Yacht Club
              <img src="/icon10.png" alt="" className="inline" />
            </td>
            <td>138.38 ETH</td>
            <td>76.38 ETH</td>
            <td>122</td>
          </tr>
          <tr className='text-[20px]'>
            <td></td>
            <td className='text-[#00FF57]'>+28.20%</td>
            <td className='text-[#00FF57]'>+70.10%</td>
            <td></td>
          </tr>
          <tr>
            <td><p className='text-[#F52AF5] inline' >3</p> <img src="/icon3.png" alt=""className="inline" />
              Otherdeed for Otherside
              <img src="/icon10.png" alt="" className="inline"/>
            </td>
            <td>80.18 ETH</td>
            <td>91.38 ETH</td>
            <td>192</td>
          </tr>
          <tr className='text-[20px]'>
            <td></td>
            <td className='text-[#00FF57]'>+50.20%</td>
            <td className='text-[#FF0000]'>-32.20%</td>
            <td></td>
          </tr>
          <tr>
            <td><p className='text-[#F52AF5] inline'>4</p>
              <img src="/icon4.png" alt=""className="inline" />
              Pudgy Penguins
              <img src="/icon10.png" alt="" className="inline"/>
            </td>
            <td>291.38 ETH</td>
            <td>61.38 ETH</td>
            <td>22,000</td>
          </tr>
          <tr className='text-[20px]'>
            <td></td>
            <td className='text-[#FF0000]'>-49.20%</td>
            <td className='text-[#00FF57]'>+60.20%</td>
            <td></td>
          </tr>
          <tr>
            <td><p className='text-[#F52AF5] inline'>5</p> <img src="/icon5.png" alt="" className="inline" />
              Quirkies Originals
              <img src="/icon10.png" alt="" className="inline"/>
            </td>
            <td>81.38 ETH</td>
            <td>23.12 ETH</td>
            <td>2,321</td>
          </tr>
          <tr className='text-[20px]'>
            <td></td>
            <td className='text-[#FF0000]'>-15.20%</td>
            <td className='text-[#00FF57]'>+50.20%</td>
            <td></td>
          </tr>
          <tr>
            <td><p className='text-[#F52AF5] inline'>6</p> <img src="/icon6.png" alt="" className="inline" />
              Doodle
              <img src="/icon10.png" alt="" className="inline"/>
            </td>
            <td>340.21 ETH</td>
            <td>12.38 ETH</td>
            <td>2,721</td>
          </tr>
          <tr className='text-[20px]'>
            <td></td>
            <td className='text-[#00FF57]'>+50.20%</td>
            <td className='text-[#FF0000]'>-21.10%</td>
            <td></td>
          </tr>
          <tr>
            <td><p className='text-[#F52AF5] inline'>7</p> <img src="/icon7.png" alt="" className="inline" />
              Quirkies Original
              <img src="/icon10.png" alt="" className="inline" />
            </td>
            <td>263.82 ETH</td>
            <td>45.35 ETH</td>
            <td>712</td>
          </tr>
          <tr className='text-[20px]'>
            <td></td>
            <td className='text-[#00FF57]'>+42.20%</td>
            <td className='text-[#FF0000]'>-13.13%</td>
            <td></td>
          </tr>
        </table>
      </div>
      </div>
    </section>
  );
};

export default Menu;
