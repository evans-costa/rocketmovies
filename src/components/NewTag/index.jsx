import { Container } from "./styles";
import { HiPlus, HiX } from "react-icons/hi";

export function NewTag({ value, isNew, onClick, ...rest }) {
	return (
		<Container isNew={isNew}>
			<input
				type="text"
				value={value}
				readOnly={!isNew}
				size={isNew ? 13 : value.length}
				{...rest}
			/>
			<button type="button" onClick={onClick}>
				{isNew ? <HiPlus /> : <HiX />}
			</button>
		</Container>
	);
}
