import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

export function Stats() {
	return (
		<div className="grid gap-3 md:grid-cols-3">
			<div className="bg-gray-700 border border-gray-600 px-5 py-4 flex flex-col items-center justify-center gap-1 rounded-xl relative">
				<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
					1042
				</span>
				<span className="text-sm text-gray-300 leading-none text-center">
					Acessos ao link
				</span>
				<MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
			</div>
			<div className="bg-gray-700 border border-gray-600 px-5 py-4 flex flex-col items-center justify-center gap-1 rounded-xl relative">
				<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
					1042
				</span>
				<span className="text-sm text-gray-300 leading-none text-center">
					Inscrições feitas
				</span>
				<BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
			</div>
			<div className="bg-gray-700 border border-gray-600 px-5 py-4 flex flex-col items-center justify-center gap-1 rounded-xl relative">
				<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
					3°
				</span>
				<span className="text-sm text-gray-300 leading-none text-center">
					Posição no ranking
				</span>
				<Medal className="size-5 text-purple absolute top-3 left-3" />
			</div>
		</div>
	);
}
