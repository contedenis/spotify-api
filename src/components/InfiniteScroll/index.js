// @packages
import React from 'react';
import PropTypes from 'prop-types';
import ReactInfiniteScroll from 'react-infinite-scroll-component';

// @app
import Spinner from 'components/Spinner';

function InfiniteScroll({ children, ...props }) {
  return (
    <ReactInfiniteScroll
      {...props}
      loader={Spinner}
      scrollThreshold={0.8}
    >
      {children}
    </ReactInfiniteScroll>
  );
}

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfiniteScroll;
