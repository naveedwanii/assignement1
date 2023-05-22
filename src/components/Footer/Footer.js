import './Footer.css'
import Footericon from '../../assets/footericon.png'

const Footer = () => {
    const footerData =[
        {
            id: 1,
            icon: Footericon,
            footerTitle: '댓글을 남겨주세요.',
            footerTagText: '등록'
        
        }
    ]
    return (
        <div>
            {
                footerData.map(({ id, icon, footerTitle, footerTagText }) => {
                    return (
                        <div key={id} className='footer-section'>
                            <span className='footer-icon'><img src={ icon } /></span>
                            <span className='footer-title'>{footerTitle}</span>
                            <span className='footer-tag-text'>{footerTagText}</span>
                        </div>
                    )
                })
            }
       </div>
   )
}

export default Footer;