"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Footer from '../layouts/Footer';

const SortedFooter = () => {
  const currentPath = usePathname();
  const filterFooter = ["/admin", "/admin/users", "/admin/tasks"];
  
  return (
    <div>
      {filterFooter.includes(currentPath) ? <div></div> : <Footer />}
    </div>
  )
}

export default SortedFooter