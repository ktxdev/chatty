function Avatar({ src, alt = "", size = 10 }) {
  return (
    <img
      height="44"
      width="44"
      className={`rounded-full w-${size} h-${size}`}
      src={src}
      alt={alt}
    />
  );
}

export default Avatar;
