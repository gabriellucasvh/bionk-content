/* eslint-disable react/no-unescaped-entities */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart2,
  BookOpen,
  Clock,
  DollarSign,
  HelpCircle,
  Image as ImageIcon,
  Layout,
  Link2,
  List,
  PaintBucket,
  Palette,
  Settings,
  Share2,
  Sparkles,
  TrendingUp,
  Type,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import HeaderAjuda from "@/app/header-ajuda";
import Footer from "@/components/layout/Footer";

export const LINKS = {
  primeirosPassos: [
    { label: "Como criar sua conta", href: "/ajuda/guia/como-criar-uma-conta", icon: UserPlus },
    { label: "Configurando seu perfil", href: "/ajuda/guia/configurando-seu-perfil", icon: Settings },
    { label: "Adicionando seu primeiro link", href: "/ajuda/guia/adicionando-seu-primeiro-link", icon: Link2 },
    { label: "Personalizando sua página", href: "/ajuda/guia/personalizando-sua-pagina", icon: Layout },
    { label: "Compartilhando seu Bionk", href: "/ajuda/guia/compartilhando-seu-bionk", icon: Share2 },
  ],
  personalizacao: [
    { label: "Alterando cores e temas", href: "/ajuda/guia/alterando-cores-e-temas", icon: PaintBucket },
    { label: "Adicionando imagens e ícones", href: "/ajuda/guia/adicionando-imagens-e-icones", icon: ImageIcon },
    { label: "Organizando seus links", href: "/ajuda/guia/organizando-seus-links", icon: List },
    { label: "Usando animações e efeitos", href: "/ajuda/guia/usando-animacoes-e-efeitos", icon: Sparkles },
    { label: "Fontes e estilos de texto", href: "/ajuda/guia/fontes-e-estilos-de-texto", icon: Type },
  ],
  recursosAvancados: [
    { label: "Análise de cliques e visitas", href: "/ajuda/guia/analise-de-cliques-e-visitas", icon: BarChart2 },
    { label: "Programando publicação de links", href: "/ajuda/guia/programando-publicacao-de-links", icon: Clock },
    { label: "Recursos para criadores de conteúdo", href: "/ajuda/guia/recursos-para-criadores-de-conteudo", icon: Users },
    { label: "Monetização e links de afiliados", href: "/ajuda/guia/monetizacao-e-links-de-afiliados", icon: DollarSign },
  ],
  artigosPopulares: [
    { label: "Como criar um link na bio que converte", href: "/ajuda/artigo/como-criar-um-link-na-bio-que-converte" },
    { label: "10 dicas para aumentar seus seguidores", href: "/ajuda/artigo/10-dicas-para-aumentar-seus-seguidores" },
    { label: "Como usar análises para melhorar seu desempenho", href: "/ajuda/artigo/como-usar-analises-para-melhorar-seu-desempenho" },
    { label: "Integrando seu link na bio com o Instagram", href: "/ajuda/artigo/integrando-seu-link-na-bio-com-o-instagram" },
    { label: "Melhores práticas para criadores de conteúdo", href: "/ajuda/artigo/melhores-praticas-para-criadores-de-conteudo" },
  ],
} as const;
export default function HelpCenter() {
  return (
    <div>
      <HeaderAjuda />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border-l-4 border-l-blue-500 transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Primeiros Passos</CardTitle>
              </div>
              <CardDescription>Aprenda o básico para começar</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {LINKS.primeirosPassos.map(({ icon: Icon, href, label }) => (
                  <li
                    key={href}
                    className="flex cursor-pointer items-center gap-2 text-sm transition-colors hover:text-blue-600"
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    ) : null}
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-purple-100 p-2">
                  <Palette className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>Personalização</CardTitle>
              </div>
              <CardDescription>Torne sua página única</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {LINKS.personalizacao.map(({ icon: Icon, href, label }) => (
                  <li
                    key={href}
                    className="flex cursor-pointer items-center gap-2 text-sm transition-colors hover:text-purple-600"
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    ) : null}
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-2">
                  <Zap className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle>Recursos Avançados</CardTitle>
              </div>
              <CardDescription>Maximize sua presença online</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {LINKS.recursosAvancados.map(({ icon: Icon, href, label }) => (
                  <li
                    key={href}
                    className="flex cursor-pointer items-center gap-2 text-sm transition-colors hover:text-green-600"
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    ) : null}
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Apenas FAQ direto */}
        <Card className="mb-10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              <CardTitle>Perguntas Frequentes</CardTitle>
            </div>
            <CardDescription>
              Respostas para as dúvidas mais comuns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion className="w-full" collapsible type="single">
              <AccordionItem value="item-1">
                <AccordionTrigger className="cursor-pointer">
                  Como posso alterar meu nome de usuário?
                </AccordionTrigger>
                <AccordionContent>
                  Para alterar seu nome de usuário, acesse as configurações do
                  seu perfil, clique em "Editar perfil" e atualize o campo "Nome
                  de usuário". Lembre-se que seu nome de usuário deve ser único
                  e será usado na URL da sua página.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="cursor-pointer">
                  Posso adicionar mais de um link para a mesma rede social?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, você pode adicionar quantos links desejar, mesmo que
                  sejam para a mesma plataforma. Isso é útil para quem tem
                  múltiplos perfis ou canais em uma mesma rede social.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="cursor-pointer">
                  Como posso ver quantas pessoas clicaram nos meus links?
                </AccordionTrigger>
                <AccordionContent>
                  Acesse a seção "Análises" no painel de controle para
                  visualizar estatísticas detalhadas sobre cliques, visitas e
                  interações com sua página e links individuais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="cursor-pointer">
                  É possível programar a publicação de links?
                </AccordionTrigger>
                <AccordionContent>
                  Sim, com nossa função de agendamento, você pode programar
                  quando um link ficará visível em sua página. Isso é ideal para
                  promoções temporárias ou lançamentos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 transition-all hover:shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-amber-100 p-2">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
              <CardTitle>Artigos Populares</CardTitle>
            </div>
            <CardDescription>
              Conteúdo mais acessado pelos usuários
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {LINKS.artigosPopulares.map((item, idx) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-600 text-xs">
                    {idx + 1}
                  </span>
                  <Link
                    className="cursor-pointer text-sm transition-colors hover:text-amber-600"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <Footer/>
    </div>
  );
}

