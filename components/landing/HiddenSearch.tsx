import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useEffect, useState, useRef } from "react";
import { DataProps } from "./Projects";

export default function HiddenSearch({
  closeSearch,
  searchOpened,
}: {
  closeSearch: () => void;
  searchOpened: boolean;
}) {
  const [projects, setProjects] = useState<DataProps[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<DataProps[]>([]);
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
    if (searchOpened) document.body.classList.add("fix-body");
    else document.body.classList.remove("fix-body");
    updateFilteredProject("");
  }, [searchOpened]);

  function updateFilteredProject(search: string) {
    search = search.trim();
    const filtered = projects.filter(
      (project) =>
        project.name.toLocaleUpperCase().includes(search.toUpperCase()) ||
        project.year.toLocaleUpperCase().includes(search.toUpperCase()) ||
        project.type.toLocaleUpperCase().includes(search.toUpperCase())
    );
    setFilteredProjects(filtered);
  }

  return (
    <section
      className={`custom-transition fixed top-0 left-0 hidden bottom-0 overflow-x-hidden bg-[#5c6371b3] border-b-1 border-b-[#43454d] max-[701px]:block ${
        searchOpened ? "right-0" : "right-full"
      }`}
    >
      <div className="grid items-center bg-[#292f36] py-2">
        <search className="grid grid-cols-[1fr_auto] items-center gap-1.5 w-full px-5">
          <span>
            <input
              onChange={(e) => updateFilteredProject(e.target.value)}
              ref={searchRef}
              placeholder="Search"
              className="block py-2 px-1 outline-none w-full bg-[#292f36] text-sm text-white placeholder:text-gray-500"
              id="hidden-search"
              type="text"
            />
          </span>
          <span className="text-white text-2xl">
            <button onClick={closeSearch} className="cursor-pointer">
              <HiX />
            </button>
          </span>
        </search>
        <div className="p-5 grid gap-1">
          <p className="text-gray-500 text-xs">Projects</p>
          {filteredProjects.map(({ name, id, year, type }, index) => (
            <Link
              key={index + 1}
              className="grid gap-3 grid-cols-[auto_1fr] items-start w-full text-gray-300 px-2 py-2.5 rounded-sm hover:bg-[#5c637177]"
              href={`/projects/${id}`}
            >
              <span className="text-gray-400 pt-1.5">
                <FaSearch strokeWidth={1.5} />
              </span>
              <p className="grid gap-1">
                <span className="text-sm">{name}</span>
                <span className="text-xs text-gray-400">
                  <span>{type}: </span>
                  <span>{year}</span>
                </span>
              </p>
            </Link>
          ))}

          {filteredProjects.length == 0 ? (
            <p className="text-gray-400 px-2 text-sm text-center">No result</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
