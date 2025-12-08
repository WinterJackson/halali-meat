import { Product } from '@/components/products/types';
import { getProducts } from '@/lib/data-access';
import ProductsPreviewClient from './products-preview-client';

export default async function ProductsPreview() {
  const { products } = await getProducts(1, 4);
  
  // Transform Prisma result to match Client Component props (handling Date objects)
  const formattedProducts: Product[] = products.map(p => ({
    ...p,
    // Ensure dates are converted to strings or kept as Dates acceptable by client? 
    // Next.js passes props from Server to Client as serialized JSON. Dates become strings if not carefully handled.
    // However, the interface allows Date | string.
    // But getProducts returns plain objects from Prisma. 
    // Prisma returns Date objects. Next.js warns passing Date objects to Client Components directly in some versions, 
    // but usually it works or needs toJSON.
    // Let's rely on standard passing for now, or convert if needed.
    // Wait, getProducts returns `imageUrl` (string). 
    // The type match is critical.
    price: p.price,
    type: p.type as any, // Cast to match enum
  }));

  return <ProductsPreviewClient products={formattedProducts} />;
}
