"use client"; 
import React ,{ useState } from "react";
import {Navbar,Switch,Avatar,NavbarMenuToggle,NavbarMenu, NavbarBrand,NavbarMenuItem ,NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AiFillHome } from "react-icons/ai";

export default function Appbar({switchtheme,fun,themevalue,fun2}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  
  function themememory()
  {
      localStorage.setItem('theme',JSON.stringify(!themevalue))
  }
  

  return (
    <Navbar   onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className=" gap-4">
          <AiFillHome size={20}/>
          <p className="font-bold text-inherit">Phonebook</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent  justify="end">
        <NavbarItem className="hidden lg:flex">
          <p className=" cursor-pointer" onClick={()=>{fun(true)}} >Login</p>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
        <Avatar onClick={()=>{fun2(p=>!p)}} isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        </NavbarItem>
        <NavbarItem>
        <Switch onChange={()=>{switchtheme(p=>!p);themememory()}} defaultSelected={themevalue} color="primary">Dark</Switch>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
