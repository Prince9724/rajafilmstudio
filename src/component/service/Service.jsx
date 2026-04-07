import React from 'react'
import "../service/Service.css"
import { useNavigate } from 'react-router'

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h2 className='text-center mt-5 p-5 text-white'>
        My Work
      </h2>

      <div className='d-flex'>

        {/* Logo Design */}
        <div className='card-box text-white'>
          <h2>Logo Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nisi id excepturi in tenetur quo obcaecati quidem mollitia.
          </p>

          <button 
            onClick={() => navigate("/logo")} 
            className='btn btn-outline-danger'
          >
            View Project
          </button>
        </div>

        {/* Poster Design */}
        <div className='card-box text-white'>
          <h2>Poster Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nisi id excepturi in tenetur quo obcaecati quidem mollitia.
          </p>

          <button className='btn btn-outline-danger' onClick={()=>navigate("/poster")}>
            View Project
          </button>
        </div>

        {/* Video Editing */}
        <div className='card-box text-white'>
          <h2>Video Editing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nisi id excepturi in tenetur quo obcaecati quidem mollitia.
          </p>

          <button className='btn btn-outline-danger'>
            View Project
          </button>
        </div>

      </div>
    </div>
  )
}

export default Service