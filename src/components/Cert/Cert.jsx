import React from 'react';
import './cert.css';
import aiimg from '../../images/ai.jpg';
import climg from '../../images/c.jpg';
import pythonimg from '../../images/pcap.jpg';
import cyberimg from '../../images/cyber.jpg';
import networkingimg from '../../images/ccna.jpg';
import fortinet from '../../images/fortinet.jpg';
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
        fichier: `https://imane-el.netlify.app/files/ai for everyone.pdf`
    },
    {
        img: climg,
        fichier: `https://imane-el.netlify.app/files/c.pdf`
    },
    {
        img: pythonimg,
        fichier: `https://imane-el.netlify.app/files/pcap.pdf`
    }, 
    {
        img: cyberimg,
        fichier: `https://imane-el.netlify.app/files/cybersec.pdf`
    }, 
    {
        img: networkingimg,
        fichier: `https://imane-el.netlify.app/files/ccna.pdf`
    },
    {
        img: fortinet,
        fichier: `https://imane-el.netlify.app/files/fortinet.pdf`
    }
];

export default Cert
