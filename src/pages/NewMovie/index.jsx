import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

import { api } from "../../services/api";

import { Container, Content, Bookmarks, ButtonWrapper } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NewTag } from "../../components/NewTag";
import { Button } from "../../components/Button";

export function NewMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(parseInt(""));
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevTags) => [...prevTags, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevTags) => prevTags.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (newTag) {
      return alert("Add the tag you filled or leave the field empty.");
    }

    if (rating > 5 || rating < 0 || isNaN(rating)) {
      return alert("Only add a rate between 0 and 5!");
    }

    if (!title || !description || !rating) {
      const confirmSave = window.confirm(
        "Are you sure save the movie without complete the fields?"
      );

      if (!confirmSave) {
        return;
      }
    }

    api.post("/movie_notes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Movie successfully saved!");
    navigate("/");
  }

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={HiArrowLeft} title='Go back' onClick={handleBack} />

        <Section className='new-movie' title='New Movie'>
          <div className='input-wrapper'>
            <Input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            <Input
              type='text'
              placeholder='Your rate (from 0 to 5)'
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <TextArea placeholder='Comments' onChange={(e) => setDescription(e.target.value)} />
          <Bookmarks>
            <h3>Tags</h3>
            <div className='tags'>
              {tags.map((tag, index) => (
                <NewTag
                  key={index}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}
              <NewTag
                isNew
                placeholder='New Tag'
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Bookmarks>

          <ButtonWrapper>
            <Button isRemove title='Cancel' onClick={handleBack} />
            <Button title='Save Movie' onClick={handleNewNote} />
          </ButtonWrapper>
        </Section>
      </Content>
    </Container>
  );
}
