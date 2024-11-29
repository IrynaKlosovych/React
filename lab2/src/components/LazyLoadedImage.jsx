import useLazyImageLoader from '../hooks/useLazyImageLoader';
import PropTypes from 'prop-types';

const LazyLoadedImage = ({alt, dataSrc, placeholder, className }) => {
    const { loaded, imgRef } = useLazyImageLoader(dataSrc);

    return (
        <>
            <img
                ref={imgRef}
                src={loaded ? dataSrc : placeholder}
                alt={alt}
                className={className}
            />
        </>
    );
};

LazyLoadedImage.propTypes = {
    alt: PropTypes.string,
    dataSrc: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string
}

export default LazyLoadedImage;