import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories-selector';


import ProductCard from '../../components/product-card/ProductCard'

import './Category.scss'


const Category = () => {
  const { category } = useParams()
  /* console.log('render/re-render category component') */
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    /* console.log('effect fired calling setProducts') */
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
      {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

export default Category