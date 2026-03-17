function Header() {

  document.addEventListener('scroll', () => {
    if(scrollY > 50) {
      document.querySelector('header').style.borderBottom = '1.3px solid var(--rule)';
    }
  });

  return (
    <header>
      <div className="logo-section">LauchKit</div>
      <nav>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Docs</li>
          <li>Blog</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;