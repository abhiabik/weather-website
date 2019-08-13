const request = require('request')


const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/8783a39a4b71ecae952c779cdc2ff211/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
    request({url,json:true},(error,{body}) => {
        if(error){
            callback('Unable to connect to weather services',undefined)
        }else if(body.error){
            callback('Unable to find location!',undefined)
        }else{
            callback(undefined,body.daily.data[0].summary+'The Highest Temperature is '+ body.daily.data[0].temperatureHigh + ' degrees and loweset temperature is '+body.daily.data[0].temperatureLow+' degress. It is currently '+body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+ '% chance of rain.' )
        }
    })
}

module.exports = forecast 