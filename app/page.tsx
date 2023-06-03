"use client";

import { useGetUsersQuery } from "../common/redux/services/userApi";
import { decrement, increment, reset } from "../common/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../common/redux/hooks";

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>;

}
