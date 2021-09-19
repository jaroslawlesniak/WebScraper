import { Header } from "../features/common";

const PublicLayout: React.FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default PublicLayout;
