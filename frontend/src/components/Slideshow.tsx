import { Card } from 'react-bootstrap';
import { useImage } from '../hooks';

function Slideshow() {
  const image = useImage();

  const imageBorder = {
    border: '15px dashed #2AB34C',
  };

  const captionStyle = {
    fontStyle: 'italic',
  };

  if (!image) {
    return null;
  }

  return (
    <>
      {image.caption && (
        <Card.Footer style={captionStyle}>{image.caption}</Card.Footer>
      )}
      <Card.Img
        variant="bottom"
        src={image.src}
        alt="Oops! Unable to load image."
        style={imageBorder}
      />
    </>
  );
}

export default Slideshow;
