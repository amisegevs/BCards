import React from "react";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Divider, Box, Typography } from "@mui/material";
import cardType from "../../models/types/cardType";

const CardBody = ({ card }) => {
  const { street, houseNumber, city } = card.address;
  return (
    <CardContent>
      <CardHeader
        title={card.title}
        subheader={card.subtitle}
        sx={{ p: 0, mb: 1 }}
      />
      <Divider />
      <Box mt={1}>
        <Typography variant="body2" color="text.secondary">
          <Typography fontWeight={700} component="span">
            phone:{" "}
          </Typography>
          {card.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography fontWeight={700} component="span">
            address:{" "}
          </Typography>
          {street} {houseNumber} {city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Typography fontWeight={700} component="span">
            card number:{" "}
          </Typography>
          {card.bizNumber}
        </Typography>
      </Box>
    </CardContent>
  );
};

CardBody.propTypes = {
  card: cardType.isRequired,
};

export default CardBody;
