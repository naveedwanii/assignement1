
import './Profile-section.css'

const Profile = (props) => {
    return (
        <div>
            <span className='profile-section-icon'><img src={props.imageIcon} /></span>
            <span className='profile-section-text'>{props.name}</span>
            <span className='profile-section-tick'><img src={props.tickIcon} /></span>
            <span className='profile-section-tag'>{props.tag}</span>
      </div>
  )
}

export default Profile