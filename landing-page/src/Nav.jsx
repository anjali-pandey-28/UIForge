function Nav(){
    return<><nav className="navbar">
        <h2 className="logo">MyWebsite</h2>
         <input type="checkbox" id="menu-toggle" />
         <label htmlFor="menu-toggle" className="menu-icon">☰</label>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li ><a href="#contact">Contact</a> </li>
          <li ><a href="https://github.com/anjali-pandey-28">Github</a></li>
        </ul>
      </nav></>
}
export default Nav