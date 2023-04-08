import { useState, forwardRef } from 'react';
import images from '../../../assets/images';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [altImage, setAltImage] = useState('');
    const handleError = () => {
        setAltImage(images.noImage);
    };
    return <img ref={ref} src={altImage || src} alt={alt} {...props} onError={handleError} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
