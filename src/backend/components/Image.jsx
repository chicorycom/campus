import {useState, useRef} from "react"
 
async function loadImage(url, elem) {
    return new Promise((resolve, reject) => {
      elem.onload = () => resolve(elem);
      elem.onerror = reject;
      elem.src = url;
    });
  }

export const Image = (props) => {
    const {image, className} = props
    const [loaded, setLoaded ] = useState(true)
    const [opacity, setOpacity] = useState(0)
    const [visiblity, setVisiblity] = useState(0)
    const imageRef = useRef()

    const onLoad = () => {
        if(imageRef.current.complete){
            setOpacity(1)
            setVisiblity(1)
            setLoaded(false)
        } 
    }
   

 return < >
            <img
                className={className}
                style={{opacity, visiblity}}
                ref={imageRef}
                src={image.src}
                onLoad={onLoad} />
                { loaded && <div className="flex w-full h-full justify-center items-center"> <div className="img__loader"></div></div>}
        </>

};