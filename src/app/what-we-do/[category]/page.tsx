import { redirect } from "next/navigation";

type Props = { params: Promise<{ category: string }> };

export default async function Page({ params }: Props) {
  const { category } = await params;

  const map: Record<string, string> = {
    "ai-ml-development": "/what-we-do#ai-ml-development",
    "modernize-software": "/what-we-do#modernize-software",
    "cloud-infrastructure": "/what-we-do#cloud-consulting-services",
    "cyber-security-solutions": "/what-we-do#cyber-security-solutions",
    "digital-marketing": "/what-we-do#digital-marketing",
    "political-campaigns": "/what-we-do#political-campaign-technology",
    "blockchain-solutions": "/what-we-do#blockchain-solutions",
  };

  redirect(map[category] ?? "/what-we-do");
}
