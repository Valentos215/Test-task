import React, { useEffect, useState } from "react";
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
  const [page, setPage] = useState(1);
  const apiUrl = `users?page=${page}&count=6`;
  const { isLoading, response, error, doFetch } = useFetch(apiUrl);
  const [users, setUsers] = useState<user[]>([]);
  const isLastPage = response && response.total_pages <= page;

  const buttonClick = () => {
    if (isLoading) {
      return;
    }
    if (!isLastPage) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (!isSignedUp) {
      return;
    }
    setPage(1);
  }, [isSignedUp]);

  useEffect(() => {
    doFetch();
  }, [page, doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    }
    if (page === 1) {
      setUsers(response.users);
    } else {
      setUsers([...users, ...response.users]);
    }
  }, [response]);

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
