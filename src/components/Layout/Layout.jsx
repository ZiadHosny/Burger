import './Layout.css';
const Layout = (props) => {
  return (
    <>
      <div></div>
      <main className="Content">{props.children}</main>
    </>
  );
};

export default Layout;
