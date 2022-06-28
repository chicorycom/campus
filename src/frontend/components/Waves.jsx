import React from 'react'

/**
* @author
* @function Waves
**/

export const Waves = ({height='542px'}) => {
  return(
      <div className="waves">
        <div class="waves-container " style={{boxSizing: "border-box", height}}>
            <div class="waves-background"></div>
            <svg class="waves__svg" viewBox="0 0 1440 250" style={{isolation:"isolate"}} preserveAspectRatio="none">
                <path fill="#FFF" style={{animationDelay: ".2s"}} fill-opacity=".1" d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72V80c-138 38-284 102-718 27C314 36 150 16 1 16l-1 8z"></path>
                <path fill="#FFF" style={{animationDelay: ".4s"}} fill-opacity=".1" d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72v-51l-2 1c-122 29-294 69-680-34C357 38 204 21 0 21v3z"></path>
                <path className='fill-white dark:fill-gray-900' d="M1440 229v21H0V24c166 0 358 11 755 133 232 71 390 93 506 93 74 0 131-9 179-21 0-45 0-45 0 0z"></path>
            </svg>
        </div>
    </div>
   )
  }
