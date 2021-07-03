import express from "express";
import 'dotenv/config';
import Config from './src/config';
import initLoader from "./src/loaders";
import { Logger } from "./src/utilities";

process.on('uncaughtException', function (error) {
    Logger.error("Uncaught Exception : ")
    Logger.error(error);
});

(async () => {
    try {
        const app = express();

        await initLoader({ expressApp: app });

        app.listen(Config.port, err => {
            if (err) {
                Logger.error(err);
                process.exit(1);
                return;
            }
            let successMsg = `
            ################################################
            Server listening on port: ${Config.port}
            ################################################
            `;
            Logger.info(successMsg);
        });
    } catch (e) {
        // Deal with the fact the chain failed
        Logger.error('Error at the time of starting app', e);
    }
})();
