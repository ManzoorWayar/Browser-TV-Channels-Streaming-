import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import { useChannel } from '../context/channel/channelState'

const TVScreen = () => {
    const [channelState] = useChannel();
    const { url } = channelState;

    return (
        <>
            <Link to='/'>
                <h5 className='text-center mt-4'>Back To TV Screens</h5>
            </Link>
            <ReactPlayer
                playing
                url={url}
                controls
                width="90vw"
                height="80vh"
                style={{ margin: '4rem auto' }}
            />
        </>
    )
}

export default TVScreen