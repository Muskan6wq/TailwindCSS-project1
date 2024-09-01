import React from 'react'

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
        
        <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
            <img src ="./assets/Blue-Shape.svg" alt="1st" className="-rotate-45 h-64 md:h-72 lg:h-[400px]"/>
            <img src ="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64  md:h-72 lg:h-[400px]"/>
            <img src ="./assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64  md:h-72 lg:h-[400px]"/>
            <img src ="./assets/Hero-Model.png" alt="4th" className="absolute h-64  md:h-72 lg:h-[400px]"/>
        </div>
        <div className="lg:flex-1">
            <h1 className="text-5xl font-bold font-playfair leading-tight">Host your website in less than 5 minutes.</h1>
            <p className="py-2 text-gray-400 font-lato">With hoster , get your website up and running in no less than 5 minutes with the most competition  pricing packages available online.  </p>
            <form className="flex flex-col gap-6 md:flex-row">
                <input className="px-4 py-3 rounded-md placeholder:text-gray-400" type="email" placeholder="Enter e-mail address"></input>
                <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-300 text-white">Join Wishlist</button>
                </form>
                <div className="flex gap-3 lg:flex-1">
                    <img src="./assets/Checkmark.svg" alt="check"/>
                    <p className="font-lato text-gray-400">No spam, ever. Unsubscribe anytime.</p>
                </div>
            
        </div>
    </div>
  )
}

export default Body