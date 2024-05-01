import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div >
      <div className="text-6xl  font-bold pt-44 px-11">
        {title}
      </div>
      <div className="p-4">
        {overview}
      </div>
    </div>

  )
}

export default VideoTitle