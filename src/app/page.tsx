"use client"; 
import Appbar from "@/components/appbar/Appbar";
import next from "next";
import {Divider} from "@nextui-org/react";
import { useState } from "react";
import Login from '../components/login/Login'
import status from './local'
import Tabss from '../components/tabs/Tabss'
import Profile from '../components/profile/Profile'
import Tables from '../components/tables/Tables'
export default function Home() {
   
  const[isdarkMode,SetisdarkMode]=useState(false);
  const [Model,SetModle]=useState(false);
  const [isShowProfile,SetisShowProfile]=useState(false);
   

  return (
    <main className={`${isdarkMode?"dark":""} text-foreground bg-background`}>
        
      <div className={`min-h-screen w-screen`}>
      {Model?<Login dark={isdarkMode} fun={SetModle}/>:""}
      {isShowProfile?<Profile fun={SetisShowProfile} dark={isdarkMode} />:''}
      <Appbar fun={SetModle} fun2={SetisShowProfile} themevalue={isdarkMode} switchtheme={SetisdarkMode} />
      <Divider  orientation="horizontal" />
       <div className='  p-5'>

        <Tables/>
        
        </div>
     </div>
    </main>   
  );
}
