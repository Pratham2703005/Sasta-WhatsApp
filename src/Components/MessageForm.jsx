import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const [value, setvalue] = useState('');
    const { chatId, creds } = props;

    const handleChange = (e) => {
        setvalue(e.target.value);
        isTyping(props, chatId);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = value.trim();
        if (text.length > 0) {
            sendMessage(creds, chatId, { text });
        }
        setvalue('');
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        console.log('File selected:', file);
        if (file) {
            sendMessage(creds, chatId, { files: [file], text: '' });
        }
    };

    return (
        <form className='message-form' onSubmit={handleSubmit} style={{display:"flex"}}>
            <input
                className='message-input'
                placeholder='Send Message'
                value={value}
                onChange={handleChange}
                style={{flex:"1"}}
            />
            <label htmlFor='upload-button'>
                <span className='image-button'>
                    <PictureOutlined className='picture-icon' style={{fontSize:"20px", padding:"10px"}}/>
                </span>
            
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            </label>
            <button type="submit" className='send-button'  style={{fontSize:"20px",transform: 'rotateZ(90deg)' , marginLeft:"-15px"}}>
                <SendOutlined className='send-icon' />
            </button>
        </form>
    );
};

export default MessageForm;
