'use client';

import { Product } from '@/components/products/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-80 w-full rounded-lg overflow-hidden bg-muted">
            <Image
              src={product.imageUrl || '/images/placeholder.jpg'}
              alt={product.name}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <div>
              <Badge variant="secondary" className="mb-2">{product.type}</Badge>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            {product.category && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{product.category}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck className="h-5 w-5" />
              <span className="font-semibold">100% Halal Certified</span>
            </div>
            <Button asChild className="w-full" size="lg">
              <Link href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}>Request a Quote</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
