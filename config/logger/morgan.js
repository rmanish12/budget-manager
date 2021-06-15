// module.exports = function(tokens, req, res) {
//     return [
//         tokens.date(req, res),
//         tokens.method(req, res),
//         tokens.url(req, res),
//         tokens.status(req, res),
//         tokens["response-time"](req, res), "ms",
//         tokens["total-time"](req, res), "ms"
//     ].join(" | ");
// };

module.exports = "[:date[iso]] | :method | :url | :status | :response-time ms | :total-time ms";