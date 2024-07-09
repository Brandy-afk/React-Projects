export default function ImageShow({ image }) {
  return (
    <div>
      <img
        className="query-image"
        alt={image.alt_description || "image"}
        src={image.urls.small}
      />
    </div>
  );
}
