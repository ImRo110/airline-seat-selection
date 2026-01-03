import { useNavigate } from "react-router";

const Navbar = () => {
  interface NavbarLinks {
    name: string;
    path: string;
  }

  const links: NavbarLinks[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();
  return (
    <nav
      className="flex justify-between p-4 bg-[#020024] bg-[linear-gradient(270deg,rgba(2,0,36,1)_0%,rgba(3,2,54,1)_4%,rgba(9,9,121,1)_9%,rgba(0,212,255,1)_100%)]
"
    >
      <div className="flex items-center">
        {/* <h1 className="text-xl font-bold">Priceline</h1> */}
        <img
          src="https://dmlib.airindia.com/adobe/assets/urn:aaid:aem:7a53d3fd-4776-4177-85e3-65070a5cb0e6/as/AI_Logo_White_New.svg"
          alt=""
        />
      </div>
      <div className="flex items-center">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => navigate(link.path)}
            className="mx-2 text-amber-50"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
