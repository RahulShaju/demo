import Avatar from "../../../components/ui/Avatar";

export default function ProfileMenu({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="relative">
      <Avatar src="" />
    </div>
  );
}
