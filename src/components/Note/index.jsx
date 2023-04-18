import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star } from "../Star";

export function Note({ title, rating, description, tags, ...rest }) {
  return (
    <Container {...rest}>
      <h3>{title}</h3>
      <Star rating={rating} size={18} />
      <p>{description}</p>
      {tags && (
        <footer>
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
