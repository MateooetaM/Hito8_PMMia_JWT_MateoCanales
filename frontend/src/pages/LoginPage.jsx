import { useContext, useState } from "react";
import "./LoginPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const email = useInput("");
  const password = useInput("");

  const emailValue = email.value;
  const passwordValue = password.value;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(emailValue, passwordValue);
  };

  // const navigate = useNavigate();
  // const { setUser } = useContext(TokenContext);
  // const [username, setUsername] = useState("");

  // const [password, setPassword] = useState("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });
  //   const data = await response.json();
  //   alert(data?.error || "Authentication successful!");
  //   localStorage.setItem("token", data.token);

  //   if (!data.error) {
  //     navigate("/");
  //     return;
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let userAuth = {
  //     username: username,
  //     password: password,
  //     token: true,
  //   };
  //   setUser(userAuth);
  //   navigate("/home");
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de Email</Form.Label>
        <Form.Control
          type="email"
          value={email.value}
          onChange={email.onChange}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...password} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
