import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import './Header.css';


const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const navigate = useNavigate();

    // const links = [
    //     {name: 'ALL HOTELS', link: '/'},
    //     {name:'CONTACT', Link: ':/contact'}
    // ];

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleBtnClick = () => {
        navigate('/')
    }
    
    return (
        <nav className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center bg-white justify-between py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        {/* Icons */}
                        <FontAwesomeIcon icon={faHotel} />
                        <Link to={'/'}>AIRBNB</Link>
                    </span>
                </div>
                <div onClick={handleClick} className='absolute text-3xl absolute right-8 top-6 cursor-pointer'>
                    <button className='dropdown-toggle md:hidden' type="button">
                        { isOpen
                        ? <FontAwesomeIcon icon={faXmark} className='text-3xl'/>
                        : <FontAwesomeIcon icon={faBars} className='text-3xl'/>}
                    </button>
                </div>

                {/* <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full 
                md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20' : 'top-[-490px]'} md:opacity-100 `}> 
                    {
                        
                        links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a className='text-gray-800 hover:text-gray-400 duration-500' href={link.link}>{link.name}</a>
                            </li>
                        ))
                    } 
                    <Button onClick={handleCreate}>Create</Button>
                </ul> */}
                <div className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full 
                md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20' : 'top-[-490px]'} md:opacity-100 `}>
                    <div className=' text-xl md:my-0 my-7'>
                        <Link to={'/'} className='text-gray-800 hover:text-gray-400 duration-500 md:ml-8 '>ALL HOTELS</Link>
                        <Link to={'/create'} className='text-gray-800 hover:text-gray-400 duration-500 md:ml-8'>CREATE</Link> 
                        {/* <button type='button' onClick={handleBtnClick}>Create</button> */}
                    </div>
                </div>
            </div>
        </nav>      
    )
}

export default Header;
