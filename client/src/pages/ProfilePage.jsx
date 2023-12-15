import Profile from '../components/Profile';
import Construction from '../assets/images/construction.jpg'

const ProfilePage = () => {

    const styles = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '75vh'
    };
    const h1 = {
        display: 'flex',
        justifyContent: 'center',
        color: '#ffa62e',
        fontSize: 75
    };
    const p = {
        display: 'flex',
        justifyContent: 'center',
        color: '#ffa62e',
        fontSize: 25
    };
    const chat = {
        display: 'flex',
        justifyContent: 'right',
        color: '#ffa62e',
        fontSize: 25,
        marginRight: 450
    }
    return (
        <div style={styles}>
            <h1 className='font-oleo-script' style={h1}>Profile Page Under Construction</h1>


            <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: `url(${Construction})` }}>
            </div>

            <Profile />
        </div>
    )
};

export default ProfilePage;