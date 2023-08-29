export const ImageGalleryItem = ({ webformatURL, tags, openModal }) => {
  return (
    <li
      className="ImageGalleryItemimage"
      onClick={() => {
        openModal(webformatURL, tags);
      }}
    >
      <img
        className="ImageGalleryItemimage "
        width="250px"
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
