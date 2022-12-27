import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useImage } from '../hooks';
import { imageNameToURL } from '../utils/helpers';

function Slideshow({ interval }: { interval: number }) {
  const [clickCounter, setClickCounter] = useState(0);
  const image = useImage(interval, clickCounter);

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
      <Card.Footer>
        {image.caption && (
          <Card.Text style={captionStyle} className="text-primary">
            {image.caption}
          </Card.Text>
        )}
        <Card.Subtitle>Click below to change image</Card.Subtitle>
      </Card.Footer>
      <Card.Img
        variant="bottom"
        src={imageNameToURL(image.name, image.bucket)}
        alt="Oops! Unable to load image."
        style={imageBorder}
        onClick={() => setClickCounter(clickCounter + 1)}
      />
    </>
  );
}

export default Slideshow;
