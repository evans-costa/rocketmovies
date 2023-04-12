import { Container } from "./styles";

export function Button({ title, icon: Icon, isRemove = false, ...rest }) {
  return (
    <Container
      isRemove={isRemove}
      {...rest}>
      {Icon && <Icon size={22} />}
      {title}
    </Container>
  );
}
