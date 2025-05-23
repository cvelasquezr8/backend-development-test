import { envs } from '@config/index';
import { AppRoutes } from '@presentation/routes';
import { Server } from '@presentation/server';

(async () => {
	main();
})();

function main() {
	const server = new Server({
		port: envs.PORT,
		routes: AppRoutes.routes,
	});

	server.start();
}
