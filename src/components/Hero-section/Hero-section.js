import './Hero-section.css'
import Profile from '../Profile-section/Profile-section';
import Icon from '../../assets/icon-1.png'
import tickIcon from '../../assets/tick-icon.png'
const HeroSection = () => {
    const data = [
        {
        id: 1,
            title: '지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?'
        }
    ]
    return (
        <div className='hero-section'>
            <Profile
                imageIcon={Icon}
                name='안녕 나 응애'
                tickIcon={tickIcon}
                tag='1일전'
            />
            <span className='height'>163cm</span>
            <span className='weight'>53kg</span>
        <div className='hero-section-text'>
            {
                data.map(({id, title}) => {
                    return (
                       <span key={id}>{ title}</span>
                 )
                })
            }    
            </div>
            <div className='hero-section-description'>
               <p className='des'>지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
               혹시 어떤 상품이 제일 괜찮았어? </p><br />

               <p>후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 
               제일 재밌었다던데 맞아???</p>  <br />

               <p>올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
               아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
               있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!</p>  <br />     
            </div>
            
        </div>
         
         
     )

        
        // <div className="hero-section-container">
        //     <div className='hero-section-block1'>
        //         <span className="hero-section-icon">
        //             <img src={ Icon } alt='Icon'/>
        //         </span>
        //         <span className='hero-section-text'>안녕 나 응애</span>
        //         <span></span>
        //         <button className='hero-section-button'>팔로우</button>
        //     </div>
        //     <div className='hero-section-block2'>
        //        <span className='hero-section-text1'>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</span>
        //     </div>
        //     <div className='hero-section-block3'>
        //         <p className='hero-section-text2'>
        //             <span>
        //               지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
        //             혹시 어떤 상품이 제일 괜찮았어? 
        //             </span>
        //             <br />
        //             <span>
        //                 후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 
        //             제일 재밌었다던데 맞아???
        //             </span>
        //             <br />
        //             <span>
        //             올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
        //             아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
        //             있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
        //             </span>
                    
        //         </p>
        //     </div>
        // </div>
    
}

export default HeroSection;