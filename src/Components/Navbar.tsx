function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href={"/"}>home</a>
        </li>
        <li>
          <a href={"/recipes"}>my recipes</a>
        </li>
        <li>
          <a href={"/ratings"}>ratings</a>
        </li>
        <li>
          <a href={"/login"}>login</a>
        </li>
        <li>
          <a href={"/register"}>register</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
