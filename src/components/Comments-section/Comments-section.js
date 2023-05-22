import './Comments-section.css'
import Icon from '../../assets/icon-1.png'
import Icon2 from '../../assets/icon-2.png'
import tickIcon from '../../assets/tick-icon.png'
import Profile from '../Profile-section/Profile-section'
import HeartIcon from '../../assets/heart-icon.png'
import BookMarkIcon from '../../assets/bookmark-icon.png'
import CommentIcon from '../../assets/comment-icon.png'
const CommentsSection = () => {
    const data = [
        {
            id: 1,
            images: HeartIcon,
            digit: 5
        },
        {
            id: 2,
            images: CommentIcon,
            digit: 5
        }
   ]

    return (
        <div className='comments-section'>
            <Profile 
            imageIcon={Icon}
                name='안녕 나 응애'
                tickIcon={tickIcon}
                tag='1일전'
            />
             <p className='comments-para'>어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 
        우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
        아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
        괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
                꼭 봐주세용~!</p>
            <div className='comments-section-icons'>
            {
                data.map(({images, digit}) => {
                    return (
                        <div>
                            <span className='comment-icon-inner'><img src={ images } /></span>
                            <span className='comments-section-digits'>{ digit}</span>
                        </div>
                    )
                })
            }

            </div>
            <div className='comments-subsection'>
                <Profile 
                   imageIcon={Icon2}
                name='ㅇㅅㅇ'
                    tag='1일전'
                />
                <p className='comments-para'>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</p>
            </div>
            

     </div>
        )
        

        
       
        

   
        
                
}

export default CommentsSection