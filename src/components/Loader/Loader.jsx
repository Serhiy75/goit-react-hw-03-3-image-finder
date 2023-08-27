// import { OverLay } from '../Overlay/Overlay';
// import { RingLoader } from 'react-spinners';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = ({ loading }) => {
  const color = 'red';
  return (
    <ClipLoader
      color={color}
      loading={loading}
      // cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
