import React from 'react';

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
  loading = 'lazy',
}) => {
  const roundedClass = rounded === 'full' ? 'rounded-full' : rounded === 'xl' ? 'rounded-xl' : 'rounded-2xl';

  return (
    <img
      src="/assets/images/guilherme_lousada.jpg"
      alt={alt}
      className={`${className} ${roundedClass} ${imgClassName}`}
      style={{ objectFit: 'cover', objectPosition: 'center top' }}
      loading={loading}
      decoding="async"
      width={600}
      height={600}
    />
  );
};
