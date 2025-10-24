import HeaderAjuda from "@/app/header-ajuda";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getAllSlugs, getContent, getTitleFromSlug } from "@/app/lib/content";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const sp = await searchParams;
  const q = sp?.q?.toString() ?? "";
  const title = q ? `Buscar: ${q}` : "Buscar guias";
  const description = q
    ? `Resultados de busca por \"${q}\" nos guias`
    : "Busque por tópicos de ajuda nos guias";
  return { title, description };
}

export default async function SearchGuiaPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const sp = await searchParams;
  const q = sp?.q?.toString().trim() ?? "";
  const allSlugs = getAllSlugs("guia");

  const results = q
    ? allSlugs
      .map((slug) => {
        const item = getContent("guia", slug);
        if (!item) return null;
        const title = (item.data?.title as string | undefined) ?? getTitleFromSlug(slug);
        const description = (item.data?.description as string | undefined) ?? "";
        const haystack = `${title} ${description} ${item.content}`.toLowerCase();
        const needle = q.toLowerCase();
        if (haystack.includes(needle)) {
          return { slug, title, description };
        }
        return null;
      })
      .filter(Boolean) as { slug: string; title: string; description: string }[]
    : [];

  return (
    <div>
      <HeaderAjuda />
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold">Buscar guias</h1>
        {q ? (
          <p className="text-muted-foreground">Resultados para: <span className="font-medium">{q}</span></p>
        ) : (
          <p className="text-muted-foreground">Digite um termo no campo acima e pressione Buscar.</p>
        )}
        <Separator className="my-6" />

        {q && results.length === 0 ? (
          <p className="text-muted-foreground">Nenhum resultado encontrado.</p>
        ) : null}

        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((r) => (
              <li key={r.slug} className="rounded-lg border bg-card p-4">
                <Link href={`/ajuda/guia/${r.slug}`} className="no-underline">
                  <h2 className="text-xl font-semibold">{r.title}</h2>
                  {r.description ? (
                    <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8">
          <Link href="/" className="no-underline bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 rounded-full inline-block">
            Voltar para a Central de Ajuda
          </Link>
        </div>
      </div>
    </div>
  );
}
