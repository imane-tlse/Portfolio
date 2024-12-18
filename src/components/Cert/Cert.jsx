import React from 'react';
import './cert.css';
import aiimg from '../../images/ai.jpg';
import climg from '../../images/c.jpg';
import pythonimg from '../../images/pcap.jpg';
import cyberimg from '../../images/cyber.jpg';
import networkingimg from '../../images/ccna.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cert = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const downloadFileAtUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove();
  }
  return (
    <div id="cert" className='cert-container'>
      <div className="cert-wrapper">
      <Slider {...settings} className="slider">
        {files.map((file)=>(
            <div className="item-cert">
                <img src={file.img} alt="" />
                <button 
                    onClick={()=> {
                        downloadFileAtUrl(file.fichier)
                    }}>Download Certificate</button>
            </div>
        ))}
      </Slider>
      <div className="unwanted-slider" >
        {files.map((file)=>(
              <div className="item-cert">
                  <img src={file.img} alt="" />
                  <button 
                      onClick={()=> {
                          downloadFileAtUrl(file.fichier)
                      }}>Download Certificate</button>
              </div>
          ))}
      </div>

      </div>
    </div>
  )
}

const files = [
    {
        img: aiimg,
        fichier: `http://localhost:3000/files/ai for everyone.pdf`
    },
    {
        img: climg,
        fichier: `http://localhost:3000/files/c.pdf`
    },
    {
        img: pythonimg,
        fichier: `http://localhost:3000/files/pcap.pdf`
    }, 
    {
        img: cyberimg,
        fichier: `http://localhost:3000/files/cybersec.pdf`
    }, 
    {
        img: networkingimg,
        fichier: `http://localhost:3000/files/ccna.pdf`
    },
];
// const filename = ['ai.pdf','c.pdf', 'pcap.pdf', 'cybersec.pdf', 'ccnav7.pdf' ]

export default Cert
