import React from "react"

const styles = {
  bubbleAlert: {
    backgroundColor: '#E9725A',
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 10px',
    fontSize: '0.9rem',
    width: '20px',
  },
}

const BubbleAlert = ({ value }) => {
  const getNumber = (n) => {
    if (!n) return '';
    return n > 9 ? '9+' : n
  };

  return (
    <span style={styles.bubbleAlert}>
      {getNumber(value)}
    </span>
  );
};

export default BubbleAlert
