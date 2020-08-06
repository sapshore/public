

// Workflow
function getCSRFToken(dest, client){
var req = new $.web.WebRequest($.net.http.GET, '/workflow-service/rest/v1/xsrf-token');
req.headers.set("x-csrf-token", "fetch");
client.request(req, dest);
var response = client.getResponse();
var CSRF = response.headers.get("x-csrf-token");
if(response.status===200){ 
    // do nothing
}
else{
    // handleErrors(response);
    return response.headers;
}
return CSRF;
}

try
{


// Call Workflow API
// var destination =$.net.http.readDestination("com.sap.demo", "WorkflowDestination");
// var client = new $.net.http.Client();
// var xrftoken = getCSRFToken(destination, client);
// var service = "<workflow service API URL>";
// var request = new $.web.WebRequest($.net.http.POST,service);
// request.headers.set('x-csrf-token',xrftoken);
// request.headers.set('Content-Type','application/json');
// $.response.setBody(JSON.stringify(xrftoken));

var dest = $.net.http.readDestination("public.amit.INDENT.services", "destwf");
var client = new $.net.http.Client();
var xrftoken = getCSRFToken(dest, client);
//  var service = "/workflow-service/rest/v1/workflow-instances";
//  var request = new $.web.WebRequest($.net.http.POST,service);
//  request.headers.set('x-csrf-token',xrftoken);
//  request.headers.set('Content-Type','application/json');
//  $.response.setBody(JSON.stringify(xrftoken));
$.response.setBody('Error!Failed to update request due to wrong request call' + xrftoken);
// var response = getCSRFToken(dest, client);
// var res = String(response);
// $.response.setBody(JSON.stringify(res));

}
catch(errorObj){
  $.response.setBody(JSON.stringify({
  ERROR : errorObj.message
  }));
}


