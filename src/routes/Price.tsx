import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface PriceProps {
  coinId: string;
}

interface IHistorial {
  time_open: string;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorial[]>(["ticker", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(data);
  return <h1>Price</h1>;
}

export default Price;
