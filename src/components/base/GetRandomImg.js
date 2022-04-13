// import React, {useState} from 'react';
//
// function GetRandomImg({img, img2}){
//     const image = () =>{
//         const divImg = document.querySelectorAll(".quiz__img")
//         divImg.forEach((el)=>{
//             const images = [{img}, {img2}];
//             const position = Math.floor(Math.random() * images.length)
//             el.style.backgroundImage = `url(${images[position]})`
//             images.splice(position,1);
//         })
//     }
//     image()
//     const random_boolean = Math.random() < 0.5;
//     return(
//         <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
//             <div key="1" className="quiz__img" style={{backgroundImage: `url(${ random_boolean ? img : img2 })`, backgroundRepeat: "no-repeat"}} onClick={() => console.log("1")}></div>
//             <div key="2" className="quiz__img" style={{backgroundImage: `url(${ random_boolean ? img : img2 })`, backgroundRepeat: "no-repeat"}} onClick={() => console.log("2")}></div>
//         </div>
//     )
//
//     const [bool, setBool] = useState(Math.random() < 0.5);
//
//     return (
//         <div className="quiz__container mx-1 mx-sm-4 p-sm-3">
//             <div
//                 className="quiz__img"
//                 style={{ backgroundRepeat: "no-repeat",
//                     backgroundImage: `url(${bool && img})`}}
//                 onClick={() => console.log("1")}
//             >{bool ? img : img2}</div>
//             <div
//                 className="quiz__img"
//                 style={{ backgroundRepeat: "no-repeat",
//                     backgroundImage: `url(${!bool && img2})`}}
//                 onClick={() => console.log("2")}
//             >{bool ? img2 : img}</div>
//         </div>
//     );
// }
// export default GetRandomImg;
