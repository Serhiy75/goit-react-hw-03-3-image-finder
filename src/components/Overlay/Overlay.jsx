import { BackDrop } from './Overlay.style';

export const OverLay = ({ children, onClick }) => {
  return <BackDrop onClick={onClick}> {children} </BackDrop>;
};
