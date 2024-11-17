import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import QZone from '../QZone';
import Advertisement from '../Advertisement ';

const RightNavbar = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <Advertisement></Advertisement>
        </div>
    );
};

export default RightNavbar;