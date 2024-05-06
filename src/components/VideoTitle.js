import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute bg-gradient-to-r w-full -mt-[860px]  aspect-video text-white from-black ' >
      <div className="w-1/2 text-6xl  font-bold pt-44 px-11">
        {title}
      </div>
      <div className="w-1/2 p-4 pl-11">
        {overview}
      </div>
      <button className='bg-white w-32 p-4 rounded-lg text-black font-bold ml-10 hover:text-white hover:bg-slate-600'>
      ►Play
      </button>
      <button className='bg-slate-800 w-32 p-4 rounded-lg m-4  font-bold ml-10 hover:text-white hover:bg-slate-600'>
        More Info
      </button>
    </div>

  )
}

export default VideoTitle