import ImageShow from "./ImageShow.js";

export default function ImageList(props) {
  const renderedImages = props.images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  console.log(renderedImages);

  return <div className="image-container">{renderedImages}</div>;
}
