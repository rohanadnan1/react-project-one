import React from 'react'
import bg from "../assets/2.webp"
import {AiFillFacebook, AiFillInstagram, AiFillApple, AiFillYoutube} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home-main' id='home'>
    <main>
    <h1>MYTECHAPP</h1>
    <h3>Solution to all of your problems</h3>
    </main>
    </div>

    <div className="home-2">
        <img src={bg} alt="graphic pic"  />
        <p>We are here to solve all your tech queries don't hesitate to contact us contact us and solve every of your query Thanks!</p>
    </div>

    <div className="home-3" id='about'>
        <main>
            <h1>WHO ARE WE?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima officia error dolores eius maxime. Blanditiis, nulla. Commodi distinctio ratione sint assumenda dignissimos iure et unde, ipsum earum repudiandae reprehenderit quod. Esse dicta nostrum corrupti perferendis odio nisi hic recusandae ducimus voluptatibus vel quaerat quia nesciunt, eaque quam explicabo praesentium quos, veritatis cupiditate illum ullam soluta optio et. Laudantium et sit commodi dolore quibusdam labore.</p>
        </main>
    </div>

    <div className="home-4" id='brands'>
        
        <div className='wrapper'>
        <h1>BRANDS</h1>
        <div className='article'>
            <div style={{
                animationDelay: "0.3s"
            }}>
                <AiFillInstagram/>
                <p>INSTAGRAM</p>
            </div>

            <div style={{
                animationDelay: "0.5s"
            }}>
                <AiFillYoutube/>
                <p>YOUTUBE</p>
            </div>
            

            <div style={{
                animationDelay: "0.7s"
            }}>
                <AiFillFacebook/>
                <p>FACEBOOK</p>
            </div>

            <div style={{
                animationDelay: "0.9s"
            }}>
                <AiFillApple/>
                <p>APPLE</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home