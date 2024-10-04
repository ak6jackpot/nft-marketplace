import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import useOutsideClick from "../hooks/useOutsideClick";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import defaultProfile from "assets/icons/defaultProfile.png";

interface DropdownItem {
  id: Number;
  name: string;
  imageUrl?: string;
}

interface DropdownProps {
  id: string;
  data: DropdownItem[];
  style?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

const Dropdown = ({ id, data, style, selectedId, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );
  const pic = localStorage.getItem("profilePic");

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const dropdownClass = classNames(
    "absolute bg-gray-100 w-max max-h-52 overflow-y-auto rounded shadow-md z-10 top-full right-0 mt-2"
  );

  return (
    <div ref={dropdownRef} className="relative">
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "flex justify-center items-center gap-5 rounded w-full py-2 text-black",
          style
        )}
      >
        <img
          className="w-[50px] rounded-full mr-2 aspect-square"
          src={pic ? pic : defaultProfile}
        />
        <KeyboardArrowDownOutlinedIcon />
      </button>
      {/* Open */}
      {isOpen && (
        <div aria-label="Dropdown menu" className={dropdownClass}>
          <ul
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            className="leading-10"
          >
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={classNames(
                  "flex items-center cursor-pointer hover:bg-gray-200 py-3 px-6",
                  { "bg-gray-300": selectedItem?.id === item.id }
                )}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
