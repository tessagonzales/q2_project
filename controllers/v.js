var knex = require('../db/knex');

module.exports = {

  //get volunteeer Login
  login: (req, res) => {
    res.render('volunteer_login')
  },

  //get volunteer homepage
  homepage: (req, res) => {
    res.render('volunteer_homepage')
  },

  //get volunteer pa inout
  pa: (req, res) => {
    res.render('volunteer_input_pa')
  },

  validate:(req,res)=>{
    knex('volunteers').where('username', req.body.username)
    .then((volunteers)=>{
      console.log('vol: ', volunteers);
      if(volunteers[0]){
        req.session.volunteer = volunteers[0];
        req.session.save(()=>{
          res.redirect('/volunteer/homepage');
          return;
        })
      }else{
        res.redirect('/volunteer/login');
      }

    })


}//end of validate



} // end of module exports
