import { ProductCardType, ProductsNewArrivals } from '../types/product';
import { apiClient } from '../utils/apiClient';

export const getProductsCards = async (): Promise<ProductCardType[]> => {
  try {
    const response = await apiClient.get<ProductCardType[]>('products/cards');
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error('Failed to Fetch products Cards');
  }
};

export const getProductsNewArrivals = async (): Promise<
  ProductsNewArrivals[]
> => {
  try {
    const response = await apiClient.get<ProductsNewArrivals[]>(
      'products/newArrivals'
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error('Failed to Fetch products New Arrivals');
  }
};
