import { CARD_GROUPS } from "../constants/groups.config.js";
import { dtypes } from "../constants/types.js";
import db from "../db/pg.js";

const Card = db.define("Card", {
  id: { ...dtypes.pd.PRIMARY_ID },
  groupName: {
    ...dtypes.pd.STR_REQ,
    values: Object.values(CARD_GROUPS),
    unique: "groupOrder",
  },
  title: { ...dtypes.pd.STR_REQ },
  content: { type: dtypes.STRING },
  order: { type: dtypes.DECIMAL, allowNull: false, unique: "groupOrder" },
});

export default Card;
