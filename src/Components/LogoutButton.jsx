import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <button 
            onClick={handleLogout} 
            style={{
                width:"22%",
                position: 'fixed',
                bottom: '20px',   
                right: '20px',     
                padding: '10px 20px', 
                backgroundColor: '#f44336', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer',
                zIndex: 1000 
            }}
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
