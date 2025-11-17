import Link from "next/link";
import { FaProjectDiagram, FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useEffect, useState, useRef } from "react";
import { DataProps } from "./Projects";
import { FiLink } from "react-icons/fi";
import { ubuntu } from "./Main";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const links = [
  { name: "Home", url: "/#home" },
  { name: "About", url: "/#about" },
  { name: "Skills", url: "/#skills" },
  { name: "My Work", url: "/#my_work" },
  { name: "Contact", url: "/#contact" },
];

export default function HiddenSearch({
  closeSearch,
  searchOpened,
}: {
  closeSearch: () => void;
  searchOpened: boolean;
}) {
  const pathName = usePathname();
  const router = useRouter();

  const [projects, setProjects] = useState<DataProps[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<DataProps[]>([]);
  const [filteredLinks, setFilteredLinks] = useState<
    { name: string; url: string }[]
  >([]);
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const searchRef = useRef(null);
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data: DataProps[]) => {
        setProjects(data);
      })
      .catch(() => {
        setProjects([]);
      });
  }, []);

  useEffect(() => {
    if (searchOpened) {
      let searchInput = searchRef.current
        ? (searchRef.current as HTMLInputElement)
        : null;
      searchInput ? searchInput.focus() : null;
    }
    if (searchOpened) document.body.classList.add("fix-search-body");
    else document.body.classList.remove("fix-search-body");
    setCurrentSearch("");
  }, [searchOpened]);

  useEffect(() => {
    updateFilteredProject(currentSearch);
    updateFilteredLinks(currentSearch);
  }, [currentSearch]);

  function updateFilteredProject(search: string) {
    search = search.trim();
    const filtered = projects.filter(
      (project) =>
        project.name.toLocaleUpperCase().includes(search.toUpperCase()) ||
        project.year.toLocaleUpperCase().includes(search.toUpperCase()) ||
        project.type.toLocaleUpperCase().includes(search.toUpperCase())
    );
    search != "" ? setFilteredProjects(filtered) : setFilteredProjects([]);
  }

  function updateFilteredLinks(search: string) {
    search = search.trim();
    const filtered = links.filter((link) =>
      link.name.toUpperCase().includes(search.toUpperCase())
    );
    search != "" ? setFilteredLinks(filtered) : setFilteredLinks([]);
  }

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView();
    closeSearch();

    if (pathName != "/") {
      router.push(`/?section=${sectionId}`);
    }
  }

  function closeAsideWhenClicked(e: React.MouseEvent<HTMLElement>) {
    if (e.target == e.currentTarget) {
      closeSearch();
    }
  }

  return (
    <section
      onClick={(e) => closeAsideWhenClicked(e)}
      className={`fixed top-0 left-0 bottom-0 overflow-x-hidden bg-[#00000080] border-b-1 border-b-[#43454d]  ${
        searchOpened ? "right-0 p-1" : "right-full"
      }`}
    >
      <div className="grid items-center bg-[#292f36] py-2 max-w-[600px] m-auto rounded-sm">
        <search className="grid grid-cols-[1fr_auto] items-center gap-1.5 w-full px-5">
          <span>
            <input
              onChange={(e) => {
                setCurrentSearch(e.target.value);
              }}
              ref={searchRef}
              placeholder="Search"
              className="block py-2 px-1 outline-none w-full bg-[#292f36] text-sm text-white placeholder:text-gray-500"
              id="hidden-search"
              type="text"
              value={currentSearch}
            />
          </span>
          <span className="text-white text-2xl">
            <button onClick={closeSearch} className="cursor-pointer">
              <HiX />
            </button>
          </span>
        </search>
        <div className="p-5 grid gap-1">
          {/* FOR PROJECTS  */}
          {filteredProjects.length != 0 ? (
            <p className="text-gray-500 text-xs">Projects</p>
          ) : null}

          {filteredProjects.map(({ name, id, year, type }, index) => (
            <Link
              onClick={closeSearch}
              key={index + 1}
              className="grid gap-3 grid-cols-[auto_1fr] items-start w-full text-gray-300 px-2 py-2.5 rounded-sm hover:bg-[#5c637177]"
              href={`/projects/${id}`}
            >
              <span className="text-gray-400 pt-1.5">
                {/* <FaSearch strokeWidth={1.5} /> */}
                <FaProjectDiagram />
              </span>
              <p className="grid gap-1">
                <span className="text-sm">{name}</span>
                <span className={`text-xs text-gray-400 ${ubuntu.className}`}>
                  <span>{type}: </span>
                  <span>{year}</span>
                </span>
              </p>
            </Link>
          ))}

          {/* FOR LINKS */}
          {filteredLinks.length != 0 ? (
            <p className="text-gray-500 text-xs">Links</p>
          ) : null}
          {filteredLinks.map((link, index) => (
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.url.slice(2));
              }}
              key={index + 1}
              className="grid gap-3 grid-cols-[auto_1fr] items-start w-full text-gray-300 px-2 py-2.5 rounded-sm hover:bg-[#5c637177]"
              href={`${link.url}`}
            >
              <span className="text-gray-400 pt-1.5">
                {/* <FaSearch strokeWidth={1.5} /> */}
                <FiLink />
              </span>
              <p className="grid gap-1">
                <span className="text-sm">{link.name}</span>
                <span className={`text-xs text-gray-400 ${ubuntu.className}`}>
                  <span>Path: </span>
                  <span>{link.url}</span>
                </span>
              </p>
            </Link>
          ))}

          {filteredProjects.length == 0 && filteredLinks.length == 0 ? (
            <p
              className={`text-gray-400 px-2 text-sm text-center ${ubuntu.className}`}
            >
              {currentSearch.trim() == ""
                ? "Start typing to see results..."
                : "No Match Found"}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
