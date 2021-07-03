import expressLoader from './express';
import { Logger } from "../utilities";

const loader = async ({ expressApp }) => {
    await expressLoader({ app: expressApp });
    Logger.info('Express app loaded');
}

export default loader;