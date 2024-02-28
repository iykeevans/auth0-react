import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
      {isAuthenticated && (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      )}
      <div>Home</div>
    </>
  );
};

export default Home;
