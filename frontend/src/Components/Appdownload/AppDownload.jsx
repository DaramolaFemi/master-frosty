import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experince download <br /> Frosty app</p>
      <div className='.app-download-platforms'>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>        
    </div>
  )
}

export default AppDownload