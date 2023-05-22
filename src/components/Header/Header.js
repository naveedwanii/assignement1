import './Header.css'
import Arrow from '../../assets/rectangle.png'
import Bell from '../../assets/Bell.png'
// assignment/src/assets/rectangle.png
const Header = () => {
    return (
        <div className="header-container">
            <span className="header-arrow">
                <img src={Arrow} alt='arrow'/>
               
            </span>
            <span>
                자유톡
            </span>
            <span className="header-bell">
                <img src={ Bell} alt='bell' />
            </span>
      </div>
  )
}

export default Header