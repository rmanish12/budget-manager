module.exports = {
    extended: false,
    inflate: true, // When set to true, then deflated (compressed) bodies will be inflated, Defaults to true
    limit: "100kb", // Controls the maximum request body size
    parameterLimit: 1000, // controls the maximum number of parameters that are allowed in the URL-encoded data, Defaults to 1000
    type: "application/x-www-form-urlencoded" // The type option is used to determine what media type the middleware will parse, Defaults to application/x-www-form-urlencoded
};