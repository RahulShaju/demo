type AvatarProps = {
  src?: string;
  onClick?: () => void;
};

export default function Avatar({ src, onClick }: AvatarProps) {
  return (
    <img
      src={src || "/avatar.png"}
      alt="Profile"
      onClick={onClick}
      className="h-8 w-8 rounded-full object-cover cursor-pointer"
    />
  );
}
