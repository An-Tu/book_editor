import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import Button from 'src/components/button';
import './image_uploader.scss';

const b = bemCl('image-uploader');

class ImageUploader extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
  };

  static defaultProps = {
    placeholder: 'Выберите изображение',
  };

  constructor(props) {
    super(props);

    this.state = {
      placeholder: props.placeholder,
    };

    this.loaderRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(evt) {
    const file = evt.target.files[0];
    if (!file) {
      this.props.onChange();
      this.setState({
        placeholder: this.props.placeholder,
      });
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      this.props.onChange(reader.result);
      this.setState({
        placeholder: file.name,
      });
    };
    reader.readAsDataURL(file);
  }

  onClick() {
    this.loaderRef.current.click();
  }

  render() {
    const { id } = this.props;
    const { placeholder } = this.state;
    return (
      <>
        <input
          onChange={this.onChange}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          id={id}
          type="file"
          accept="image/*"
          className={b('hidden')}
          ref={this.loaderRef}
        />
        <Button type="button" className={String(b('upload'))} onClick={this.onClick}>
          {placeholder}
        </Button>
      </>
    );
  }
}

export default ImageUploader;
