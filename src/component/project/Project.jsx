import React from 'react'
import ban1 from "../images/logo/RAJA FILMS STUDIO.png"
import ban2 from "../images/hero/Rk banner final anil akela entertainment.png"
import ban3 from "../images/hero/sec2.jpeg"
import "../project/Project.css"
import raj from "../project/pr-image/raj.png"
const Project = () => {
    return (
        <div className='project-section container d-flex   align-items-center mt-5 pb-5'>
               <div className='image-card'>
                    <img className='image' src={raj} alt="" />
                </div> 
                <div  className='card2'>
                    <p className='card-detail'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem recusandae, aliquid reprehenderit non ut beatae? Quae dolor,
                         illum inventore voluptatum veniam alias magnam at optio commodi ipsam error eveniet dicta. Odio officiis provident veritatis. Hic veniam, debitis maiores 
                            atque illum repudiandae nesciunt
                         qui alias eveniet perferendis itaque laudantium sequi iste.</p>
                </div>
        </div>

    )
}

export default Project