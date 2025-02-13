"use client";

import { Container } from "@mui/material";
import SampleTable from "../../../components/table";
import CreateModal from "../../../components/create";
import EditModal from "../../../components/edit";

export default function Home() {
  return (
    <Container>
      <SampleTable />
      <CreateModal />
      <EditModal />
    </Container>
  );
}
