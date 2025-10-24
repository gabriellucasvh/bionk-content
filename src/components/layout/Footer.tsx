// Removido import dos ícones do Lucide - usando ícones SVG locais
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigation = {
	resources: [
		{ name: "Ajuda", href: "/ajuda" },
		{ name: "Descubra", href: "/descubra" },
		{ name: "Templates", href: "/templates" },
		{ name: "Preços e Planos", href: "/planos" },
	],
	contact: [
		{ name: "Contato", href: "/contato" },
		{ name: "contato@bionk.me", href: "mailto:contato@bionk.me" },
	],
	legal: [
		{ name: "Termos e Condições", href: "/termos" },
		{ name: "Política de Privacidade", href: "/privacidade" },
		{ name: "Uso de Cookies", href: "/cookies" },
		{ name: "Diretrizes da Comunidade", href: "/comunidade" },
		{ name: "Reportar Violação", href: "/reportar-violacao" },
	],
	social: [
		{
			name: "Twitter",
			href: "#",
			icon: "/icons/x.svg",
		},
		{
			name: "Instagram",
			href: "#",
			icon: "/icons/instagram.svg",
		},
		{
			name: "Facebook",
			href: "#",
			icon: "/icons/facebook.svg",
		},
	],
};

const Footer = () => {
	return (
		<footer className="w-full bg-slate-900 text-slate-300">
			<div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					{/* Logo e descrição */}
					<div className="space-y-4">
						<Link className="inline-block" href="/">
							<Image
								alt="Bionk Logo"
								className="h-14 w-auto"
								height={28}
								priority
								src="https://res.cloudinary.com/dlfpjuk2r/image/upload/v1755641014/bionk-logo-icon_ya5kbp.svg"
								width={110}
							/>
						</Link>
						<p className="text-slate-400 text-sm leading-6">
							O melhor gerenciador de links para o seu negócio.
						</p>
					</div>

					{/* Links de navegação */}
					<div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-3 md:gap-8">
							<div>
								<h3 className="font-semibold text-white text-xs uppercase tracking-wider">
									Recursos
								</h3>
								<ul className="mt-4 space-y-3">
									{navigation.resources.map((item) => (
										<li key={item.name}>
											<Link
												className="text-slate-400 text-sm transition-colors duration-300 hover:text-green-400"
												href={item.href}
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="font-semibold text-white text-xs uppercase tracking-wider">
									Legal
								</h3>
								<ul className="mt-4 space-y-3">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<Link
												className="text-slate-400 text-sm transition-colors duration-300 hover:text-green-400"
												href={item.href}
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="font-semibold text-white text-xs uppercase tracking-wider">
									Contato
								</h3>
								<ul className="mt-4 space-y-3">
									{navigation.contact.map((item) => (
										<li key={item.name}>
											<Link
												className="text-slate-400 text-sm transition-colors duration-300 hover:text-green-400"
												href={item.href}
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* Esta coluna pode ser usada para mais links no futuro, se necessário */}
					</div>
				</div>

				{/* Rodapé inferior com copyright e ícones sociais */}
				<div className="mt-16 border-slate-800 border-t pt-8 sm:flex sm:items-center sm:justify-between">
					<div className="flex space-x-6 sm:order-2">
						{navigation.social.map((item) => (
							<Link
								className="text-slate-500 transition-colors duration-300 hover:text-green-400"
								href={item.href}
								key={item.name}
							>
								<span className="sr-only">{item.name}</span>
								<Image
									alt={item.name}
									className="h-5 w-5 opacity-60 brightness-0 invert filter transition-opacity duration-300 hover:opacity-100"
									height={20}
									src={item.icon}
									width={20}
								/>
							</Link>
						))}
					</div>
					<p className="mt-6 text-slate-500 text-xs leading-5 sm:order-1 sm:mt-0">
						&copy; {new Date().getFullYear()} Bionk. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
			<div className="mx-auto flex h-full w-full items-center justify-center p-4">
				<Image
					alt="Logo Bionk"
					height={1000}
					src={
						"https://res.cloudinary.com/dlfpjuk2r/image/upload/v1755640991/bionk-logo-white_ld4dzs.svg"
					}
					width={1000}
				/>
			</div>
		</footer>
	);
};

export default React.memo(Footer);
