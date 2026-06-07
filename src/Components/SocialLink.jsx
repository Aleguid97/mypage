import React from "react";

function SocialLink({ href, icon: Icon, size = 40, className = "", external = true }) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} {...linkProps}>
      <Icon size={size} className={className} />
    </a>
  );
}

export default SocialLink;
