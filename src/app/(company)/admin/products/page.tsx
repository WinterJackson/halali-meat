import { Product } from '@/components/products/types';
import { getProducts } from '@/lib/data-access';
import { ProductsPageRoot } from './ProductsPageRoot';

// Force dynamic rendering - admin page needs fresh product data
export const dynamic = 'force-dynamic';

async function getProductsData(): Promise<Product[]> {
    const { products } = await getProducts(1, 100); // Fetch initial batch
    return products as unknown as Product[];
}

export default async function ProductsPage() {
  const products = await getProductsData();
  return <ProductsPageRoot initialProducts={products} />;
}