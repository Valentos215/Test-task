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
  const overlay = 5;
  const [offset, setOffset] = useState(0);
  const [users, setUsers] = useState<user[]>([]);
  const apiUrl = `users?offset=${offset}&count=${count + overlay}`;
  const { isLoading, response, error, doFetch } = useFetch(apiUrl);
  const isLastPage = response && response.total_users <= offset + count;

  const buttonClick = () => {
    if (isLoading) {
      return;
    }
    if (!isLastPage) {
      setOffset(offset + count);
    }
  };

  const pushUsers = useCallback(
    (respUsers: user[]): void => {
      if (response) {
        let usersPortion: user[] = [];
        respUsers.forEach((user) => {
          if (!users.some((u) => u.id === user.id)) {
            usersPortion.push(user);
          }
        });
        if (offset === 0) {
          setUsers([...usersPortion.slice(0, 6)]);
        } else {
          setUsers([...users, ...usersPortion.slice(0, 6)]);
        }
      }
    },
    [response]
  );

  useEffect(() => {
    if (!isSignedUp) {
      return;
    }
    setOffset(0);
  }, [isSignedUp]);

  useEffect(() => {
    doFetch();
  }, [offset, doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    }
    pushUsers(response.users);
  }, [response, pushUsers]);

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
                image={user.photo && user.photo}
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
