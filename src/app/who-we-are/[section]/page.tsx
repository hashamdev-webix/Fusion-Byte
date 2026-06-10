import { redirect } from "next/navigation";

type Props = { params: Promise<{ section: string }> };

export default async function Page({ params }: Props) {
  const { section } = await params;

  const anchors: Record<string, string> = {
    mission: "mission",
    vision: "vision",
    values: "values",
    expertise: "expertise",
    "company-overview": "company-overview",
    "company-background": "company-overview",
    "our-philosophy": "company-overview",
    "consulting-methodology": "methodology",
    "client-centric-model": "methodology",
    "agile-delivery-model": "methodology",
    "innovation-focus": "values",
    "integrity-transparency": "values",
    "quality-commitment": "values",
    "alberta-operations": "company-overview",
    "canada-focus": "company-overview",
    "expansion-vision": "vision",
    excellence: "values",
    collaboration: "values",
    "technology-leadership": "values",
    "industry-expertise": "expertise",
    "scalable-solutions": "expertise",
    "long-term-partnerships": "why-choose",
  };

  const anchor = anchors[section];
  redirect(anchor ? `/who-we-are#${anchor}` : "/who-we-are");
}

