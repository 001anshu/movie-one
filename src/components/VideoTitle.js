import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute bg-gradient-to-r w-full aspect-video text-white from-black ' >
      <div className="w-1/2 text-6xl  font-bold pt-44 px-11">
        {title}
      </div>
      <div className="w-1/2 p-4 pl-11">
        {overview}
      </div>
    </div>

  )
}

export default VideoTitle