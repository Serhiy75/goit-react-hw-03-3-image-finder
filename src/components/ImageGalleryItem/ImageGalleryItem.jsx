export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className="ImageGalleryItemimage">
      <img
        className="ImageGalleryItemimage "
        width="250px"
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
