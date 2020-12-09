import { useState, useCallback } from 'react'

import http from 'services/http'

const useImages = () => {
  const [isLoadingImages, setImageLoading] = useState(false)
  const [images, setImages] = useState([])

  const loadImages = useCallback(async (query = 'space', page = 1) => {
    try {
      setImageLoading(true)

      const { results } = await http.get(
        `/search/photos?query=${query}&page=${page}`,
      )

      setImages(results)
    } catch (error) {
      console.error(error)
    } finally {
      setImageLoading(false)
    }
  }, [])

  return {
    isLoadingImages,
    images,
    loadImages,
  }
}

export default useImages
