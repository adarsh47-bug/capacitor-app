import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    setLoading(true);
    console
      .log(`Email: ${email}, Password: ${password}`);

    setTimeout(() => {
      setLoading(false);
      navigate('/d', { replace: true });
    }, 1500);
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        {loading ? <button>loading...</button> :
          <button type="submit">Log in</button>
        }
      </form>
    </main>
  )
}

export default Login;