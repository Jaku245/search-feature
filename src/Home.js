import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Input, Icon } from "atomize";
import './App.css';

function Home() {

  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, updatedFilteredUser] = useState([]);

  useEffect(() => {
    fetch("https://express-t4.onrender.com/api/users", {
      method: 'GET'
    })
      .then(response => response.json())
      .then(async data => {
        console.log(data);
        await setUsers(data);
      });
      // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (q.length > 0) {
      updatedFilteredUser(users.filter(user => user.name.toLowerCase().includes(q.toLowerCase())))
    } else {
      updatedFilteredUser([])
      setUsers(users.filter(user => user.name.toLowerCase().includes(q.toLowerCase())))
    }
    // eslint-disable-next-line
  }, [q])

  const renderUsers = () => {
    const userList = filteredUsers.length > 0 ? filteredUsers : users;
    return userList.map(user => {
      return (
        <div className='user' style={{ margin: '10px' }} onClick={() => navigate('/user-detail', { state: { user: user } })}>
          <img src={user.picture} className='user-image' alt='user' />
          {user.name}
        </div>
      );
    })
  }

  return (
    <>
    <h2 style={{ textAlign: 'center', paddingTop: '3%', paddingBottom: '3%', backgroundColor: '#333333', color: 'white' }} >Home</h2>
      <div style={{ paddingInline: '50px' }}>
        <Input
          placeholder="Search"
          className="search"
          onChange={(e) => setQ(e.target.value)}
          value={q}
          suffix={
            <Icon
              name="Search"
              size="20px"
              cursor="pointer"
              onClick={() => console.log("clicked")}
              pos="absolute"
              top="50%"
              right="1rem"
              transform="translateY(-50%)"
            />
          }
        />
      </div>
      <div className="home">
        {renderUsers()}
      </div>
    </>
  );
}

export default Home;
