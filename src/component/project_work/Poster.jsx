import React, { useState } from 'react'
import "../project_work/Poster.css"

import pos1 from "../project_work/imagePoster/pos1.jpeg"
import pos2 from "../project_work/imagePoster/posterraj2.png"
import pos3 from "../project_work/imagePoster/posabc3.jpeg"
import pos4 from "../project_work/imagePoster/pos4.jpeg"
import pos5 from "../project_work/imagePoster/pos5.jpeg"
import pos6 from "../project_work/imagePoster/pos6.jpeg"
import pos7 from "../project_work/imagePoster/pos7.png"
import pos8 from "../project_work/imagePoster/pos8.jpeg"
import pos9 from "../project_work/imagePoster/pos9.jpeg"

const Poster = () => {

  const [preview, setPreview] = useState(null)

  const images = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9]

  return (
    <>
      <div className='img-box container'>

        {images.map((img, index) => (
          <div className='img-card' key={index}>

            <img className='img' src={img} alt="" />

            {/* Overlay Buttons */}
            <div className='overlay'>
              <button onClick={() => setPreview(img)}>View</button>

              <a href={img} download>
                <button>Download</button>
              </a>
            </div>

          </div>
        ))}

      </div>

      {/* Preview Box */}
      {preview && (
        <div className='preview-box' onClick={() => setPreview(null)}>
          <img src={preview} alt="" />
        </div>
      )}
    </>
  )
}

export default Poster