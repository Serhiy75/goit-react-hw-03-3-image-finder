import { OverLay } from '../Overlay/Overlay';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleOverLay = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal('', '');
    }
  };

  handleEscape = e => {
    if (e.key === 'Escape') {
      this.props.closeModal('', '');
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <>
        <OverLay onClick={this.handleOverLay}>
          <img src={largeImageURL} alt={tags} />
        </OverLay>
      </>
    );
  }
}
