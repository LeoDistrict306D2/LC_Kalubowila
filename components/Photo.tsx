import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[8/5]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph goes through here, so all of them carry intrinsic
 * dimensions and a fixed aspect box — no image can shift the layout as it
 * loads.
 *
 * Photographs are documentation here, not decoration: plain frame, caption
 * treated as a figure note.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn('m-0', className)}>
      <div className={cn('relative overflow-hidden bg-panel', ratios[ratio])}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-2 text-xs text-ink-faint">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
