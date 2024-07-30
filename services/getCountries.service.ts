import { notFound } from "next/navigation";

export default async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v3.1/all`);

  if (!res.ok) notFound();

  return res.json();
};
