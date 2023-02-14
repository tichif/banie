import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.jpg';
import Image3 from '../assets/images/3.jpg';
import Image4 from '../assets/images/4.jpg';
import Image5 from '../assets/images/5.jpg';
import Image6 from '../assets/images/6.jpg';
import Image7 from '../assets/images/7.jpg';
import Image8 from '../assets/images/8.jpg';
import Image9 from '../assets/images/9.jpg';

const Gallery = () => {
  const photos = [
    {
      id: 1,
      path: Image1,
      alt: 'Banie',
    },
    {
      id: 2,
      path: Image2,
      alt: 'Banie',
    },
    {
      id: 3,
      path: Image3,
      alt: 'Banie',
    },
    {
      id: 4,
      path: Image4,
      alt: 'Banie',
    },
    {
      id: 5,
      path: Image5,
      alt: 'Banie',
    },
    {
      id: 6,
      path: Image6,
      alt: 'Banie',
    },
    {
      id: 7,
      path: Image7,
      alt: 'Banie',
    },
    {
      id: 8,
      path: Image8,
      alt: 'Banie',
    },
    {
      id: 9,
      path: Image9,
      alt: 'Banie',
    },
  ];

  return (
    <>
      <h2>Banie</h2>
      <p className='gallery-text'>
        Love is too weak to define what you are for me.
      </p>
      <div className='gallery'>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.path} alt={photo.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
