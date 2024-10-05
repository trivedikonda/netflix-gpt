import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pl-20 px-6 w-screen aspect-video pt-[20%] text-white px-12 absolute bg-gradient-to-r from-black">
    <h1 className="text-2xl md:text-6xl font-bold mb-4">{title}</h1>
    <p className="hidden md:inline-block py-6 text-gray-300 text-sm mb-6 w-1/4">{overview}</p>
    <div className="flex my-4 md:m-0">
        <button className="bg-white text-black font-semibold py-1 md:py-4 px-3 md:px-12 rounded hover:bg-red-700 transition">▶️ Play</button>
        <button className="hidden md-inline-block border border-white text-white font-semibold py-2 px-4 mx-2 my-4 rounded hover:bg-white hover:text-gray-900 transition">More Info</button>
    </div>
</div>
  )
}

export default VideoTitle
