class AlredyPresentError extends Error {
    constructor(message) {
        super(message);
    }
};

module.exports = AlredyPresentError;