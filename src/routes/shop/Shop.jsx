import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCategoriesMap } from '../../store/categories/categories-action';
import { useDispatch } from 'react-redux';

import './Shop.scss'

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      /* console.log(categoryMap); */
      dispatch(setCategoriesMap(categoryMap))
    }
    getCategoriesMap()
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;