import { useEffect } from 'react'

function ImageModal({ image, alt, onClose }) {
  useEffect(() => {
    if (!image) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="image-modal-overlay"
      onClick={onClose}
    >
      <div
        className="image-modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Project image preview"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="image-modal-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          &times;
        </button>

        <img
          src={image}
          alt={alt || 'Project documentation'}
          className="image-modal-full"
        />
      </div>
    </div>
  )
}

export default ImageModal