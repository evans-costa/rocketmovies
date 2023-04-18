import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

import { api } from "../../services/api";

import { Container, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleMovieDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header value={search} setSearch={setSearch} />
      <main>
        <Content>
          <div>
            <h2>My movies</h2>
            <NewNote to='/new'>
              <HiPlus size={22} />
              Add a Movie
            </NewNote>
          </div>

          <Section>
            <div className='notes'>
              {notes.map((note) => (
                <Note
                  key={String(note.id)}
                  title={note.title}
                  description={note.description}
                  rating={note.rating}
                  tags={note.tags}
                  onClick={() => handleMovieDetails(note.id)}
                />
              ))}
            </div>
          </Section>
        </Content>
      </main>
    </Container>
  );
}
