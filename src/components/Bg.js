import './Bg.css'
import close from '../assets/close.png'

function Bg() {
    return (
        <div className='bg_cont'>
            <img src={close} className="close_pop"></img>
        </div>
    )
}

export default Bg;