import React from 'react'
import Slider from 'react-slick'
import { Image } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { travelsTv } from '../assets/channels'
import { useChannel, setCurrent } from '../context/channel/channelState'

const Travel = () => {
    const [, channelDispatch] = useChannel();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: "linear",
        lazyLoad: true,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const getBlobUrl = (e) => {
        const channelUrl = e.target.getAttribute('blob')
        setCurrent(channelDispatch, channelUrl)
    }

    return (
        <section className='mt-five'>
            <h5 className="mt-5 mb-4">Travel TVs</h5>
            <Slider {...settings} >
                {travelsTv.map((channel) => (
                    // <Link to='tv' key={channel.channel}>
                    <div className="items mx-3" key={channel.channel} onClick={getBlobUrl}>
                        <Image
                            className="m-auto"
                            src={channel.logo}
                            alt={channel.channel}
                            loading="lazy"
                            width="200px"
                            height="200px"
                            blob={channel.url}
                        />
                        <p className="text-center mt-2">{channel.title}</p>
                    </div>
                    // </Link>
                ))}
            </Slider>
        </section>
    )
}

export default Travel