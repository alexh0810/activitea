import axios from "axios";
import { Router, useNavigate } from "react-router-dom";
import { resetCart } from "../redux/reducers/cartReducer";
import { Order } from "../types/order";
import { useAppDispatch, useAppSelector } from "./appHooks";

export const useCreateOrder = async (data: Order) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cartReducer);
  try {
    const res = await axios.post("http://localhost:5000/api/v1/orders", data);
    if (res.status === 201) {
      dispatch(resetCart());
    }
  } catch (err) {
    console.log(err);
  }
};
