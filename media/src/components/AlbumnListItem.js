import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useDeleteAlbumnMutation } from "../store";
import { usePostPhotoMutation } from "../store";
import PhotoList from "./PhotoList";

export default function AlbumnListItem({ albumn, user }) {
  const [deleteAlbumn, deleteResults] = useDeleteAlbumnMutation();
  const [postPhoto, postResults] = usePostPhotoMutation();

  const handleDeleteAlbum = (albumnId) => {
    console.log(albumnId);
    deleteAlbumn({ userId: user.id, id: albumnId });
  };

  const handlePostPhoto = () => {
    postPhoto(albumn);
  };

  const header = <div>{albumn.title}</div>;
  return (
    <ExpandablePanel key={albumn.id} header={header}>
      <div className="flex justify-between items-center">
        <Button
          loading={postResults.isLoading}
          onClick={handlePostPhoto}
          success
        >
          + Post Photo
        </Button>
        <Button
          loading={deleteResults.isLoading}
          onClick={() => {
            handleDeleteAlbum(albumn.id);
          }}
          danger
        >
          Delete
        </Button>
      </div>
      <div>
        <PhotoList albumn={albumn} />
      </div>
    </ExpandablePanel>
  );
}
