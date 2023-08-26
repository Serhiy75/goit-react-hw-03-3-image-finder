import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'service/galleryService';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    hits: [],
    page: 1,
    isEmpty: false,
    showBtn: false,
    isError: '',
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      getImages(query, page)
        .then(({ hits, totalHits }) => {
          if (!totalHits) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            hits: [...prevState.hits, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          this.setState({ isError: error.message });
        });
    }
  }

  handleSubmit = query => {
    this.setState({ query, hits: [], page: 1, isEmpty: false });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = ({ largeImageURL, tags }) => {
    console.log(largeImageURL);
    console.log(tags);
  };

  render() {
    const { hits, isEmpty, showBtn, isError, largeImageURL, tags } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} nameBatton="Search" />
        <ImageGallery hits={hits} openModal={this.handleOpenModal} />
        {showBtn && <Button handleClick={this.loadMore} text="LOAD MORE" />}
        {isEmpty && <p>Sorry we nothing find...</p>}
        {isError && <p> {isError} Something is wrong</p>}
        {largeImageURL && <Modal src={largeImageURL} alt={tags} />}
      </>
    );
  }
}
