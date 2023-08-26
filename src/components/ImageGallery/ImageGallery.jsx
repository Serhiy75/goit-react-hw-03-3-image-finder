import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <ul
      style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
      className="ImageGallery"
    >
      {hits.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem webformatURL={webformatURL} tags={tags} key={id} />
      ))}
    </ul>
  );
};
