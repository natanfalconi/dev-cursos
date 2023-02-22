import Head from 'next/head';
import React from 'react';

interface IMetaTags {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
}

const MetaTags: React.FC<IMetaTags> = ({
  title = 'Chip2Go - Comece agora a sua jornada na programação web',
  description = 'Assista os cursos com vídeos em alta definição em uma plataforma completa pra que você tenha o maior aproveitamento.',
  url = `${process.env.NEXT_PUBLIC_WEBSITE_LINK}`,
  image = ``,
  type = 'website',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:type" content={type} />
      <meta name="og:title" content={title} />
      <meta name="og:url" content={url} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
    </Head>
  );
};

export default MetaTags;