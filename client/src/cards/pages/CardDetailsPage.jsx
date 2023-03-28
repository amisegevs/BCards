import React from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import PageHeader from "./../../components/PageHeader";

const CardDetailsPage = () => {
  const params = useParams();
  //   const { cardId } = useParams();/
  console.table(params);

  return (
    <Container>
      <PageHeader
        title="Business Details Page"
        subtitle="Here you can see details of the business"
      />
      <div>Details of card: {params.cardId} </div>
    </Container>
  );
};

export default CardDetailsPage;
