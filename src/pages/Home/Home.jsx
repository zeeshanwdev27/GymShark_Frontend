import React from 'react'
import HeroSection from './HeroSection/HeroSection.jsx'
import New_In from './New_In/New_In.jsx'
import Popular_RightNow from './Popular_RightNow/Popular_RightNow.jsx'
import How_Do_You_Train from './How_Do_You_Train/How_Do_You_Train.jsx'
import Category_Section from './Category_Section/Category_Section.jsx'
import Wait_Theres_More from './Wait_Theres_More/Wait_Theres_More.jsx'
import Detail_Section from './Detail_Section/Detail_Section.jsx'

function Home() {
  return (
    <>
    <HeroSection/>
    <New_In/>
    <Popular_RightNow/>
    <How_Do_You_Train/>
    <Category_Section/>
    <Wait_Theres_More/>
    <Detail_Section/>
    </>
  )
}

export default Home
