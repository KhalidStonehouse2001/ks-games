import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getCategories } from '../utils/utils';

function Categories() {
  const [categories, setCategories] = useState([])
/  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res)
    })
  }, [])
  return (
    <div className='categories-container'>
    <h1 className='category-title'>Categories</h1>
       <ul>
    {categories.map((category) => {
      return (
        <Link className='category-link' to={`/reviews?category=${category.slug}`}>
        <li key={category.slug} className='category-list'>
          <h4 className='category-slug'>{category.slug}</h4>
          <h6 className='category-text'>{category.description}</h6>
        </li>
        </Link>
      )
    })}
    </ul>
    
    </div>
  )
}

export default Categories;
