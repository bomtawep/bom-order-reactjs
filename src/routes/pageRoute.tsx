import { Route } from 'react-router-dom';
import { ReactNode } from "react";
import ProductTypeFormPage from '../pages/product_type/ProductTypeFormPage';
const PageRoute = () => {
    return (
      <>
        <Route path='product/product-type-form' element={<ProductTypeFormPage/>} />
        <Route path='product/product-type-form/:id' element={<ProductTypeFormPage/>} />
      </>
    );
}
export const routeps: ReactNode = PageRoute();