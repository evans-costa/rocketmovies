import { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

import { useAuth } from "../../hooks/auth";

import { Container, Login, Image } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Login>
        <h1>RocketMovies</h1>
        <p>Application to follow everything you watch.</p>

        <h2>Make you login</h2>
        <Input
          type='email'
          placeholder='E-mail'
          icon={HiOutlineMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Password'
          icon={HiOutlineLockClosed}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title='Enter' onClick={handleSignIn} />
        <ButtonText to='/register' title='Create account' />
      </Login>

      <Image />
    </Container>
  );
}
