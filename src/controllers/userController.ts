import { Request, Response } from "express";
import * as userService from "../services/userService";

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getUsers();
  res.status(200).json(users);
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const user = userService.getUser(Number(id));
  res.status(200).json(user);
};