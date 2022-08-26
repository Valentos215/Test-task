import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Button from "../Buttons/Button";
import Preloader from "../sharedComponents/Preloader";
import Card from "./Card";
import s from "./Users.module.scss";

type user = {
  id: number;
  photo: string;
  name: string;
  position: string;
  email: string;
  phone: string;
};

const Users = ({ isSignedUp }) => {
  const count = 6;
  const [offset, setOffset] = useState(count);
  const [users, setUsers] = useState<user[]>([]);
  const [newUsersCount, setNewUsersCount] = useState(0);
  const [totalCount, setTotalCount] = useState(1);
  const apiUrl = `users?offset=${offset}&count=${count + newUsersCount}`;
  const { isLoading, response, error, doFetch } = useFetch(apiUrl);
  const isLastPage = totalCount <= offset + count + newUsersCount;

  const buttonClick = () => {
    if (isLoading) {
      return;
    }
    if (!isLastPage) {
      setOffset(offset + newUsersCount + count);
    }
  };

  const newUsersCounter = useCallback((currentTotalCount: number): void => {
    if (offset !== count) setNewUsersCount(currentTotalCount - totalCount);
    setTotalCount(currentTotalCount);
  }, []);

  const pushUsers = useCallback(
    (respUsers: user[]): void => {
      let arr: user[] = [];
      respUsers.forEach((user) => {
        if (!users.some((u) => u.id === user.id)) {
          arr.push(user);
        }
      });
      if (offset === count) {
        setUsers([...arr]);
      } else {
        setUsers([...users, ...arr]);
      }
    },
    [offset]
  );

  useEffect(() => {
    if (!isSignedUp) {
      return;
    }
    setOffset(count);
  }, [isSignedUp]);

  useEffect(() => {
    doFetch();
  }, [offset, doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    }
    pushUsers(response.users);
    newUsersCounter(response.total_users);
  }, [response, pushUsers, newUsersCounter]);

  if (error) {
    return <h1 className={s.error}>Something went wrong</h1>;
  }

  return (
    <div className="container">
      <div className={s.users} id="users">
        <h1>Working with GET request</h1>
        <div className={s.users__cards}>
          {users &&
            users.map((user) => (
              <Card
                key={user.id}
                image={user.photo}
                username={user.name}
                position={user.position}
                email={user.email}
                phone={user.phone}
              />
            ))}
          {isLoading && <Preloader />}
        </div>
        <Button
          text="Show more"
          wide={true}
          disabled={isLastPage || isLoading}
          onClick={buttonClick}
        />
      </div>
    </div>
  );
};

export default Users;
