import React from 'react';

const Modal = ({ isVisible, content, onClose }) => {
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1050,
    }}>
      <div style={{
        position: 'relative',
        width: '80%',
        maxHeight: '80%',
        padding: 20,
        background: '#fff',
        borderRadius: 5,
        overflowY: 'auto',
        animation: 'slide-up 0.3s ease-out',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 10,
          right: 10,
          border: 'none',
          background: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}>&times;</button>
        {content}
      </div>
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
