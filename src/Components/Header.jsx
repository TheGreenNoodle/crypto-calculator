import headerStyles from "../CSS/Header.module.css";

function Header() {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.fontSize}>Crypto Calculator</h1>
    </div>
  );
}
export default Header;
