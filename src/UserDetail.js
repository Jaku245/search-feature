import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './App.css';

function UserDetail() {

  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch("https://express-t4.onrender.com/api/users/" + location.state.user._id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(async data => {
        console.log(data);
        await setUser(data);
      });
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h2 style={{ textAlign: 'center', paddingTop: '3%', paddingBottom: '3%', backgroundColor: '#333333', color: 'white' }} >User Details</h2>
      {/* <div style={{
        display: 'flex',
        paddingInline: '50px',
        justifyContent: 'center'
      }}>
        {user
          ?
          <div className='user-detail' style={{ margin: '10px' }}>
            <img src={user.picture} className='user-details-image' alt='user' />
            <div>
            {user.name}
            </div>
            <div style={{ marginTop: '5px' }}>
            {user.phone}
            </div>
            <div style={{ marginTop: '5px' }}>
            {user.email}
            </div>
          </div>
          :
          null}
        </div> */}
      <div style={{ backgroundColor: '#F5F5F5', minHeight: '73vh', paddingTop: '25px' }}>
        {user
          ?
          <div style={{ paddingInline: '50px' }}>
            <div className="user-details-header">
              <img src={user.picture} className='user-details-image' alt='user' />
              <div className="user-details-bio">
                <p style={{ fontSize: '25px' }}>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            </div>
            <p className="user-details-balance"> <b>Balance: </b> {user.balance}</p>
            <p className="user-details-greeting">{user.greeting}</p>
            <p className="user-details-about"> <b>About: </b> {user.about}</p>
          </div>
          :
          null}
      </div>
    </>
  );
}

export default UserDetail;
