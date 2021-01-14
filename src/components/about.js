import React from 'react';
import '../assets/aboutus.css';
import avatar from '../assets/img/about.jpg';

export default function AboutUs() {
    var [animated , setAnimated] = React.useState('');
    React.useEffect(() => {
        const showImage = () => {
            if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
                setAnimated('animated');
            }
        }
        window.addEventListener('scroll', showImage);
        return function cleanup() {
            window.removeEventListener('scroll', showImage);
        }
    })
    return(
        <div className='AboutUs'>
            <div className='banner'>
                <h1>About Us</h1>
                <p>Introducing myself</p>
            </div>
            <div className='information'>
                <h4>I N F O R M A T I O N</h4>
                <h2>S I N TATTOO STUDIO</h2>
                <h2>SINCE 2020</h2>
                <div id='intro'>
                <p>Nghệ thuật xăm có không gian Hội họa riêng biệt, những nghệ sĩ vẽ hình xăm luôn quan niệm đó là yếu tố để tôn vinh nét đẹp cơ thể của con người. Dưới góc nhìn nghệ thuật thì những họa tiết, hoa văn của hình xăm vô cùng độc đáo, sáng tạo cùng với những giá trị về mặt tâm linh và tín ngưỡng.</p>
                <p>Lấy cảm hứng từ thế giới hội họa và những ý nghĩa tâm linh sâu sắc mang đậm giá trị nghệ thuật, S I N Tattoo ra đời với mong muốn phát triển một dịch vụ xăm mình chuyên nghiệp và xây dựng một ngành nghề nghệ thuật thực thụ tại Việt Nam, đóng góp một phần nhỏ cho văn hóa hội họa Việt Nam. Qua đó chúng tôi đem đến cho các bạn một thế giới hoàn toàn mới, Thế giới nghệ thuật – Thế giới của tâm hồn – Thế giới hội họa riêng biệt. Chính tất cả những điều đó mà mỗi tác phẩm từ S I N Tattoo không chỉ đơn giản là hình xăm mà nó còn mang một giá trị tâm hồn của chính những người thực hiện và cả người sở hữu nó. Với trang thiết bị hiện đại, kỹ thuật xăm chuyên nghiệp và việc tư vấn chu đáo cho khách hàng, S I N trở thành người truyền tải những câu chuyện, thông điệp, ý nghĩa những hình xăm của các bạn qua từng nét vẽ.</p>
                </div>
                <img src={avatar} alt='Avatar' className={`avatar ${animated}`} />
            </div>
            <div className='hero-image'>
                <div className='hero-text'>
                    <h1><q>Đến Xăm Đê</q></h1>
                    <p>-Thành đầu cắt moi-</p>
                </div>
            </div>
        </div>
    )
}

