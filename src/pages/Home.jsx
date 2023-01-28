import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

import useWindowDimensions from '../hooks/useWindowDimensions';

const Home = () => {
  const navigate = useNavigate();

  const { width, height } = useWindowDimensions();

  const handleClick = () => navigate('/gallery');

  return (
    <>
      <Confetti width={width} height={height} />
      <div className='center'>
        <p className='happy'>Happy</p>
        <h1 className='valentines'>Valentine's Day</h1>
        <button onClick={handleClick}>Continuer</button>
      </div>
    </>
  );
};

export default Home;
