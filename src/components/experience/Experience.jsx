import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experiences</h2>

      <div className='container experience__container'>

        {/* ------  START OF FRONTEND  ------ */}
        <div className='experience__frontend'>
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill class="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill class="experience__details-icon" />
                <div> 
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill class="experience__details-icon" />
                <div>
                  <h4>Sass</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill class="experience__details-icon" />
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>              
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill class="experience__details-icon" />
                <div>
                  <h4>JSON</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill class="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* ------  START OF FRONTEND  ------ */}
        <div className='experience__backend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Phyton</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience