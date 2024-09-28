import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] text-white pt-36 px-12 absolute bg-gradient-to-r from-black">
    <h1 className="text-6xl font-bold mb-4">{title}</h1>
    <p className="text-gray-300 text-sm mb-6 w-1/4">{overview}</p>
    <div className="flex space-x-4">
        <button className="bg-gray-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition">▶️ Play</button>
        <button className="border border-white text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-gray-900 transition">More Info</button>
    </div>
</div>
  )
}

export default VideoTitle
