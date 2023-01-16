import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material'
import './slider.css'
import { useState } from 'react'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0 )
        }
    }

    return (
        <div className='scontainer'>
            <div className='leftarrow' direction="left" onClick={()=>handleClick}>
                <KeyboardArrowLeftOutlined />
            </div>
            <div className='swrapper' slideIndex={slideIndex}>
                <div className='sslide1'>
                    <div className='imgContainer'>
                        <img className='image' src="https://static.vecteezy.com/system/resources/previews/004/969/271/non_2x/vintage-cassette-tape-retro-mixtape-collection-1980s-pop-songs-tapes-and-stereo-music-cassettes-90s-hifi-disco-dance-audiocassette-analogue-player-record-cassette-illustration-free-vector.jpg"></img>
                    </div>
                    <div className='infoContainer'>
                        <div className='titleh1'>SUMMER SALE</div>
                        <div className='desc'>
                            New arrivals from 1985. Welcome to the past!
                        </div>
                        <button>Shop now</button>
                    </div>
                </div>
                <div className='sslide2'>
                    <div className='imgContainer'>
                        <img className='image' src="https://static.vecteezy.com/system/resources/previews/004/969/271/non_2x/vintage-cassette-tape-retro-mixtape-collection-1980s-pop-songs-tapes-and-stereo-music-cassettes-90s-hifi-disco-dance-audiocassette-analogue-player-record-cassette-illustration-free-vector.jpg"></img>
                    </div>
                    <div className='infoContainer'>
                        <div className='titleh1'>SUMMER SALE</div>
                        <div className='desc'>
                            Blank tapes on sale. On bulk.
                        </div>
                        <button>Shop now</button>
                    </div>
                </div>
                <div className='sslide3'>
                    <div className='imgContainer'>
                        <img className='image' src="https://static.vecteezy.com/system/resources/previews/004/969/271/non_2x/vintage-cassette-tape-retro-mixtape-collection-1980s-pop-songs-tapes-and-stereo-music-cassettes-90s-hifi-disco-dance-audiocassette-analogue-player-record-cassette-illustration-free-vector.jpg"></img>
                    </div>
                    <div className='infoContainer'>
                        <div className='titleh1'>SUMMER SALE</div>
                        <div className='desc'>
                            Straight from China!
                        </div>
                        <button>Shop now</button>
                    </div>
                </div>
            </div>
            <div className='rightarrow' direction="right" onClick={()=>handleClick}>
                <KeyboardArrowRightOutlined />
            </div>
        </div>
    )
}

export default Slider