const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#3D3B40] text-white">
        <aside>
          <img className="w-12" src="/public/logo.png" alt="" />
          <p>
            DreamDwell Industries Ltd.
            <br />
            Providing reliable tech since 2024.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Property Listings</h6>
          <a className="link link-hover">Virtual Tours</a>
          <a className="link link-hover">Agent Directory</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Property Alerts</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
