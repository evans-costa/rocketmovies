import { Container } from "./styles";
import { HiStar, HiOutlineStar } from "react-icons/hi";

export function Star({ rating, size }) {
  const stars = new Array(5).fill().map((star, index) => {
    if (index < rating) {
      return (star = <HiStar key={index} size={size} />);
    } else {
      return (star = <HiOutlineStar key={index} size={size} />);
    }
  });

  return (
    <Container rating={rating} size={size}>
      {stars}
    </Container>
  );
}
