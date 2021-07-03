import express from "express";
import cors from "cors";
import HttpStatus from "http-status-codes";

const loadModules = ({ app }) => {

    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());

    //  Middleware that transforms the raw string of req.body into json
    app.use(express.json());

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = Error(`Route ${req.url} Not Found`);
        err.status = HttpStatus.NOT_FOUND;
        next(err);
    });

    // sending response to request in case of err
    app.use((err, req, res) => {
        res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
}

export default loadModules;