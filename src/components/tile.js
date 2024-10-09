import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import React from 'react';

const Tile = ({ content }) => {
  return (
    <div style={styles.tile}>
      {content}
    </div>
  );
};

const styles = {
  tile: {
    flex: '1 1 calc(33.333% - 20px)',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: '380px',
  },
};

export default Tile;