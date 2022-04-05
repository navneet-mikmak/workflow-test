const async = require("async")
module.exports = {
    getusers: (req, res, next) => {
        async.waterfall([
            (callback) => {
                callback(null, {})

            }
        ], (error, result) => {
            if (error) {
                res.status(400).json({
                    status: false,
                    message: "",
                    data: {}
                })
            } else {
                res.status(200).json({
                    status: true,
                    message: "",
                    data: result
                })
            }

        })

    },
	welcome: (req, res, next) => {
        async.waterfall([
            (callback) => {
                callback(null, {})

            }
        ], (error, result) => {
            if (error) {
                res.status(400).json({
                    status: false,
                    message: "",
                    data: {}
                })
            } else {
                res.status(200).json({
                    message: "Welcome to Application ( Your are in main branch )"
                })
            }

        })

    }
}