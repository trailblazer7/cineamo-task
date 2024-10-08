interface Props {
  className?: string;
  text: string;
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<Props> = ({ text, onClickHandler }) => {
  return (
    <button
      className="absolute bottom-2 left-2 bg-blue-600 rounded-md px-2 text-white"
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
