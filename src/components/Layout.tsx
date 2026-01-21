import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineHome, HiOutlineUser, HiOutlineComputerDesktop, HiOutlineEnvelope /*, HiOutlinePaintBrush, HiOutlineSparkles */ } from "react-icons/hi2";

export default function Layout() {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show/hide nav based on scroll position (only on home page)
      if (isHomePage) {
        setShowNav(scrollPosition > windowHeight - 100);
      }

      // Determine active section based on scroll position
      const sections = ["about", "projects", /* "art", "design", */ "contact"];
      let foundSection = false;
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - windowHeight / 2) {
          setActiveSection(section);
          foundSection = true;
          break;
        }
      }
      if (!foundSection) {
        setActiveSection("home");
      }
    };

    if (!isHomePage) {
      setShowNav(true);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document
            .getElementById(sectionId)
            ?.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    {
      id: "home",
      icon: <HiOutlineHome className="w-5 h-5" />,
    },
    {
      id: "about",
      icon: <HiOutlineUser className="w-5 h-5" />,
    },
    {
      id: "projects",
      icon: <HiOutlineComputerDesktop className="w-5 h-5" />,
    },
    // {
    //   id: "art",
    //   icon: <HiOutlinePaintBrush className="w-5 h-5" />,
    // },
    // {
    //   id: "design",
    //   icon: <HiOutlineSparkles className="w-5 h-5" />,
    // },
    {
      id: "contact",
      icon: <HiOutlineEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col">
      {/* Floating Bottom Navigation */}
      <nav
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          showNav ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-white/40 backdrop-blur-md shadow-lg border border-white/30">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-3 rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-purple-100 hover:text-purple-600"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="pt-8 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-200">
            &copy; {new Date().getFullYear()} Winnie Lam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
