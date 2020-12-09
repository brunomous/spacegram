import React, { useEffect } from 'react'

import useImages from 'hooks/useImages'

const Home = () => {
  const {
    isLoadingImages,
    images,
    loadImages,
  } = useImages()

  useEffect(() => {
    loadImages()
  }, [loadImages])

  if (isLoadingImages) {
    return 'Loading...'
  }

  return (
    <div>
      {images.map(
        ({ id, urls, alt_description: alt }) => (
          <img key={id} src={urls.regular} alt={alt} />
        ),
      )}
    </div>
  )
}

export default Home
