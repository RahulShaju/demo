import { columns, type Prospect } from "../columns";
import Table from "../../../components/ui/tables/Table";
import { useState } from "react";
import Tabs from "../../../components/ui/Tabs";

const ClientsPage = () => {
  const tabs = [
    { id: "prospects", label: "Prospects" },
    { id: "clients", label: "Clients" },
  ];
  const [activeTab, setActiveTab] = useState("prospects");

  const PROSPECT_DATA: Prospect[] = [
    {
      id: "1",
      name: "Olivia Martin",
      city: "Scarborough, ON",
      maritalStatus: "Single",
      immigrationStatus: "Citizen",
      email: "olivia.martin@email.com",
      note: "sbfjs",
    },
    {
      id: "2",
      name: "Jackson Lee",
      city: "Vancouver, BC",
      maritalStatus: "Married",
      immigrationStatus: "PR",
      email: "jackson.lee@email.com",
      note: "sbfjs",
    },
    {
      id: "3",
      name: "Isabella Nguyen",
      city: "Montreal, QC",
      maritalStatus: "CommonLaw",
      immigrationStatus: "Work Permit",
      email: "isabella.n@email.com",
      note: "sbfjs",
    },
    {
      id: "4",
      name: "",
      city: "Toronto, ON",
      maritalStatus: "Single",
      immigrationStatus: "Citizen",
      email: "william.c@email.com",
      note: "sbfjs",
    },
    {
      id: "5",
      name: "Sophia Rodriguez",
      city: "Calgary, AB",
      maritalStatus: "Married",
      immigrationStatus: "PR",
      email: "sophia.rod@email.com",
      note: "sbfjs",
    },
  ];

  const CLIENT_DATA: Prospect[] = [
    {
      id: "1",
      name: "Client Name",
      city: "Scarborough, ON",
      maritalStatus: "Single",
      immigrationStatus: "Citizen",
      email: "olivia.martin@email.com",
      note: "sbfjs",
    },
    {
      id: "2",
      name: "Jackson Client",
      city: "Vancouver, BC",
      maritalStatus: "Married",
      immigrationStatus: "PR",
      email: "jackson.lee@email.com",
      note: "sbfjs",
    },
    {
      id: "3",
      name: "Isabella Client",
      city: "Montreal, QC",
      maritalStatus: "CommonLaw",
      immigrationStatus: "Work Permit",
      email: "isabella.n@email.com",
      note: "sbfjs",
    },
    {
      id: "4",
      name: "",
      city: "Toronto, ON",
      maritalStatus: "Single",
      immigrationStatus: "Citizen",
      email: "william.c@email.com",
      note: "sbfjs",
    },
    {
      id: "5",
      name: "Sophia Client",
      city: "Calgary, AB",
      maritalStatus: "Married",
      immigrationStatus: "PR",
      email: "sophia.rod@email.com",
      note: "sbfjs",
    },
  ];
  return (
    <div>
      {/* <DataTable columns={columns} data={PROSPECT_DATA} /> */}
      <Table
        label={"Prospects"}
        search
        buttons={
          <>
            <Tabs tabs={tabs} value={activeTab} onChange={setActiveTab} />
          </>
        }
        columns={columns}
        data={activeTab === "clients" ? CLIENT_DATA : PROSPECT_DATA}
        labelInfo="Potential clients you are still getting to know."
      />
    </div>
  );
};

export default ClientsPage;
