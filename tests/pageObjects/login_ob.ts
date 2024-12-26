export class login_ob {

   loginPageTitle: string;

   emailTextBox: string;

   passwordTextBox: string;

   signInButton: string;

   constructor() {

      //Page title
      this.loginPageTitle = '//*[@id="__next"]/div/main/div/div[1]/h2'
      
      //Email text box field
      this.emailTextBox = "Email"
   
      //Password text box field
      this.passwordTextBox = 'Password'
   
      //Sign In button
      this.signInButton= '//*[@id="__next"]/div/main/div/div[3]/div/div[2]/button[1]'
   }
}
