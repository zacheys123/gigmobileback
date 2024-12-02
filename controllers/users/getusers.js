import { users } from "../../utils.js";
export const getusers = async (req, res, next) => {
  return res.status(200).json({ success: true, result: users });
};
