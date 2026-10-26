import React from 'react';
import fotoWebp from '../assets/images/guilherme_lousada_2026.webp';
import fotoJpg from '../assets/images/guilherme_lousada_2026.jpg';

interface GuilhermePhotoProps {
  className?: string;
  imgClassName?: string;
  alt?: string;
  rounded?: 'full' | '2xl' | 'xl';
  loading?: 'eager' | 'lazy';
}

export const GuilhermePhoto: React.FC<GuilhermePhotoProps> = ({
  className = 'w-full h-full',
  imgClassName = '',
  alt = 'Guilherme Lousada - ELVANO Agency',
  rounded = '2xl',
  loading = 'eager',
}) => {
  const roundedClass =
    rounded === 'full' ? 'rounded-full' : rounded === 'xl' ? 'rounded-xl' : 'rounded-2xl';

  return (
    <picture className="block w-full h-full">
      <source srcSet={fotoWebp} type="image/webp" />
      <img
        src={fotoJpg}
        alt={alt}
        width={900}
        height={900}
        className={`${className} ${roundedClass} ${imgClassName}`}
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
        loading={loading}
      />
    </picture>
  );
};
