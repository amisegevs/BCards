import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "./../hooks/useCards";

const CardsPage = () => {
  const { value, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Cards Page"
        subtitle="On this page you can find all business cards form all categories"
      />
      <CardsFeedback
        cards={value.cards}
        error={value.error}
        isLoading={value.isLoading}
        onDelete={() => {}}
      />
    </Container>
  );
};

export default CardsPage;
