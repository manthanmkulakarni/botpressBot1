var fs = require('fs'),
    request = require('request');


var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

function latest_stories ()
{
  console.log(user.newscat)
    
    request({
        url: 'http://api.amarujala.com/v1/search?keywords='+user.newscat,
        method: 'GET'
    },function(error, response, body){
        if(error)
            console.log("589 erorr");
        else
        {

          

            var res = JSON.parse(body);
            var count = Object.keys(res['news']).length;
            
            
            var i=0;

            if(user.newsflg<count-3){
              i=parseInt(user.newsflg);
            }
            
            
            var newssynopsys1=res['news'][i+0]['News-Synopsis'];
            var newsheadlines1=res['news'][i+0]['Hindi-Headline'];
            
            
            

             
              var newssynopsys2=res['news'][i+1]['News-Synopsis'];
              var newsheadlines2=res['news'][i+1]['Hindi-Headline'];
              
             
                
                

                  
            user.newsurl1=decodeURIComponent(res['news'][i+0]['Share_URL'])  
            user.newsurl2=decodeURIComponent(res['news'][i+1]['Share_URL'])  
              

            user.newsheadlines1=newsheadlines1;
            user.newssynopsys1=newssynopsys1;  

            user.newsheadlines2=newsheadlines2;
            user.newssynopsys2=newssynopsys2;  

             
            
            
            console.log(user.newssynopsys1);
            console.log(user.newsheadlines1);

            console.log(user.newssynopsys2);
            console.log(user.newsheadlines2);

            
        }

    });
}
latest_stories();







