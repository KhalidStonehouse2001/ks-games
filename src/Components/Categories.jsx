import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getCategories } from '../utils/utils';
import Reviews from './Reviews';

function Categories() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 useEffect(() => {
    getCategories().then((res) => {
      setCategories(res)
      setIsLoading(false)
    })
  }, [])
  return isLoading ? <p className='loading'>Loading ...</p> : (
    <div className='categories-container'>
    <h1 className='category-title'>Categories</h1>
    {categories.map((category) => {
      return (
        <ul key={category.slug}>
        <Link  className='category-link' to={`/reviews?category=${category.slug}`}>
        <li  className='category-list'>
          <h4 className='category-slug'>{category.slug}</h4>
          <h6 className='category-text'>{category.description}</h6>
        </li>
        </Link>
    </ul>
      )
    })}
    </div>
    
  )
}

export default Categories;
