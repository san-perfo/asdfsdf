import * as dotenv from 'dotenv';
import * as express from 'express';
import * as os from 'os';
import * as path from 'path';
import {registerRoutes} from './routes';

dotenv.config({ path: `${os.homedir()}${path.sep}appName.env`});
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();

app.use(express.json());
app.use(registerRoutes(router, app));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
