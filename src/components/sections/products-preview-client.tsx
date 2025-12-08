'use client';

import { ProductQuickView } from '@/components/products/ProductQuickView';
import { Product } from '@/components/products/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPreviewClient({ products }: { products: Product[] }) {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Helper to safely handle any Product type (in case of strict type mismatch on 'type' field from DB vs Enum)
  const safeProducts = products.map(p => ({
    ...p,
    type: p.type as 'CHILLED' | 'FROZEN' // Cast to match interface if DB returns string
  }));

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Our Products</h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse of our premium, halal-certified meat selections, sourced with care and delivered with trust.
          </p>
        </div>
        
        {safeProducts.length === 0 ? (
           <div className="text-center py-12 bg-muted/30 rounded-lg">
             <p className="text-muted-foreground">No products available at the moment.</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeProducts.map((product) => (
              <div key={product.id} className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-border transition-all duration-300 flex flex-col group h-full">
                <div className="relative h-60 w-full overflow-hidden bg-muted">
                  <Image 
                    src={product.imageUrl || '/images/placeholder.jpg'} 
                    alt={product.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <Badge variant="secondary" className="absolute top-3 right-3">{product.type}</Badge>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{product.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-auto"
                    onClick={() => setQuickViewProduct(product)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">Explore All Products</Link>
          </Button>
        </div>
      </div>

      <ProductQuickView
        product={quickViewProduct}
        isOpen={quickViewProduct !== null}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
