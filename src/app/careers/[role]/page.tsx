import { redirect } from "next/navigation";

type Props = { params: Promise<{ role: string }> };

export default async function Page({ params }: Props) {
  const { role } = await params;
  redirect(`/careers#${role}`);
}

