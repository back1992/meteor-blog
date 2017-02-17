AccountsTemplates.configure({
  sendVerificationEmail: true,
  showResendVerificationEmailLink: true,
  enforceEmailVerification: true,
  showForgotPasswordLink: true,
});

var layout = 'orionMaterializeOutAdminLayout';
var template = ReactiveTemplates.get('login');

AccountsTemplates.configureRoute('verifyEmail', {
  name: 'verifyEmail',
  path: '/verify-email',
  template: 'orionBootstrapLogin',
  layoutTemplate: 'orionBootstrapOutAdminLayout',
  redirect: '/admin',
});

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPassword',
  path: '/reset-password',
  template: 'orionBootstrapLogin',
  layoutTemplate: 'orionBootstrapOutAdminLayout',
  redirect: '/admin',
});

AccountsTemplates.configureRoute('enrollAccount', {
  name: 'enrollAccount',
  path: '/enroll-account',
  template: 'orionBootstrapLogin',
  layoutTemplate: 'orionBootstrapOutAdminLayout',
  redirect: '/admin',
});

if (Meteor.isServer) {
  Meteor.startup(function () {
      process.env.MAIL_URL="smtp://13261871395:Joomla8@smtp.163.com:25"
  })
  Accounts.emailTemplates.siteName = 'Orion Example';
  // Accounts.emailTemplates.from = 'Orion Example <example@orionjs.org>';
  Accounts.emailTemplates.from = '13261871395@163.com';
}
