const request = require ('request')
const { isRegExp } = require('util')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7a71b08200cf579dbbbca8ab4b331b34&query=' + lat + ',' + long + '&units=m'

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error){
            callback('Unable to find location. Please try again.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.' + 'The wind is coming from the ' + body.current.wind_dir + ". The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast