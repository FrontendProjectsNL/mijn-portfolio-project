"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

interface PageProps {}

const Page: React.FC<PageProps> = () => {
    
    const [expandes, setExpanded] = useState<boolean>(false)

    useEffect(() => {

    },[])
  return (

    <div className="max-w-7xl w-full px-14 py-12 font-roboto">
        <nav>
            <Link href={"/"}  className="font-medium text-lg">My Company</Link>
            ul>(li>Link[href="" className="px-4 py-2 cursor hover:underline-offset-4"]{Link $})*5
        </nav>

    </div>
  );
};

export default Page;
