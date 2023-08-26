import { Overlay } from 'components/Overlay/Overlay';

export const Modal = ({ largeImageURL, tags }) => {
  return (
    <Overlay>
      <img src={largeImageURL} alt={tags} />
    </Overlay>
  );
};
