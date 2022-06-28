import ReactConsole from '@webscopeio/react-console'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TerminalIcon } from '../../backend/icons'

/**
* @author
* @function ChicorycomConsole
**/

export const ChicorycomConsole = (props) => {
    const [history, setHistory] = useState([
        "echo hello world",
        "sleep 1000",
        "sleep 2000",
        "sleep 3000",
        "echo ola",
        "not found",
      ])
      
      const terminal = useRef(null);
      const [show, setShow] = useState(false)
      const [prompt, setPrompt] = useState('~$')
      const [height, setHeight] = useState(313)
      //xterm js
      function handleClick(){
            //height === 99 ? setHeight(313) : setHeight(99) 
            setShow(false)
      }

  return(
      <>
      {show ? 
        (
          <div className='chicorycom-cookies-banner' style={{height}}>
          <div className='chicorycom-cookies-banner__body'>
          <div className="jetbrains-cookies-banner__paragraph">
              Cookies and IP addresses allow us to deliver
          and improve our web content and to provide you with a personalized experience.
          Our website uses cookies and collects your IP address for these purposes. 
          <Link className="jetbrains-cookies-banner__link" to="/signup">Learn more</Link>
           👨‍💻
          </div>
          <div className="chicorycom-cookies-banner__close-button" onClick={handleClick} >[X]</div>
        </div>
        <ReactConsole
             ref={terminal}
             autoFocus
             prompt={prompt}
             welcomeMessage=""
             wrapperClassName="chicorycom-console"
             commands={{
               history: {
                 description: 'History',
                 fn: () => new Promise(resolve => {
                    resolve(`${history.join('\r\n')}`)
                 })
               },
               echo: {
                 description: 'Echo',
                 fn: (...args) => {
                     
                   return new Promise((resolve, reject) => {
                     setTimeout(() => {
                       resolve(`${args.join(' ')}`)
                     }, 2000)
                   })
                 }
               },
               test: {
                 description: 'Test',
                 fn: (...args) => {
                   return new Promise((resolve, reject) => {
                     setTimeout(() => {
                       resolve('Hello world \n\n hello \n')
                     }, 2000)
                   })
                 }
               },
               login: {
                description: 'login',
                fn: (...args) => {

                  return new Promise((resolve, reject) => {
    
                      if(args.join(' ').length === 0){
                        resolve('login require !')
                      }else {
                        
                        setTimeout(() => {
                          document.querySelector('.styles_prompt__1nRph').classList.add('prompt__success')
                          setPrompt('contact@chicorycom~$')
                          terminal.current.clear()
                          //args.join(' ')
                          resolve('\n')
                        }, 1000)
                  }
                  })
                }
              },
              exit: {
                description: 'Exit',
                fn: (...args) => {

                  //console.log()
                  return new Promise((resolve, reject) => {
                    setTimeout(() => {
                      document.querySelector('.styles_prompt__1nRph').classList.remove('prompt__success')
                        setPrompt('~$') 
                        //args.join(' ')
                        terminal.current.clear()
                        height === 99 ? setHeight(313) : setHeight(99)
                      resolve('\n \n')
                    }, 1000)
                  })
                }
              }
             }}
          />
        </div>
        )
        :
        (
          <button onClick={()=> setShow(!show)} className="terminalBtn p-1 w-10 h-10 bg-gray-100 rounded shadow-lg hover:scale-105 shadow-gray-400 active:shadow-lg mouse transition ease-in duration-200 focus:outline-none">
          <TerminalIcon className='' />
        </button>
        )
        }
        

        {/*<div className='chicorycom-cookies-banner' style={{height}}>
          <div className='chicorycom-cookies-banner__body'>
          <div className="jetbrains-cookies-banner__paragraph">
              Cookies and IP addresses allow us to deliver
          and improve our web content and to provide you with a personalized experience.
          Our website uses cookies and collects your IP address for these purposes. 
          <Link className="jetbrains-cookies-banner__link" to="/signup">Learn more</Link>
           👨‍💻
          </div>
          <div className="chicorycom-cookies-banner__close-button" onClick={handleClick} >[X]</div>
        </div>
        <ReactConsole
             ref={terminal}
             autoFocus
             prompt={prompt}
             welcomeMessage=""
             wrapperClassName="chicorycom-console"
             commands={{
               history: {
                 description: 'History',
                 fn: () => new Promise(resolve => {
                    resolve(`${history.join('\r\n')}`)
                 })
               },
               echo: {
                 description: 'Echo',
                 fn: (...args) => {
                     
                   return new Promise((resolve, reject) => {
                     setTimeout(() => {
                       resolve(`${args.join(' ')}`)
                     }, 2000)
                   })
                 }
               },
               test: {
                 description: 'Test',
                 fn: (...args) => {
                   return new Promise((resolve, reject) => {
                     setTimeout(() => {
                       resolve('Hello world \n\n hello \n')
                     }, 2000)
                   })
                 }
               },
               login: {
                description: 'login',
                fn: (...args) => {

                  return new Promise((resolve, reject) => {
    
                      if(args.join(' ').length === 0){
                        resolve('login require !')
                      }else {
                        
                        setTimeout(() => {
                          document.querySelector('.styles_prompt__1nRph').classList.add('prompt__success')
                          setPrompt('contact@chicorycom~$')
                          terminal.current.clear()
                          //args.join(' ')
                          resolve('\n')
                        }, 1000)
                  }
                  })
                }
              },
              exit: {
                description: 'Exit',
                fn: (...args) => {

                  //console.log()
                  return new Promise((resolve, reject) => {
                    setTimeout(() => {
                      document.querySelector('.styles_prompt__1nRph').classList.remove('prompt__success')
                        setPrompt('~$') 
                        //args.join(' ')
                        terminal.current.clear()
                        height === 99 ? setHeight(313) : setHeight(99)
                      resolve('\n \n')
                    }, 1000)
                  })
                }
              }
             }}
          />
        </div> */}
      </>
      
   )
  }
