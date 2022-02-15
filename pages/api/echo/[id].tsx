import { NextApiRequest, NextApiResponse } from "next";

interface IdNextApiRequest {
    query: {
        id?: number
    }
}

export default function getById(req: IdNextApiRequest, res: NextApiResponse) {
    // res.statusCode = 200;
    // res.setHeader('Content-type', 'application/json');
    // res.end(req.query.id);
    // or
    res.json({yourId: req.query.id})
}