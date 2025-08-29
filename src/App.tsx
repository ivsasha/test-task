import { NavBar } from './components/NavBar';
import './App.scss';
import { IntroSection } from './components/IntroSection';
import { useEffect, useState } from 'react';
import { getPosition, getUsers } from './api';
import { User } from './types/User';
import { Users } from './components/Users';
import { Form } from './components/Form';
import { Position } from './types/Positions';

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getUsers(page, 6)
      .then(data => {
        const sortedUsers = data.users.sort(
          (a: User, b: User) =>
            b.registration_timestamp - a.registration_timestamp,
        );

        setUsers(prevUsers => [...prevUsers, ...sortedUsers]);

        if (!data.links.next_url) {
          setIsLastPage(true);
        }
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, isRegister]);

  useEffect(() => {
    getPosition().then(data => {
      setPositions(data.positions);
    });
  }, []);

  function handleOfClickMore() {
    setPage(page + 1);
  }

  function handleRegister() {
    setIsRegister(true);
    setPage(1);
    setUsers([]);
  }

  return (
    <>
      <NavBar />
      <IntroSection />
      <Users
        users={users}
        handleOfClickMore={handleOfClickMore}
        isLastPage={isLastPage}
        isLoading={isLoading}
      />
      <Form
        positions={positions}
        handleRegister={handleRegister}
        isRegister={isRegister}
      />
    </>
  );
};
