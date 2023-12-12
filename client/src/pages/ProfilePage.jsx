import Profile from '../components/Profile';

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
            <h1 style={h1}>Welcome to your profile page</h1>
            <div  style={p}>
                tuner
            </div>
            <div style={chat}>
                chat
            </div>
            <Profile/>
        </div>
    )
};

export default ProfilePage;