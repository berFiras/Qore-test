const Footer = () => {
  return (
    <footer style={{ padding: "1rem", backgroundColor: "#f1f1f1", textAlign: "center" }}>
      <div>
        <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
