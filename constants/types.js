import { DataTypes as dt } from "sequelize";

const PRIMARY_ID = {
  type: dt.UUID,
  primaryKey: true,
  defaultValue: dt.UUIDV4,
  allowNull: false,
  unique: true,
};

const STR_REQ = { type: dt.STRING, allowNull: false };

const predefinedTypes = { PRIMARY_ID, STR_REQ };

export const dtypes = { ...dt, pd: predefinedTypes };
