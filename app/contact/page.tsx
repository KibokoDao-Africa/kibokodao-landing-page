"use client";
import { Github, Mail, Twitter, Facebook,  Youtube } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/KibokoDAOAfrica",
		label: "Twitter",
		handle: "@KibokoDAOAfrica",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:kiboko.dao.africa@gmail.com",
		label: "Email",
		handle: "kiboko.dao.africa@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/KibokoDao-Africa",
		label: "Github",
		handle: "KibokoDao-Africa",
	},
	{
		icon: <Facebook size={20} />,
		href: "https://web.facebook.com/profile.php?id=100093844284426&_rdc=1&_rdr",
		label: "Facebook",
		handle: "Kiboko Dao",		
	}, 
	{
		icon: <Youtube size={20} />,
		href: "https://www.youtube.com/channel/UCSNJ_cLEa8-VO4_HmvvwBjw",
		label: "YouTube",
		handle: "Kiboko Dao Africa",		
	},
	{
		icon: <FontAwesomeIcon icon={faMedium} size="lg" />,
		href: "https://medium.com/@kiboko.dao.africa",
		label: "Medium",
		handle: "Kiboko Dao Africa",		
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
