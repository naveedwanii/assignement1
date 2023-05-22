import './Comments.css'
import HeartIcon from '../../assets/heart-icon.png'
import BookMarkIcon from '../../assets/bookmark-icon.png'
import CommentIcon from '../../assets/comment-icon.png'
const Comments = () => {
    const icons = [
        {
            id: 1,
            images: HeartIcon,
            digit: 5
        },
        {
            id: 2,
            images: BookMarkIcon,
            digit: 5
        },
        {
            id: 3,
            images: CommentIcon
        }
    ]
    return (
        <>
         <div className='comments-container'>
            {
                icons.map(({id, images, digit}) => {
                    return (
                        <div>
                         <span className='comments-icons' key={id}>
                            <img src = {images}/>
                        </span>
                            <span className='comments-digits'>{digit}</span>
                        </div>

                  )
                })
            }
            </div>
            <hr className='hr-line'/>
        </>
   )
}

export default Comments