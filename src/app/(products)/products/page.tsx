import { ProductsPageClient } from '@/components/products/ProductsPageClient';
import { Product } from '@/components/products/types';
import { getProducts } from '@/lib/data-access';

// Enable ISR with 60-second revalidation
export const revalidate = 60;

async function getProductsData(): Promise<Product[]> {
    const { products } = await getProducts(1, 100); // Fetch initial batch
    return products.map(p => ({
      id: p.id,
      name: p.name,
      description: p.description || '',
      imageUrl: p.imageUrl || '',
      price: p.price,
      type: p.type as 'CHILLED' | 'FROZEN',
      category: p.category || '',
      createdAt: p.createdAt,
    }));
}

export default async function ProductsPage() {
  const products = await getProductsData();
  return <ProductsPageClient products={products} />;
}
