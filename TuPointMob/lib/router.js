/*Router.configure({
  // the default layout
  layoutTemplate: 'LayoutOne'
});

Router.route('/', function () {
  // set the layout programmatically
  this.layout('LayoutOne');

  // render the PageOne template
  this.render('PageOne');
});

Router.route('/two', function () {
  // set the layout based on a reactive session variable
  this.layout(Session.get('layout') || 'LayoutOne');

  // render the PageTwo template
  this.render('PageTwo');

  // render the PageTwoFooter template to the footer region
  this.render('PageTwoFooter', {to: 'footer'});
});

Router.use(function () {
  if (!this.willBeHandledOnServer())
    console.error("No route found for url " + JSON.stringify(this.url) + ".");
});*/

   


// when you navigate to "/one" automatically render the template named "One".
//Router.route('/one');

// when you navigate to "/two" automatically render the template named "Two".
//Router.route('/two');

Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('login');
});

Router.route('/mycourse', function () {
  // render the Home template with a custom data context
  this.render('mycourse');
});


// Router.route('/two', function () {
//   this.layout('ApplicationLayout', {
//     // set a data context for the whole layout
//     data: {
//       title: 'Master Title'
//     }
// });