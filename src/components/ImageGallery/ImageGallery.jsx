import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits, openModal }) => {
  return (
    <ul
      style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
      className="ImageGallery"
    >
      {hits.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          webformatURL={webformatURL}
          tags={tags}
          key={id}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};
