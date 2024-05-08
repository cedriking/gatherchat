import { GatherChat } from "@/components/layout/GatherChat";
import { GatherContractLoader } from "@/features/ao/components/GatherContractLoader";
import WalletLoader from "@/features/ao/components/WalletLoader";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/game")({
	component: Game,
});

function Game() {
	return (
		<WalletLoader>
			{(arweaveAddress) => (
				<GatherContractLoader>
					{(state, events) => (
						<GatherChat
							playerAddress={arweaveAddress}
							state={state}
							events={events}
						/>
					)}
				</GatherContractLoader>
			)}
		</WalletLoader>
	);
}
