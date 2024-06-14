"use client"
import {Button} from "@/components/ui/button";
import { Menu  } from "lucide-react";
import { Sheet , SheetTrigger, SheetContent, } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect,useState } from "react";
const MobileSidebar=()=>{
    const[isMounted, setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);

    },[]);
    if(!isMounted){
        return null;
    }
    return(
        <Sheet>
            <SheetTrigger>
            
                <Menu />
            
            </SheetTrigger>
            <SheetContent security="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
        
    );
}
export default MobileSidebar;