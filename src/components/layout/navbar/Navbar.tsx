import { useState } from "react";
import NotificationBell from "../../ui/NotificationBell";
import ProfileMenu from "../../../features/auth/components/ProfileMenu";
import Drawer from "../../ui/Drawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-20 right-0 h-16 bg-white shadow-sm border-b border-b-gray-50 flex items-center px-5">
      {/* Left */}
      <div>
        <h3 className="font-bold text-lg">Clients</h3>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 ml-auto">
        <NotificationBell count={1} />

        <ProfileMenu onClick={() => setOpen(true)} />
        <Drawer
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Notifications"
        >
          <p>No Notifications</p>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
