import React from 'react'

export const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'bg-sky-300' : 'hidden'} onClick={toggle}>
            <div className='flex flex-col'>
                <span className='text-xl font-bold text-black p-4'>Rules</span>
                <span className='text-xl font-bold text-black p-4'>Campus Map</span>
            </div>
        </div>
    )
}
