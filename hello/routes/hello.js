
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameTS = req.params.userName;
  if(nameTS == undefined)
    nameTS = 'World';

  res.render('index', {
  	'name': nameTS,
  });
};
