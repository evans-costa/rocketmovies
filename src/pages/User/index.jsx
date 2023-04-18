import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiArrowLeft,
  HiOutlineCamera,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Container, Form, Profile } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function User() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPasword] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: newPassword,
      oldPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <ButtonText icon={HiArrowLeft} title='Go Back' onClick={handleBack} />
      </header>

      <Form>
        <Profile>
          <img src={avatar} alt={`{${user.name} profile picture`} />
          <label htmlFor='avatar'>
            <HiOutlineCamera />
            <input type='file' id='avatar' onChange={handleChangeAvatar} />
          </label>
        </Profile>

        <Input
          type='text'
          placeholder='Name'
          icon={HiOutlineUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='email'
          placeholder='E-mail'
          icon={HiOutlineMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Current password'
          icon={HiOutlineLockClosed}
          onChange={(e) => setOldPasword(e.target.value)}
        />
        <Input
          type='password'
          placeholder='New password'
          icon={HiOutlineLockClosed}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button title='Save' onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}
