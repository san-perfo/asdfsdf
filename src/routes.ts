import { Application, Router } from 'express';
export function registerRoutes(router: Router, app: Application): Router {
    router.get('/', (req, resp) => resp.send({data: 'Hello World, sample get req for node-ts starter!!'}));
    return router;
}
