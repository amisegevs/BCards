import React from "react";
import { arrayOf, string, bool, func } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Typography from "@mui/material/Typography";
import Cards from "./Cards";
import cardType from "./../models/types/cardType";

const CardsFeedback = ({ isLoading, error, cards, onDelete }) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <Typography variant="body1" color="initial">
        Oops, there are no business cards in the database that match the
        parameters you entered!
      </Typography>
    );
  if (cards) return <Cards cards={cards} />;
  return null;
};

CardsFeedback.propTypes = {
  isLoading: bool.isRequired,
  error: string,
  cards: arrayOf(cardType),
  onDelete: func.isRequired,
};

export default CardsFeedback;
