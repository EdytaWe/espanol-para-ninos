import React from 'react';

function GetRandomImg({img, img2}){
    const image = () =>{
        const divImg = document.querySelectorAll(".quiz__img")
        divImg.forEach((el)=>{
            const images = [{img}, {img2}];
            const position = Math.floor(Math.random() * images.length)
            el.style.backgroundImage = `url(${images[position]})`
            images.splice(position,1);
        })
    }
    image()

    return(
        <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
            <div key="1" className="quiz__img" style={{backgroundRepeat: "no-repeat"}} onClick={() => console.log("1")}></div>
            <div key="2" className="quiz__img" style={{backgroundRepeat: "no-repeat"}} onClick={() => console.log("2")}></div>
        </div>
    )
}
export default GetRandomImg;
