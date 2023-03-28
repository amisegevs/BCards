import { useCallback } from "react";
import useCards from "./../hooks/useCards";
import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";

import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const FavCardsPage = () => {
  const { value, ...rest } = useCards();
  const { isLoading, error, cards } = value;
  const { handleDeleteCard, handleGetFavCards } = rest;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtile="Here you can find all your favorite business cards"
      />

      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default FavCardsPage;
