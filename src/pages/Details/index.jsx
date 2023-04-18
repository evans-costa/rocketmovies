import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowLeft, HiOutlineClock } from "react-icons/hi";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { setFormatedDate } from "../../utils/dateFormat";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Container, Content, Title, Tags, Review, Info } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Star } from "../../components/Star";

export function Details() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const params = useParams();

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <Content>
          <ButtonText icon={HiArrowLeft} title='Go Back' onClick={handleBack} />
          <Section className='movie-details'>
            <Title>
              <h2>{data.title}</h2>
              <Star rating={data.rating} size={24} />
            </Title>
            <Info>
              <img src={avatarUrl} alt={`${user.name} profile picture`} />
              <span>By {user.name}</span>
              <HiOutlineClock />
              <span>{setFormatedDate(data.updated_at)}</span>
            </Info>

            {data.tags && (
              <Tags>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Tags>
            )}
            <Review>
              <p>{data.description}</p>
            </Review>
          </Section>
        </Content>
      )}
    </Container>
  );
}
