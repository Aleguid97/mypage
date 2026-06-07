import React from "react";

function LocalizedText({ showItalian, en, it, as: Tag = "span", className = "" }) {
  return (
    <Tag className={`${className} ${showItalian ? "d-none" : "d-block"}`}>
      {en}
    </Tag>
  );
}

function LocalizedTextIta({ showItalian, it, as: Tag = "span", className = "" }) {
  return (
    <Tag className={`${className} ${showItalian ? "d-block" : "d-none"}`}>
      {it}
    </Tag>
  );
}

function LocalizedPair({ showItalian, en, it, as: Tag = "span", className = "", classNameEn = "", classNameIt = "" }) {
  return (
    <>
      <Tag className={`${className} ${classNameEn} ${showItalian ? "d-none" : "d-block"}`}>
        {en}
      </Tag>
      <Tag className={`${className} ${classNameIt} ${showItalian ? "d-block" : "d-none"}`}>
        {it}
      </Tag>
    </>
  );
}

export { LocalizedText, LocalizedTextIta, LocalizedPair };
