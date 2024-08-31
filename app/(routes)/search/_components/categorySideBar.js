"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function CategorySideBar() {
    const [categoryList,setcategoryList]=useState([]);
    const [selectedCategory,setSelectedCategory]=useState([]);
    const params=usePathname();
    const category=params.split('/')[2];
    // const [businessList,setBusinessList]=useState([]);
    useEffect(()=>{
        console.log(category)
      getCategoryList();
    },[])
    useEffect(()=>{
        params&&setSelectedCategory(params.split('/')[2]);
    },[params])
  /**
   * Used to get All Category List 
   * 
   */
    const getCategoryList=()=>{
      GlobalApi.getCategory().then(resp=>{
        setcategoryList(resp.categories);
      })
    }
  return (
    <div>
        <h2 className='font-bold mb-3 text-lg text-primary'>Categories
            <div>
                {categoryList.map((category,index)=>(
                    <Link href={'/search/'+category.name} className={`flex gap-2 p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer
                    hover:bg-orange-50
                    hover:text-primary
                    hover:shadow-md
                    items-center
                    hover:border-primary
                    ${selectedCategory==category.name&&'border-primary text-primary shadow-md bg-orange-50'}
                    `}>
                        <Image src={category.icon.url}
                        alt='icon'
                        width={30}
                        height={30}/>
                        <h2>{category.name}</h2>
                        
                    </Link>
                ))}
            </div> 
        </h2>
    </div>
  )
}

export default CategorySideBar