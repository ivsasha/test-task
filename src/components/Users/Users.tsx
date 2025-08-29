import { User } from '../../types/User';
import { Loader } from '../Loader';
import './Users.scss';

type Props = {
  users: User[];
  handleOfClickMore: () => void;
  isLastPage: boolean;
  isLoading: boolean;
};

export const Users: React.FC<Props> = ({
  users,
  handleOfClickMore,
  isLastPage,
  isLoading,
}) => {
  return (
    <section className="user-section" id="user-section">
      <h1 className="user-section__title">Working with GET request</h1>
      <div className="user-section__blocks">
        {users.map(user => {
          return (
            <div className="user-section__block" key={user.id}>
              <img
                className="user-section__img"
                src={`${user.photo}`}
                alt="user_photo"
                loading="lazy"
              />
              <p className="user-section__text">{user.name}</p>
              <div className="user-section__contact">
                <p className="user-section__text" title={user.position}>
                  {user.position}
                </p>
                <p className="user-section__text" title={user.email}>
                  {user.email}
                </p>
                <p className="user-section__text" title={user.phone}>
                  {user.phone}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          {!isLastPage && (
            <button
              className="user-section__button"
              onClick={() => {
                handleOfClickMore();
              }}
            >
              Show more
            </button>
          )}
        </>
      )}
    </section>
  );
};
