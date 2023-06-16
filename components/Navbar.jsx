
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsCart4 } from "react-icons/bs"
const Navbar = () => {
    return (
        <div className='bg-[#04111d] w-full px-[1.2rem] py-[0.8rem] flex'>
            <Link href="/">
                <div className='flex items-center cursor-pointer'>
                    <Image src="/assets/decentrallogofinal.png" height={40} width={40} className='rounded-full' />
                    <div className='text-white text-2xl ml-[13px] font-semibold'>
                        D-Center
                    </div>
                </div>
            </Link>
            <div className='flex flex-1 mx-[0.8rem] w-max-[520px] bg-[#363840] rounded-[0.8rem] items-center hover:bg-[#4c505c]'>
                <div className='text-[#8a939b] mx-3 font-bold text-lg'>
                    <AiOutlineSearch />
                </div>
                <input className='h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]' placeholder='Search items, collections..' />
            </div>
            <div className='flex items-center justify-end'>
                <Link href="/collections/0xf7a79d5cd3b84D4e179fCd05f8BB9cB1a04627F8">
                    <div className=' px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer'>
                        Collections
                    </div>
                </Link>
                <div className=' px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer'>
                    Fashion
                </div>
                <div className=' px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer'>
                    Beauty
                </div>
                <div className=' px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer'>
                    Electronics
                </div>
                <div className='text-[#8a939b] text-3xl font-black px-4 hover:text-white group cursor-pointer'>
                    <CgProfile />
                    <div className='absolute group-hover:visible invisible group-hover:translate-y-0 right-30'>
                        <div className='bg-gray-500 w-auto p-2 h-auto flex items-start flex-col rounded-lg z-[100]'>
                            <Link href="/profile"><p className='text-[13px] text-[#c8cacd] hover:text-white cursor-pointer'>Profile</p></Link>
                            <Link href="/orders"><p className='text-[13px] text-[#c8cacd] hover:text-white cursor-pointer'>Orders</p></Link>
                            <Link href="/logout"><p className='text-[13px] text-[#c8cacd] hover:text-white cursor-pointer'>Log Out</p></Link>
                        </div>
                    </div>
                </div>

                <div className=' text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer'>
                    <MdOutlineAccountBalanceWallet />
                </div>

                <Link href="/cart">
                    <div className='text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer'>
                        <BsCart4 />
                    </div>
                </Link>



            </div>
        </div>
    )
}

export default Navbar